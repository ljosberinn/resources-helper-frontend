import createStore from 'storeon';
import { IPreloadedState } from '../types';

const userState = {
  isAuthenticated: false,
  settings: {
    remembersAPIKey: false,
    locale: 'en',
    prices: {
      type: 'json',
      range: 72,
    },
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
    lastUpdates: {
      factories: 0,
      specialBuildings: 0,
      mines: 0,
      warehouses: 0,
      tradeLog: 0,
      combatLog: 0,
      headquarter: 0,
      marketPrices: 0,
    },
  },
};

export const user = (store: createStore.Store<IPreloadedState>) => {
  store.on('@init', () => ({ user: userState }));

  store.on('user/login', ({ user }: IPreloadedState, payload) => {
    return {
      user: {
        ...user,
        ...payload,
      },
    } as Partial<IPreloadedState>;
  });
};