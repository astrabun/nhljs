import type {HttpClient} from '../http/HttpClient.js';
import type {RosterResponse, ProspectsResponse} from '../types/players.js';
import type {SeasonId, TeamAbbrev} from '../types/shared.js';

export class RosterAPI {
  constructor(private readonly http: HttpClient) {}

  getTeam(team: TeamAbbrev, season: SeasonId): Promise<RosterResponse> {
    return this.http.get(`/roster/${team}/${season}`);
  }

  getProspects(team: TeamAbbrev): Promise<ProspectsResponse> {
    return this.http.get(`/prospects/${team}`);
  }
}
