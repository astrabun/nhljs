import type {LocalizedString} from './shared.js';

export interface GameTeamInfo {
  id: number;
  name: LocalizedString;
  abbrev: string;
  logo: string;
  darkLogo?: string;
  score?: number;
  sog?: number;
}

export interface PeriodDescriptor {
  number: number;
  periodType: 'REG' | 'OT' | 'SO';
  maxRegulationPeriods: number;
}

export interface BoxscoreSkater {
  playerId: number;
  sweaterNumber: number;
  name: LocalizedString;
  position: string;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  hits: number;
  powerPlayGoals: number;
  shots: number;
  faceoffWinningPctg: number;
  toi: string;
  blockedShots?: number;
  powerPlayPoints?: number;
  shorthandedPoints?: number;
  shGoals?: number;
  shifts?: number;
}

export interface BoxscoreGoalie {
  playerId: number;
  sweaterNumber: number;
  name: LocalizedString;
  position: string;
  evenStrengthShotsAgainst: string;
  powerPlayShotsAgainst: string;
  shorthandedShotsAgainst: string;
  saveShotsAgainst: string;
  savePctg?: number;
  evenStrengthGoalsAgainst: number;
  powerPlayGoalsAgainst: number;
  shorthandedGoalsAgainst: number;
  pim: number;
  goalsAgainst: number;
  toi: string;
}

export interface BoxscoreTeamStats {
  sog: number;
  faceoffWinningPctg: number;
  powerPlay: string;
  powerPlayPct: number | null;
  pim: number;
  hits: number;
  blockedShots: number;
  giveaways: number;
  takeaways: number;
}

export interface BoxscoreResponse {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: {default: string};
  venueLocation: {default: string};
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  gameState: string;
  gameScheduleState: string;
  periodDescriptor: PeriodDescriptor;
  awayTeam: GameTeamInfo;
  homeTeam: GameTeamInfo;
  playerByGameStats: {
    awayTeam: {
      forwards: BoxscoreSkater[];
      defense: BoxscoreSkater[];
      goalies: BoxscoreGoalie[];
    };
    homeTeam: {
      forwards: BoxscoreSkater[];
      defense: BoxscoreSkater[];
      goalies: BoxscoreGoalie[];
    };
  };
  teamGameStats: {
    category: string;
    awayValue: string | number;
    homeValue: string | number;
  }[];
  gameVideo?: {
    threeMinRecap?: number;
    condensedGame?: number;
  };
}

export interface PlayByPlayEvent {
  eventId: number;
  periodDescriptor: PeriodDescriptor;
  timeInPeriod: string;
  timeRemaining: string;
  situationCode?: string;
  homeTeamDefendingSide?: 'left' | 'right';
  typeCode: number;
  typeDescKey: string;
  sortOrder: number;
  details?: Record<string, unknown>;
}

export interface PlayByPlayResponse {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  gameState: string;
  homeTeam: GameTeamInfo;
  awayTeam: GameTeamInfo;
  plays: PlayByPlayEvent[];
  rosterSpots: {
    teamId: number;
    playerId: number;
    sweaterNumber: number;
    positionCode: string;
    firstName: LocalizedString;
    lastName: LocalizedString;
    headshot: string;
  }[];
}

export interface LandingResponse {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  gameState: string;
  gameScheduleState: string;
  venue: {default: string};
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  tvBroadcasts: unknown[];
  awayTeam: GameTeamInfo & {record?: string};
  homeTeam: GameTeamInfo & {record?: string};
  periodDescriptor: PeriodDescriptor;
  situation?: unknown;
  clock?: {
    timeRemaining: string;
    secondsRemaining: number;
    running: boolean;
    inIntermission: boolean;
  };
  summary?: unknown;
  matchup?: unknown;
  [key: string]: unknown;
}

export interface ScoreGame {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  gameState: string;
  gameScheduleState: string;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  awayTeam: GameTeamInfo;
  homeTeam: GameTeamInfo;
  periodDescriptor: PeriodDescriptor;
  gameCenterLink?: string;
  clock?: {
    timeRemaining: string;
    secondsRemaining: number;
    running: boolean;
    inIntermission: boolean;
  };
}

export interface ScoresResponse {
  prevDate?: string;
  currentDate: string;
  nextDate?: string;
  gamesByDate?: ScoreGame[];
  games?: ScoreGame[];
}
