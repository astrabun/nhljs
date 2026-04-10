import {WebSocketServer, type WebSocket} from 'ws';
import {NHLClient, type TeamAbbrev} from '@nhljs/api';
import {GamePoller} from './gamePoller.js';

export interface ScoreboardWSServerOptions {
  port: number;
}

interface SubscribeMessage {
  type: 'subscribe';
  team: string;
}

function isSubscribeMessage(msg: unknown): msg is SubscribeMessage {
  return (
    typeof msg === 'object' &&
    msg !== null &&
    (msg as Record<string, unknown>).type === 'subscribe' &&
    typeof (msg as Record<string, unknown>).team === 'string' &&
    ((msg as Record<string, unknown>).team as string).length > 0
  );
}

export class ScoreboardWSServer {
  private readonly wss: WebSocketServer;
  private readonly client: NHLClient;
  private readonly pollers = new Map<TeamAbbrev, GamePoller>();

  constructor(options: ScoreboardWSServerOptions) {
    this.client = new NHLClient();
    this.wss = new WebSocketServer({port: options.port});
    this.wss.on('connection', (ws) => this.handleConnection(ws));
  }

  private handleConnection(ws: WebSocket): void {
    ws.once('message', (raw) => {
      let parsed: unknown;
      try {
        let text: string;
        if (Buffer.isBuffer(raw)) {
          text = raw.toString('utf8');
        } else if (raw instanceof ArrayBuffer) {
          text = Buffer.from(raw).toString('utf8');
        } else {
          text = Buffer.concat(raw).toString('utf8');
        }
        parsed = JSON.parse(text);
      } catch {
        ws.close(1003, 'Expected JSON subscribe message');
        return;
      }

      if (!isSubscribeMessage(parsed)) {
        ws.close(1003, 'Expected { type: "subscribe", team: "<ABBREV>" }');
        return;
      }

      const team = parsed.team.toUpperCase() as TeamAbbrev;
      this.subscribe(ws, team);
    });
  }

  private subscribe(ws: WebSocket, team: TeamAbbrev): void {
    let poller = this.pollers.get(team);
    if (!poller) {
      poller = new GamePoller(this.client, team);
      this.pollers.set(team, poller);
      poller.start();
    }

    poller.add(ws);

    ws.on('close', () => this.maybeCleanup(team));
    ws.on('error', () => this.maybeCleanup(team));
  }

  private maybeCleanup(team: TeamAbbrev): void {
    const poller = this.pollers.get(team);
    if (poller && poller.size === 0) {
      poller.stop();
      this.pollers.delete(team);
    }
  }

  close(): void {
    for (const [, poller] of this.pollers) {
      poller.stop();
    }
    this.pollers.clear();
    this.wss.close();
  }
}
