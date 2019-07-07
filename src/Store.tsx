import createStore, { Module, StoreonEvents } from 'storeon';
import persistState from '@storeon/localstorage';
import crossTab from '@storeon/crosstab';

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

export interface Events extends StoreonEvents<IPreloadedState> {
  'user/login': { token: string; isAuthenticated: boolean };
  'user/refreshToken': { token: string };
  'user/logout': undefined;
  'user/setAPIQueryHistory': {
    apiQueryHistory: APIQueryHistoryEntry[];
  };
  'user/acknowledgeProfileData': {
    apiQueryHistory: APIQueryHistoryEntry[];
    settings: IUserSettings;
  };
  'user/setAPIKey': { apiKey: string };
}

export const userModule: Module<IPreloadedState, Events> = (
  store: createStore.Store<IPreloadedState>,
) => {
  store.on('@init', () => ({ user: userState }));

  store.on('user/login', ({ user }, payload) => ({
    user: {
      ...user,
      ...payload,
    },
  }));

  store.on('user/refreshToken', ({ user }, payload) => ({
    user: {
      ...user,
      token: payload.token,
    },
  }));

  store.on('user/logout', ({ user }) => ({
    user: {
      ...user,
      token: '',
      isAuthenticated: false,
    },
  }));

  store.on('user/setAPIQueryHistory', ({ user }, payload) => ({
    user: {
      ...user,
      apiQueryHistory: payload.apiQueryHistory,
    },
  }));

  store.on('user/acknowledgeProfileData', ({ user }, payload) => ({
    user: {
      ...user,
      apiKey: payload.apiKey,
      apiQueryHistory: payload.apiQueryHistory,
      settings: payload.settings,
    },
  }));

  store.on('user/setAPIKey', ({ user }, payload) => ({
    user: {
      ...user,
      settings: {
        ...user.settings,
        apiKey: payload.apiKey,
      },
    },
  }));
};

export const store = createStore<IPreloadedState, Events>([
  userModule,
  process.env.NODE_ENV !== 'production' && require('storeon/devtools'),
  persistState(),
  crossTab(),
]);
