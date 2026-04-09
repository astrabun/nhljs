export interface TvBroadcast {
  id: number;
  market: 'N' | 'H' | 'A';
  countryCode: string;
  network: string;
  sequenceNumber?: number;
}

export interface ScheduleTeam {
  id: number;
  city?: string;
  commonName?: {default: string};
  abbrev: string;
  logo: string;
  darkLogo?: string;
  score?: number;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
  hotelLink?: string;
  hotelDesc?: string;
  ticketsLink?: string;
}

export interface GameOutcome {
  lastPeriodType: 'REG' | 'OT' | 'SO';
}

export interface GoalScorer {
  playerId: number;
  firstInitial: {default: string};
  lastName: {default: string};
}

export interface ScheduleGame {
  id: number;
  season: number;
  gameType: number;
  venue?: string;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone?: string;
  gameState: 'FUT' | 'LIVE' | 'FINAL' | 'OFF' | 'PRE' | 'CRIT';
  gameScheduleState: string;
  tvBroadcasts: TvBroadcast[];
  awayTeam: ScheduleTeam;
  homeTeam: ScheduleTeam;
  periodDescriptor?: {
    number?: number;
    periodType?: string;
    maxRegulationPeriods?: number;
  };
  gameOutcome?: GameOutcome;
  winningGoalie?: GoalScorer;
  winningGoalScorer?: GoalScorer;
  specialEvent?: string;
  gameCenterLink?: string;
  threeMinRecap?: string;
  condensedGame?: string;
}

export interface GameDay {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
  games: ScheduleGame[];
}

export interface ScheduleResponse {
  nextStartDate?: string;
  previousStartDate?: string;
  gameWeek: GameDay[];
  preSeasonStartDate?: string;
  regularSeasonStartDate?: string;
  regularSeasonEndDate?: string;
  playoffEndDate?: string;
  numberOfGames?: number;
  oddsPartners?: unknown[];
}

export interface TeamSeasonScheduleResponse {
  previousSeason?: number;
  currentSeason?: number;
  nextSeason?: number;
  games: ScheduleGame[];
}

export interface PlayoffSeries {
  season: number;
  seriesLetter: string;
  seriesTitle?: string;
  seriesAbbrev?: string;
  neededToWin: number;
  topSeedTeam: ScheduleTeam & {wins: number};
  bottomSeedTeam: ScheduleTeam & {wins: number};
  currentGame?: {
    id: number;
    season: number;
    gameType: number;
    gameDate: string;
  };
}

export interface PlayoffCarouselResponse {
  season: number;
  rounds: {
    roundNumber: number;
    roundLabel?: string;
    series: PlayoffSeries[];
  }[];
}

export interface PlayoffBracketResponse {
  id: number;
  [key: string]: unknown;
}
