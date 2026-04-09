import type {HttpClient} from '../http/HttpClient.js';
import type {
  PlayerLandingResponse,
  PlayerGameLogResponse,
  PlayerSearchResult,
} from '../types/players.js';
import type {GameType, PlayerId, SeasonId} from '../types/shared.js';

export class PlayersAPI {
  constructor(
    private readonly webHttp: HttpClient,
    private readonly searchHttp: HttpClient,
  ) {}

  getLanding(playerId: PlayerId): Promise<PlayerLandingResponse> {
    return this.webHttp.get(`/player/${playerId}/landing`);
  }

  getGameLog(
    playerId: PlayerId,
    season: SeasonId,
    gameType: GameType,
  ): Promise<PlayerGameLogResponse> {
    return this.webHttp.get(
      `/player/${playerId}/game-log/${season}/${gameType}`,
    );
  }

  search(query: string, limit = 20): Promise<PlayerSearchResult[]> {
    return this.searchHttp.get('/search/player', {
      culture: 'en-us',
      limit,
      q: query,
    });
  }
}
