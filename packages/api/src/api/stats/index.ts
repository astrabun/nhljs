import type {HttpClient} from '../../http/HttpClient.js';
import {SkaterStatsAPI} from './skater.js';
import {TeamStatsAPI} from './team.js';
import {GoalieStatsAPI} from './goalie.js';

export class StatsAPI {
  readonly skaters: SkaterStatsAPI;
  readonly teams: TeamStatsAPI;
  readonly goalies: GoalieStatsAPI;

  constructor(http: HttpClient) {
    this.skaters = new SkaterStatsAPI(http);
    this.teams = new TeamStatsAPI(http);
    this.goalies = new GoalieStatsAPI(http);
  }
}

export {SkaterStatsAPI, TeamStatsAPI, GoalieStatsAPI};
