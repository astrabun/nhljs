export interface Country {
  id: string;
  country3Code: string;
  countryCode: string;
  countryName: string;
  hasPlayerStats: number;
  imageUrl?: string;
  iihfName?: string;
  isActive: number;
  nationalityName: string;
  olympicUrl?: string;
  thumbnailUrl?: string;
}

export interface CountriesResponse {
  data: Country[];
  total?: number;
}

export interface Season {
  id: number;
  allStarGameInUse: number;
  conferencesInUse: number;
  divisionsInUse: number;
  endDate: string;
  entryDraftInUse: number;
  formattedSeasonId: string;
  minimumPlayoffMinutesForGoalieStatsLeaders: number;
  minimumRegularGamesForGoalieStatsLeaders: number;
  nhlStanleyCupOwner?: number;
  numberOfGames: number;
  olympicsParticipation: number;
  pointForOTlossInUse: number;
  preSeasonStartdate: string;
  regularSeasonEndDate: string;
  rowInUse: number;
  seasonOrdinal: number;
  startDate: string;
  supplementalDraftInUse: number;
  tiesInUse: number;
  totalPlayoffGames: number;
  totalRegularSeasonGames: number;
  wildcardInUse: number;
}

export interface SeasonsResponse {
  data: Season[];
  total?: number;
}

export interface Franchise {
  id: number;
  fullName: string;
  teamCommonName: string;
  teamPlaceName: string;
  firstSeasonId: number;
  lastSeasonId?: number;
  mostRecentTeamId: number;
}

export interface FranchisesResponse {
  data: Franchise[];
  total?: number;
}

export interface DraftEntry {
  year: number;
  draftDate: string;
  eliteProspectsReportUrl?: string;
  rounds: {
    draftRound: number;
    picks: {
      pickInRound: number;
      overallPickNumber: number;
      teamId: number;
      teamFullName: string;
      teamAbbrev: string;
      playerId?: number;
      playerName?: string;
      playerPositionCode?: string;
      amateurClubName?: string;
      amateurLeagueAbbrev?: string;
    }[];
  }[];
}

export interface DraftResponse {
  data: DraftEntry[];
  total?: number;
}

export interface GlossaryEntry {
  id: string;
  fullName: string;
  lookupValue?: string;
}

export interface GlossaryResponse {
  data: GlossaryEntry[];
  total?: number;
}

export type ConfigResponse = Record<string, unknown>;
