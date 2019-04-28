import createStore from 'storeon';
import { IPreloadedState } from '../types';
import { IMineState } from '../types/mines';

const mineState: IMineState[] = [];

export const mines = (store: createStore.Store<IPreloadedState>) => {
  store.on('@init', () => ({ mines: mineState }));

  store.on('user/login', (_, payload) => {
    return {
      mines: payload,
    } as Partial<IPreloadedState>;
  });

  store.on('mines/get', (_, payload) => {
    return {
      mines: payload,
    } as Partial<IPreloadedState>;
  });
};
