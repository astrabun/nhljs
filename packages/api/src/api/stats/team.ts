import type {HttpClient} from '../../http/HttpClient.js';
import type {StatsParams, StatsResponse} from '../../types/shared.js';
import type {
  TeamSummary,
  TeamPowerPlay,
  TeamPenaltyKill,
} from '../../types/stats.js';

function toParams(
  params?: StatsParams,
): Record<string, string | number | boolean> {
  return (params ?? {}) as Record<string, string | number | boolean>;
}

export class TeamStatsAPI {
  constructor(private readonly http: HttpClient) {}

  getSummary(params?: StatsParams): Promise<StatsResponse<TeamSummary>> {
    return this.http.get('/en/team/summary', toParams(params));
  }

  getFaceoffPercentages(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/faceoffpercentages', toParams(params));
  }

  getDaysBetweenGames(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/daysbetweengames', toParams(params));
  }

  getFaceoffWins(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/faceoffwins', toParams(params));
  }

  getGoalsAgainstByStrength(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/goalsagainstbystrength', toParams(params));
  }

  getGoalsByPeriod(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/goalsbyperiod', toParams(params));
  }

  getGoalsForByStrength(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/goalsforbystrength', toParams(params));
  }

  getLeadingTrailing(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/leadingtrailing', toParams(params));
  }

  getRealtime(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/realtime', toParams(params));
  }

  getOutshootOutshotBy(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/outshootoutshotby', toParams(params));
  }

  getPenalties(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/penalties', toParams(params));
  }

  getPenaltyKill(
    params?: StatsParams,
  ): Promise<StatsResponse<TeamPenaltyKill>> {
    return this.http.get('/en/team/penaltykill', toParams(params));
  }

  getPenaltyKillTime(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/penaltykilltime', toParams(params));
  }

  getPowerPlay(params?: StatsParams): Promise<StatsResponse<TeamPowerPlay>> {
    return this.http.get('/en/team/powerplay', toParams(params));
  }

  getPowerPlayTime(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/powerplaytime', toParams(params));
  }

  getSummaryShooting(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/summaryshooting', toParams(params));
  }

  getPercentages(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/percentages', toParams(params));
  }

  getScoreTrailFirst(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/scoretrailfirst', toParams(params));
  }

  getShootout(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/shootout', toParams(params));
  }

  getShotType(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/shottype', toParams(params));
  }

  getGoalGames(
    params?: StatsParams,
  ): Promise<StatsResponse<Record<string, unknown>>> {
    return this.http.get('/en/team/goalgames', toParams(params));
  }
}
