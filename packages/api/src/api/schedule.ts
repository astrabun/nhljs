import type {HttpClient} from '../http/HttpClient.js';
import type {
  ScheduleResponse,
  TeamSeasonScheduleResponse,
  PlayoffCarouselResponse,
  PlayoffBracketResponse,
} from '../types/schedule.js';
import type {SeasonId, TeamAbbrev} from '../types/shared.js';

export class ScheduleAPI {
  constructor(private readonly http: HttpClient) {}

  getByDate(date: string): Promise<ScheduleResponse> {
    return this.http.get(`/schedule/${date}`);
  }

  getNow(): Promise<ScheduleResponse> {
    return this.http.get('/schedule/now');
  }

  getTeamSeason(
    team: TeamAbbrev,
    season: SeasonId,
  ): Promise<TeamSeasonScheduleResponse> {
    return this.http.get(`/club-schedule-season/${team}/${season}`);
  }

  getTeamSeasonNow(team: TeamAbbrev): Promise<TeamSeasonScheduleResponse> {
    return this.http.get(`/club-schedule-season/${team}/now`);
  }

  getTeamMonth(
    team: TeamAbbrev,
    yearMonth: string,
  ): Promise<TeamSeasonScheduleResponse> {
    return this.http.get(`/club-schedule/${team}/month/${yearMonth}`);
  }

  getTeamMonthNow(team: TeamAbbrev): Promise<TeamSeasonScheduleResponse> {
    return this.http.get(`/club-schedule/${team}/month/now`);
  }

  getTeamWeek(
    team: TeamAbbrev,
    date: string,
  ): Promise<TeamSeasonScheduleResponse> {
    return this.http.get(`/club-schedule/${team}/week/${date}`);
  }

  getTeamWeekNow(team: TeamAbbrev): Promise<TeamSeasonScheduleResponse> {
    return this.http.get(`/club-schedule/${team}/week/now`);
  }

  getPlayoffCarousel(season: SeasonId): Promise<PlayoffCarouselResponse> {
    return this.http.get(`/playoff-series/carousel/${season}`);
  }

  getPlayoffBracket(year: number): Promise<PlayoffBracketResponse> {
    return this.http.get(`/playoff-bracket/${year}`);
  }
}
