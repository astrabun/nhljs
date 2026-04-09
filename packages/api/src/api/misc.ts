import type {HttpClient} from '../http/HttpClient.js';
import type {
  CountriesResponse,
  SeasonsResponse,
  FranchisesResponse,
  DraftResponse,
  GlossaryResponse,
  ConfigResponse,
} from '../types/misc.js';
import type {StatsParams} from '../types/shared.js';

export class MiscAPI {
  constructor(private readonly http: HttpClient) {}

  getCountries(): Promise<CountriesResponse> {
    return this.http.get('/en/country');
  }

  getSeasons(): Promise<SeasonsResponse> {
    return this.http.get('/en/season');
  }

  getFranchises(): Promise<FranchisesResponse> {
    return this.http.get('/en/franchise');
  }

  getDraft(params?: StatsParams): Promise<DraftResponse> {
    return this.http.get(
      '/en/draft',
      params as Record<string, string | number | boolean>,
    );
  }

  getGlossary(): Promise<GlossaryResponse> {
    return this.http.get('/en/glossary', {sort: 'fullName'});
  }

  getConfig(): Promise<ConfigResponse> {
    return this.http.get('/en/config');
  }
}
