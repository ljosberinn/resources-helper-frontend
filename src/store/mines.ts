import createStore from 'storeon';
import { IPreloadedState } from '../types';
import { IMineState } from '../types/mines';

const mineState: IMineState[] = [];

export const mines = (store: createStore.Store<IPreloadedState>) => {
  store.on('@init', () => ({ mines: mineState }));

  store.on('user/login', ({ mines }: IPreloadedState, payload) => {
    return {
      mines: mines.map(mine => mine),
    } as Partial<IPreloadedState>;
  });
};
