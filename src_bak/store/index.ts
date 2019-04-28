import createStore from 'storeon';
import { user } from './user';
import { IPreloadedState } from '../types';
import { mines } from './mines';

export interface IUseStoreon {
  dispatch: createStore.Dispatch;
}

export const store = createStore<IPreloadedState>([user, mines, process.env.NODE_ENV !== 'production' && require('storeon/devtools')]);
