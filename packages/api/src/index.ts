export {NHLClient} from './client/NHLClient.js';

// Types
export type {
  TeamAbbrev,
  SeasonId,
  GameType,
  GameId,
  PlayerId,
  StatsParams,
  StatsResponse,
  LocalizedString,
} from './types/shared.js';
export type {
  TvBroadcast,
  ScheduleTeam,
  ScheduleGame,
  GameDay,
  ScheduleResponse,
  TeamSeasonScheduleResponse,
  PlayoffCarouselResponse,
  PlayoffBracketResponse,
  PlayoffSeries,
} from './types/schedule.js';
export type {
  StandingTeam,
  StandingsResponse,
  SeasonInfo,
  StandingsSeasonManifestResponse,
} from './types/standings.js';
export type {
  GameTeamInfo,
  PeriodDescriptor,
  BoxscoreSkater,
  BoxscoreGoalie,
  BoxscoreResponse,
  PlayByPlayEvent,
  PlayByPlayResponse,
  LandingResponse,
  ScoreGame,
  ScoresResponse,
} from './types/gamecenter.js';
export type {
  PlayerBio,
  SkaterSeasonStats,
  GoalieSeasonStats,
  PlayerLandingResponse,
  SkaterGameLogEntry,
  GoalieGameLogEntry,
  PlayerGameLogResponse,
  PlayerSearchResult,
  RosterPlayer,
  RosterResponse,
  ProspectPlayer,
  ProspectsResponse,
} from './types/players.js';
export type {
  SkaterSummary,
  SkaterBio,
  SkaterPowerPlay,
  SkaterTimeOnIce,
  GoalieSummary,
  GoalieAdvanced,
  GoalieBio,
  TeamSummary,
  TeamPowerPlay,
  TeamPenaltyKill,
} from './types/stats.js';
export type {
  Country,
  CountriesResponse,
  Season,
  SeasonsResponse,
  Franchise,
  FranchisesResponse,
  DraftEntry,
  DraftResponse,
  GlossaryEntry,
  GlossaryResponse,
  ConfigResponse,
} from './types/misc.js';

// API classes (for advanced usage / extension)
export {ScheduleAPI} from './api/schedule.js';
export {StandingsAPI} from './api/standings.js';
export {GameCenterAPI} from './api/gamecenter.js';
export {PlayersAPI} from './api/players.js';
export {RosterAPI} from './api/roster.js';
export {EdgeAPI} from './api/edge.js';
export {MiscAPI} from './api/misc.js';
export {
  StatsAPI,
  SkaterStatsAPI,
  TeamStatsAPI,
  GoalieStatsAPI,
} from './api/stats/index.js';
export {HttpClient} from './http/HttpClient.js';
