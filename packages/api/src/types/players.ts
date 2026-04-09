import type {LocalizedString} from './shared.js';

export interface PlayerBio {
  playerId: number;
  isActive: boolean;
  currentTeamId?: number;
  currentTeamAbbrev?: string;
  currentTeamRosterStatus?: string;
  sweaterNumber?: number;
  position: string;
  headshot: string;
  heroImage?: string;
  firstName: LocalizedString;
  lastName: LocalizedString;
  birthCity: LocalizedString;
  birthCountry: string;
  birthStateProvince?: LocalizedString;
  birthDate: string;
  heightInInches: number;
  heightInCentimeters: number;
  weightInPounds: number;
  weightInKilograms: number;
  shootsCatches: 'L' | 'R';
  draftDetails?: {
    year: number;
    teamAbbrev: string;
    round: number;
    pickInRound: number;
    overallPick: number;
  };
}

export interface SkaterSeasonStats {
  season: number;
  gameTypeId: number;
  teamName?: LocalizedString;
  teamCommonName?: LocalizedString;
  teamAbbrev?: LocalizedString;
  sequence?: number;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  gameWinningGoals: number;
  otGoals: number;
  shots: number;
  shootingPctg: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  faceoffWinningPctg?: number;
  avgToi?: string;
}

export interface GoalieSeasonStats {
  season: number;
  gameTypeId: number;
  teamName?: LocalizedString;
  teamCommonName?: LocalizedString;
  teamAbbrev?: LocalizedString;
  sequence?: number;
  gamesPlayed: number;
  gamesStarted: number;
  wins: number;
  losses: number;
  otLosses: number;
  goalsAgainstAvg: number;
  savePctg: number;
  shotsAgainst: number;
  saves: number;
  goalsAgainst: number;
  shutouts: number;
  goals: number;
  assists: number;
  pim: number;
  toi: string;
}

export interface PlayerLandingResponse extends PlayerBio {
  inTop100AllTime?: number;
  inHHOF?: number;
  featuredStats?: {
    regularSeason: {
      subSeason: SkaterSeasonStats | GoalieSeasonStats;
      career: SkaterSeasonStats | GoalieSeasonStats;
    };
    season?: number;
  };
  careerTotals?: {
    regularSeason: SkaterSeasonStats | GoalieSeasonStats;
    playoffs?: SkaterSeasonStats | GoalieSeasonStats;
  };
  last5Games?: Record<string, unknown>[];
  seasonTotals?: (SkaterSeasonStats | GoalieSeasonStats)[];
  awards?: {
    trophy: LocalizedString;
    seasons: {seasonId: number; gamesPlayed: number}[];
  }[];
  currentTeamRoster?: {
    playerId: number;
    lastName: LocalizedString;
    firstName: LocalizedString;
    playerSlug: string;
  }[];
}

export interface SkaterGameLogEntry {
  gameId: number;
  teamAbbrev: string;
  homeRoadFlag: 'H' | 'R';
  gameDate: string;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  gameWinningGoals: number;
  otGoals: number;
  shots: number;
  shifts: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  pim: number;
  toi: string;
  commonName: LocalizedString;
  opponentCommonName: LocalizedString;
  opponentAbbrev: string;
}

export interface GoalieGameLogEntry {
  gameId: number;
  teamAbbrev: string;
  homeRoadFlag: 'H' | 'R';
  gameDate: string;
  gamesStarted: number;
  decision?: 'W' | 'L' | 'O';
  shotsAgainst: number;
  goalsAgainst: number;
  savePctg: number;
  shutouts: number;
  toi: string;
  commonName: LocalizedString;
  opponentCommonName: LocalizedString;
  opponentAbbrev: string;
}

export interface PlayerGameLogResponse {
  gameLog: SkaterGameLogEntry[] | GoalieGameLogEntry[];
  playerStatsSeasons?: {season: number; gameTypes: number[]}[];
}

export interface PlayerSearchResult {
  playerId: number;
  name: string;
  positionCode: string;
  teamId?: number;
  teamAbbrev?: string;
  active?: boolean;
  height?: string;
  weightInPounds?: number;
  birthCity?: string;
  birthCountryCode?: string;
  lastSeasonId?: string;
  sweaterNumber?: number;
}

export interface RosterPlayer {
  id: number;
  headshot: string;
  firstName: LocalizedString;
  lastName: LocalizedString;
  sweaterNumber: number;
  positionCode: string;
  shootsCatches: 'L' | 'R';
  heightInInches: number;
  weightInPounds: number;
  heightInCentimeters: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: LocalizedString;
  birthCountry: string;
  birthStateProvince?: LocalizedString;
}

export interface RosterResponse {
  forwards: RosterPlayer[];
  defensemen: RosterPlayer[];
  goalies: RosterPlayer[];
}

export interface ProspectPlayer extends RosterPlayer {
  draftDetails?: {
    year: number;
    teamAbbrev: string;
    round: number;
    pickInRound: number;
    overallPick: number;
  };
}

export interface ProspectsResponse {
  forwards: ProspectPlayer[];
  defensemen: ProspectPlayer[];
  goalies: ProspectPlayer[];
}
