import createStore from 'storeon';
import { IPreloadedState } from '.';

export const user = (store: createStore.Store<IPreloadedState>) => {
  store.on('@init', () => ({ user: { isAuthenticated: false } }));

  store.on('@user/login', ({ user }: IPreloadedState, payload) => {
    return {
      user: {
        ...user,
        ...payload,
      },
    } as Partial<IPreloadedState>;
  });
};
