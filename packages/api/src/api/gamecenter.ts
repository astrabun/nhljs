import type {HttpClient} from '../http/HttpClient.js';
import type {
  BoxscoreResponse,
  PlayByPlayResponse,
  LandingResponse,
  ScoresResponse,
} from '../types/gamecenter.js';
import type {GameId} from '../types/shared.js';

export class GameCenterAPI {
  constructor(private readonly http: HttpClient) {}

  getBoxscore(gameId: GameId): Promise<BoxscoreResponse> {
    return this.http.get(`/gamecenter/${gameId}/boxscore`);
  }

  getPlayByPlay(gameId: GameId): Promise<PlayByPlayResponse> {
    return this.http.get(`/gamecenter/${gameId}/play-by-play`);
  }

  getLanding(gameId: GameId): Promise<LandingResponse> {
    return this.http.get(`/gamecenter/${gameId}/landing`);
  }

  getRightRail(gameId: GameId): Promise<unknown> {
    return this.http.get(`/gamecenter/${gameId}/right-rail`);
  }

  getScores(date: string): Promise<ScoresResponse> {
    return this.http.get(`/score/${date}`);
  }

  getScoresNow(): Promise<ScoresResponse> {
    return this.http.get('/score/now');
  }
}
