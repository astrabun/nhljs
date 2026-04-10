import type {WebSocket} from 'ws';
import type {NHLClient, TeamAbbrev, LandingResponse} from '@nhljs/api';
import {findGameForTeam} from './gameFinder.js';

export interface UpdateMessage {
  type: 'update';
  team: TeamAbbrev;
  gameId: number;
  data: LandingResponse;
}

export interface ErrorMessage {
  type: 'error';
  team: TeamAbbrev;
  message: string;
}

export type ServerMessage = UpdateMessage | ErrorMessage;

const POLL_INTERVAL_MS = 1000;
const RETRY_INTERVAL_MS = 30_000;

export class GamePoller {
  private readonly subscribers = new Set<WebSocket>();
  private interval: ReturnType<typeof setInterval> | undefined = undefined;
  private gameId: number | undefined = undefined;

  constructor(
    private readonly client: NHLClient,
    private readonly team: TeamAbbrev,
  ) {}

  add(ws: WebSocket): void {
    this.subscribers.add(ws);
    ws.on('close', () => this.remove(ws));
    ws.on('error', () => this.remove(ws));
  }

  remove(ws: WebSocket): void {
    this.subscribers.delete(ws);
  }

  get size(): number {
    return this.subscribers.size;
  }

  start(): void {
    void this.findAndPoll();
  }

  stop(): void {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  private broadcast(msg: ServerMessage): void {
    const payload = JSON.stringify(msg);
    for (const ws of this.subscribers) {
      if (ws.readyState === ws.OPEN) {
        ws.send(payload);
      }
    }
  }

  private async findAndPoll(): Promise<void> {
    this.gameId = await findGameForTeam(this.client, this.team);

    if (this.gameId === undefined) {
      this.broadcast({
        message: `No game found for ${this.team} today or yesterday`,
        team: this.team,
        type: 'error',
      });
      // Retry finding a game after 30s
      this.interval = setInterval(() => {
        void this.retryFind();
      }, RETRY_INTERVAL_MS);
      return;
    }

    this.startPolling(this.gameId);
  }

  private async retryFind(): Promise<void> {
    const id = await findGameForTeam(this.client, this.team);
    if (id !== undefined) {
      this.stop();
      this.gameId = id;
      this.startPolling(id);
    }
  }

  private startPolling(gameId: number): void {
    this.interval = setInterval(() => {
      void this.fetchAndBroadcast(gameId);
    }, POLL_INTERVAL_MS);
  }

  private async fetchAndBroadcast(gameId: number): Promise<void> {
    try {
      const data = await this.client.gameCenter.getLanding(gameId);
      this.broadcast({data, gameId, team: this.team, type: 'update'});
    } catch (error) {
      this.broadcast({
        message: error instanceof Error ? error.message : String(error),
        team: this.team,
        type: 'error',
      });
    }
  }
}
