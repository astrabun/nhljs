import {HttpClient} from '../http/HttpClient.js';
import {ScheduleAPI} from '../api/schedule.js';
import {StandingsAPI} from '../api/standings.js';
import {GameCenterAPI} from '../api/gamecenter.js';
import {PlayersAPI} from '../api/players.js';
import {RosterAPI} from '../api/roster.js';
import {EdgeAPI} from '../api/edge.js';
import {MiscAPI} from '../api/misc.js';
import {StatsAPI} from '../api/stats/index.js';

const WEB_API_BASE = 'https://api-web.nhle.com/v1';
const STATS_API_BASE = 'https://api.nhle.com/stats/rest';
const SEARCH_API_BASE = 'https://search.d3.nhle.com/api/v1';

export class NHLClient {
  readonly schedule: ScheduleAPI;
  readonly standings: StandingsAPI;
  readonly gameCenter: GameCenterAPI;
  readonly players: PlayersAPI;
  readonly roster: RosterAPI;
  readonly edge: EdgeAPI;
  readonly stats: StatsAPI;
  readonly misc: MiscAPI;

  constructor() {
    const webHttp = new HttpClient(WEB_API_BASE);
    const statsHttp = new HttpClient(STATS_API_BASE);
    const searchHttp = new HttpClient(SEARCH_API_BASE);

    this.schedule = new ScheduleAPI(webHttp);
    this.standings = new StandingsAPI(webHttp);
    this.gameCenter = new GameCenterAPI(webHttp);
    this.players = new PlayersAPI(webHttp, searchHttp);
    this.roster = new RosterAPI(webHttp);
    this.edge = new EdgeAPI(webHttp);
    this.stats = new StatsAPI(statsHttp);
    this.misc = new MiscAPI(statsHttp);
  }
}
