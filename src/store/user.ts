import createStore from 'storeon';
import { IPreloadedState } from '../types';
import { IUserState } from '../types/user';

const userState: IUserState = {
  isAuthenticated: false,
  settings: {
    remembersAPIKey: false,
    locale: 'en',
    prices: {
      type: 'json',
      age: 72,
    },
    worldMapHeadquarterIsVisible: false,
    worldMapMinesAreVisible: false,
  },
  playerInfo: {
    userName: '',
    level: 0,
    rank: 0,
    registered: 0,
  },
  API: {
    isAPIUser: false,
    key: '',
  },
};

export const user = (store: createStore.Store<IPreloadedState>) => {
  store.on('@init', () => ({ user: userState }));

  store.on('user/login', ({ user }, payload) => {
    return {
      user: {
        ...user,
        ...payload,
      },
    } as Partial<IPreloadedState>;
  });

  store.on('user/logout', ({ user }) => {
    return {
      user: {
        ...user,
        token: '',
        isAuthenticated: false,
      },
    };
  });

  /** SETTINGS */

  store.on('user/priceAge', ({ user }, payload) => {
    return {
      user: {
        ...user,
        settings: {
          ...user.settings,
          prices: {
            ...user.settings.prices,
            age: payload,
          },
        },
      },
    } as Partial<IPreloadedState>;
  });

  store.on('user/setLanguage', ({ user }, payload) => {
    return {
      user: {
        ...user,
        settings: {
          ...user.settings,
          locale: payload,
        },
      },
    } as Partial<IPreloadedState>;
  });

  store.on('user/remembersAPIKey', ({ user }, payload) => {
    return {
      user: {
        ...user,
        settings: {
          ...user.settings,
          remembersAPIKey: payload,
        },
      },
    } as Partial<IPreloadedState>;
  });

  store.on('user/worldMapHeadquarterVisibility', ({ user }, payload) => {
    return {
      user: {
        ...user,
        settings: {
          ...user.settings,
          worldMapHeadquarterIsVisible: payload,
        },
      },
    } as Partial<IPreloadedState>;
  });

  store.on('user/worldMapMineVisibility', ({ user }, payload) => {
    return {
      user: {
        ...user,
        settings: {
          ...user.settings,
          worldMapMinesAreVisible: payload,
        },
      },
    } as Partial<IPreloadedState>;
  });
};
