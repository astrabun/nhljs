import type {HttpClient} from '../http/HttpClient.js';
import type {GameType, PlayerId, SeasonId} from '../types/shared.js';

export class EdgeAPI {
  constructor(private readonly http: HttpClient) {}

  getSkaterDetail(playerId: PlayerId): Promise<unknown> {
    return this.http.get(`/edge/skater-detail/${playerId}/now`);
  }

  getSkaterDetailBySeason(
    playerId: PlayerId,
    season: SeasonId,
    gameType: GameType,
  ): Promise<unknown> {
    return this.http.get(
      `/edge/skater-detail/${playerId}/${season}/${gameType}`,
    );
  }

  getShotSpeed(playerId: PlayerId): Promise<unknown> {
    return this.http.get(`/edge/skater-shot-speed-detail/${playerId}/now`);
  }

  getShotSpeedBySeason(
    playerId: PlayerId,
    season: SeasonId,
    gameType: GameType,
  ): Promise<unknown> {
    return this.http.get(
      `/edge/skater-shot-speed-detail/${playerId}/${season}/${gameType}`,
    );
  }

  getSkatingSpeed(playerId: PlayerId): Promise<unknown> {
    return this.http.get(`/edge/skater-skating-speed-detail/${playerId}/now`);
  }

  getSkatingSpeedBySeason(
    playerId: PlayerId,
    season: SeasonId,
    gameType: GameType,
  ): Promise<unknown> {
    return this.http.get(
      `/edge/skater-skating-speed-detail/${playerId}/${season}/${gameType}`,
    );
  }

  getShotLocation(playerId: PlayerId): Promise<unknown> {
    return this.http.get(`/edge/skater-shot-location-detail/${playerId}/now`);
  }

  getSkatingDistance(playerId: PlayerId): Promise<unknown> {
    return this.http.get(
      `/edge/skater-skating-distance-detail/${playerId}/now`,
    );
  }
}
