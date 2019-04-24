import createStore from 'storeon';
import { user } from './user';

export const store = createStore<IPreloadedState>([user, process.env.NODE_ENV !== 'production' && require('storeon/devtools')]);

export interface IPreloadedState {
  user: IUserState;
}

interface IUserState {
  isAuthenticated: boolean;
}
