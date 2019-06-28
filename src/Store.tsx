import createStore from 'storeon';
import persistState from '@storeon/localstorage';

export interface IUserState {
  isAuthenticated: boolean;
  token: string;
  apiQueryHistory: APIQueryHistoryEntry[];
  settings: IUserSettings;
}

export type APIEndpointID = 1 | 2 | 3 | 4 | 5 | 51 | 6 | 7 | 8 | 9 | 10;
export interface APIQueryHistoryEntry {
  id: APIEndpointID;
  lastQuery: number;
  active: boolean;
}

export interface IUserSettings {
  locale: ILocales;
  remembersAPIKey: 0 | 1;
  apiKey: string;
}

export type ILocales =
  | 'de_DE'
  | 'en_US'
  | 'ru_RU'
  | 'jp_JP'
  | 'cn_CN'
  | 'es_ES';

export interface IPreloadedState {
  user: IUserState;
}

const userState: IUserState = {
  isAuthenticated: false,
  token: '',
  apiQueryHistory: [],
  settings: {
    locale: 'de_DE',
    remembersAPIKey: 0,
    apiKey: '',
  },
};

export const user = (store: createStore.Store<IPreloadedState>) => {
  store.on('@init', () => ({ user: userState }));

  store.on(
    'user/login',
    ({ user }, payload) =>
      ({
        user: {
          ...user,
          ...payload,
        },
      } as Partial<IPreloadedState>),
  );

  store.on(
    'user/refreshToken',
    ({ user }, payload) =>
      ({
        user: {
          ...user,
          token: payload.token,
        },
      } as Partial<IPreloadedState>),
  );

  store.on('user/logout', ({ user }) => ({
    user: {
      ...user,
      token: '',
      isAuthenticated: false,
    },
  }));

  store.on(
    'user/setAPIQueryHistory',
    ({ user }, payload) =>
      ({
        user: {
          ...user,
          apiQueryHistory: payload.apiQueryHistory,
        },
      } as Partial<IPreloadedState>),
  );

  store.on(
    'user/acknowledgeProfileData',
    ({ user }, payload) =>
      ({
        user: {
          ...user,
          apiKey: payload.apiKey,
          apiQueryHistory: payload.apiQueryHistory,
          settings: payload.settings,
        },
      } as Partial<IPreloadedState>),
  );

  store.on(
    'user/setAPIKey',
    ({ user }, payload) =>
      ({
        user: {
          ...user,
          apiKey: payload.apiKey,
        },
      } as Partial<IPreloadedState>),
  );
};

export const store = createStore<unknown | IPreloadedState>([
  user,
  process.env.NODE_ENV !== 'production' && require('storeon/devtools'),
  persistState(),
]);
