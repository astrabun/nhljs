import type {HttpClient} from '../../http/HttpClient.js';
import type {StatsParams, StatsResponse} from '../../types/shared.js';
import type {
  GoalieSummary,
  GoalieAdvanced,
  GoalieBio,
} from '../../types/stats.js';

function toParams(
  params?: StatsParams,
): Record<string, string | number | boolean> {
  return (params ?? {}) as Record<string, string | number | boolean>;
}

export class GoalieStatsAPI {
  constructor(private readonly http: HttpClient) {}

  getSummary(params?: StatsParams): Promise<StatsResponse<GoalieSummary>> {
    return this.http.get('/en/goalie/summary', toParams(params));
  }

  getAdvanced(params?: StatsParams): Promise<StatsResponse<GoalieAdvanced>> {
    return this.http.get('/en/goalie/advanced', toParams(params));
  }

  getBios(params?: StatsParams): Promise<StatsResponse<GoalieBio>> {
    return this.http.get('/en/goalie/bios', toParams(params));
  }

  getDaysRest(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/goalie/daysrest', toParams(params));
  }

  getPenaltyShots(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/goalie/penaltyShots', toParams(params));
  }

  getSavesByStrength(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/goalie/savesByStrength', toParams(params));
  }

  getShootout(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/goalie/shootout', toParams(params));
  }

  getStartedVsRelieved(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/goalie/startedVsRelieved', toParams(params));
  }
}
