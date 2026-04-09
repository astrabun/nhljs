export interface StandingTeam {
  teamName: {default: string; fr?: string};
  teamCommonName: {default: string};
  teamAbbrev: {default: string};
  teamLogo: string;
  conferenceAbbrev?: string;
  conferenceName?: string;
  conferenceHomeSequence?: number;
  conferenceL10Sequence?: number;
  conferenceRoadSequence?: number;
  conferenceSequence?: number;
  date: string;
  divisionAbbrev?: string;
  divisionName?: string;
  divisionHomeSequence?: number;
  divisionL10Sequence?: number;
  divisionRoadSequence?: number;
  divisionSequence?: number;
  gameTypeId: number;
  gamesPlayed: number;
  goalAgainst: number;
  goalDifferential: number;
  goalDifferentialPctg: number;
  goalFor: number;
  goalsForPctg: number;
  homeGamesPlayed: number;
  homeGoalDifferential: number;
  homeGoalsAgainst: number;
  homeGoalsFor: number;
  homeLosses: number;
  homeOtLosses: number;
  homePoints: number;
  homeRegulationPlusOtWins: number;
  homeRegulationWins: number;
  homeTies?: number;
  homeWins: number;
  l10GamesPlayed: number;
  l10GoalDifferential: number;
  l10GoalsAgainst: number;
  l10GoalsFor: number;
  l10Losses: number;
  l10OtLosses: number;
  l10Points: number;
  l10RegulationPlusOtWins: number;
  l10RegulationWins: number;
  l10Ties?: number;
  l10Wins: number;
  leagueHomeSequence?: number;
  leagueL10Sequence?: number;
  leagueRoadSequence?: number;
  leagueSequence?: number;
  losses: number;
  otLosses: number;
  placeName: {default: string};
  pointPctg: number;
  points: number;
  regulationPlusOtWinPctg: number;
  regulationPlusOtWins: number;
  regulationWinPctg: number;
  regulationWins: number;
  roadGamesPlayed: number;
  roadGoalDifferential: number;
  roadGoalsAgainst: number;
  roadGoalsFor: number;
  roadLosses: number;
  roadOtLosses: number;
  roadPoints: number;
  roadRegulationPlusOtWins: number;
  roadRegulationWins: number;
  roadTies?: number;
  roadWins: number;
  seasonId: number;
  shootoutLosses: number;
  shootoutWins: number;
  streakCode?: string;
  streakCount?: number;
  teamId: number;
  ties?: number;
  waiversSequence?: number;
  wildcardSequence?: number;
  winPctg: number;
  wins: number;
}

export interface StandingsResponse {
  wildCardIndicator?: boolean;
  standings: StandingTeam[];
}

export interface SeasonInfo {
  id: number;
  conferencesInUse: boolean;
  divisionsInUse: boolean;
  pointForOTlossInUse: boolean;
  regulationWinsInUse: boolean;
  rowInUse: boolean;
  standingsEnd: string;
  standingsStart: string;
  tiesInUse: boolean;
  wildcardInUse: boolean;
}

export interface StandingsSeasonManifestResponse {
  seasons: SeasonInfo[];
}
