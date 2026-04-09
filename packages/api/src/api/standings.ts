import type {HttpClient} from '../http/HttpClient.js';
import type {
  StandingsResponse,
  StandingsSeasonManifestResponse,
} from '../types/standings.js';

export class StandingsAPI {
  constructor(private readonly http: HttpClient) {}

  getByDate(date: string): Promise<StandingsResponse> {
    return this.http.get(`/standings/${date}`);
  }

  getNow(): Promise<StandingsResponse> {
    return this.http.get('/standings/now');
  }

  getSeasonManifest(): Promise<StandingsSeasonManifestResponse> {
    return this.http.get('/standings-season');
  }
}
