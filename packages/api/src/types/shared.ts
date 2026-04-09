/** 3-letter team abbreviation, e.g. 'TOR', 'WSH' */
export type TeamAbbrev = string;

/** 8-digit season ID, e.g. '20232024' */
export type SeasonId = string;

/** Game type: 1=Preseason, 2=Regular Season, 3=Playoffs */
export type GameType = 1 | 2 | 3;

export type GameId = number;
export type PlayerId = number;

export interface StatsParams {
  cayenneExp?: string;
  factCayenneExp?: string;
  /** JSON-stringified sort array, e.g. '[{"property":"points","direction":"DESC"}]' */
  sort?: string;
  start?: number;
  limit?: number;
  isAggregate?: boolean;
  isGame?: boolean;
}

export interface StatsResponse<T> {
  data: T[];
  total?: number;
}

export interface LocalizedString {
  default: string;
  fr?: string;
  cs?: string;
  sk?: string;
  fi?: string;
  [lang: string]: string | undefined;
}
