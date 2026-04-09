export interface SkaterSummary {
  playerId: number;
  skaterFullName: string;
  lastName: string;
  positionCode: string;
  shootsCatches: 'L' | 'R';
  seasonId: number;
  teamAbbrevs: string;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  penaltyMinutes: number;
  ppGoals: number;
  ppPoints: number;
  shGoals: number;
  shPoints: number;
  evGoals: number;
  evPoints: number;
  otGoals: number;
  gameWinningGoals: number;
  shots: number;
  shootingPct: number;
  timeOnIcePerGame: number;
  faceoffWinPct: number | null;
  pointsPerGame: number;
}

export interface SkaterBio {
  playerId: number;
  skaterFullName: string;
  lastName: string;
  currentTeamAbbrev?: string;
  nationality: string;
  birthCity: string;
  birthStateProvCode?: string;
  birthDate: string;
  weightInPounds: number;
  heightInInches: number;
  draftYear?: number;
  draftRound?: number;
  draftOverall?: number;
  draftTeamAbbrev?: string;
  firstSeasonForGameType?: number;
  isInHallOfFameYn: string;
  positionCode: string;
  shootsCatches: 'L' | 'R';
  gamesPlayed: number;
  seasonId: number;
  teamAbbrevs: string;
}

export interface SkaterPowerPlay {
  playerId: number;
  skaterFullName: string;
  lastName: string;
  seasonId: number;
  teamAbbrevs: string;
  gamesPlayed: number;
  ppGoals: number;
  ppPrimAssists: number;
  ppSecAssists: number;
  ppPoints: number;
  ppShots: number;
  ppTimeOnIce: number;
  ppTimeOnIcePerGame: number;
  ppGoalsForPerHour: number;
  ppGoalsAgainstPerHour: number;
  ppShotsForPerHour: number;
  ppIndividualSatForPerHour: number;
  timeOnIcePerGame: number;
}

export interface SkaterTimeOnIce {
  playerId: number;
  skaterFullName: string;
  lastName: string;
  seasonId: number;
  teamAbbrevs: string;
  gamesPlayed: number;
  evTimeOnIce: number;
  evTimeOnIcePerGame: number;
  ppTimeOnIce: number;
  ppTimeOnIcePerGame: number;
  shTimeOnIce: number;
  shTimeOnIcePerGame: number;
  timeOnIce: number;
  timeOnIcePerGame: number;
  otTimeOnIce: number;
  otTimeOnIcePerOtGame: number;
  shifts: number;
  shiftsPerGame: number;
}

export interface GoalieSummary {
  playerId: number;
  goalieFullName: string;
  lastName: string;
  shootsCatches: 'L' | 'R';
  seasonId: number;
  teamAbbrevs: string;
  gamesPlayed: number;
  gamesStarted: number;
  wins: number;
  losses: number;
  otLosses: number;
  ties?: number | null;
  shotsAgainst: number;
  saves: number;
  goalsAgainst: number;
  goalsAgainstAverage: number;
  savePct: number;
  shutouts: number;
  timeOnIce: number;
  goals: number;
  assists: number;
  points: number;
  penaltyMinutes: number;
}

export interface GoalieAdvanced {
  playerId: number;
  goalieFullName: string;
  lastName: string;
  seasonId: number;
  teamAbbrevs: string;
  gamesPlayed: number;
  qualityStart: number;
  qualityStartsPct: number;
  regularlyScheduledStarts: number;
  goalsAgainst: number;
  goalsAgainstAverage: number;
  goalieSavePct: number;
  highDangerGoalsAgainst: number;
  highDangerSaves: number;
  highDangerSavesPct: number;
  lowDangerGoalsAgainst: number;
  lowDangerSaves: number;
  lowDangerSavesPct: number;
  mediumDangerGoalsAgainst: number;
  mediumDangerSaves: number;
  mediumDangerSavesPct: number;
}

export interface GoalieBio {
  playerId: number;
  goalieFullName: string;
  lastName: string;
  currentTeamAbbrev?: string;
  nationality: string;
  birthCity: string;
  birthStateProvCode?: string;
  birthDate: string;
  weightInPounds: number;
  heightInInches: number;
  draftYear?: number;
  draftRound?: number;
  draftOverall?: number;
  draftTeamAbbrev?: string;
  firstSeasonForGameType?: number;
  isInHallOfFameYn: string;
  shootsCatches: 'L' | 'R';
  gamesPlayed: number;
  seasonId: number;
  teamAbbrevs: string;
}

export interface TeamSummary {
  teamId: number;
  teamFullName: string;
  seasonId: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  otLosses: number;
  ties?: number | null;
  points: number;
  pointPct: number;
  regulationAndOtWins: number;
  winsInRegulation: number;
  winsInShootout: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsForPerGame: number;
  goalsAgainstPerGame: number;
  powerPlayPct: number;
  powerPlayNetPct: number;
  penaltyKillPct: number;
  penaltyKillNetPct: number;
  shotsForPerGame: number;
  shotsAgainstPerGame: number;
  faceoffWinPct: number;
}

export interface TeamPowerPlay {
  teamId: number;
  teamFullName: string;
  seasonId: number;
  gamesPlayed: number;
  ppOpportunities: number;
  ppGoalsFor: number;
  ppGoalsAgainst: number;
  ppGoalDiff: number;
  ppPct: number;
  ppNetPct: number;
  ppShotsFor: number;
  ppTimeOnIce: number;
}

export interface TeamPenaltyKill {
  teamId: number;
  teamFullName: string;
  seasonId: number;
  gamesPlayed: number;
  pkOpportunities: number;
  pkGoalsAgainst: number;
  pkGoalsFor: number;
  pkGoalDiff: number;
  pkPct: number;
  pkNetPct: number;
  pkShotsAgainst: number;
  pkTimeOnIce: number;
}
