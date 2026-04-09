import type {HttpClient} from '../../http/HttpClient.js';
import type {StatsParams, StatsResponse} from '../../types/shared.js';
import type {
  SkaterSummary,
  SkaterBio,
  SkaterPowerPlay,
  SkaterTimeOnIce,
} from '../../types/stats.js';

function toParams(
  params?: StatsParams,
): Record<string, string | number | boolean> {
  return (params ?? {}) as Record<string, string | number | boolean>;
}

export class SkaterStatsAPI {
  constructor(private readonly http: HttpClient) {}

  getSummary(params?: StatsParams): Promise<StatsResponse<SkaterSummary>> {
    return this.http.get('/en/skater/summary', toParams(params));
  }

  getBios(params?: StatsParams): Promise<StatsResponse<SkaterBio>> {
    return this.http.get('/en/skater/bios', toParams(params));
  }

  getFaceoffPercentages(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/faceoffpercentages', toParams(params));
  }

  getFaceoffWins(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/faceoffwins', toParams(params));
  }

  getGoalsForAgainst(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/goalsForAgainst', toParams(params));
  }

  getRealtime(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/realtime', toParams(params));
  }

  getPenalties(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/penalties', toParams(params));
  }

  getPenaltyKill(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/penaltykill', toParams(params));
  }

  getPowerPlay(params?: StatsParams): Promise<StatsResponse<SkaterPowerPlay>> {
    return this.http.get('/en/skater/powerplay', toParams(params));
  }

  getPuckPossessions(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/puckPossessions', toParams(params));
  }

  getSummaryShoothing(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/summaryshooting', toParams(params));
  }

  getPercentages(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/percentages', toParams(params));
  }

  getScoringRates(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/scoringRates', toParams(params));
  }

  getScoringPerGame(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/scoringpergame', toParams(params));
  }

  getShootout(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/shootout', toParams(params));
  }

  getShotType(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/skater/shottype', toParams(params));
  }

  getTimeOnIce(params?: StatsParams): Promise<StatsResponse<SkaterTimeOnIce>> {
    return this.http.get('/en/skater/timeonice', toParams(params));
  }
}
