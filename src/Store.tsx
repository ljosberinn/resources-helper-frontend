import createStore from 'storeon';
import persistState from '@storeon/localstorage';

export interface IUserState {
  isAuthenticated: boolean;
  token: string;
  apiKey: string;
  settings: IUserSettings;
}

export interface IUserSettings {
  language: string;
}

export interface IPreloadedState {
  user: IUserState;
}

const userState: IUserState = {
  isAuthenticated: false,
  token: '',
  apiKey: '',
  settings: {
    language: 'de',
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
