export interface IUserState {
  isAuthenticated: boolean;
  settings: IUserSettings;
  playerInfo: IUserPlayerInfo;
  API: IUserAPI;
}

export interface IUserSettings {
  locale: Language;
  prices: IUserPriceSettings;
  remembersAPIKey: boolean;
  worldMapHeadquarterIsVisible: boolean;
  worldMapMinesAreVisible: boolean;
}

export type Language =
  | 'de'
  | 'en'
  | 'jp'
  | 'cn'
  | 'fr'
  | 'cz'
  | 'ru'
  | 'it'
  | 'es'
  | 'pt'
  | 'br';
export type PriceExportTypes = 'json' | 'csv' | 'xml';
export type PriceRanges = 1 | 24 | 48 | 72 | 96 | 120 | 144 | 168;

export interface IUserPriceSettings {
  type: PriceExportTypes;
  age: PriceRanges;
}

export interface IUserPlayerInfo {
  userName: string;
  level: number;
  rank: number;
  registered: number;
}

export interface IUserAPI {
  isAPIUser: boolean;
  key: string;
}
