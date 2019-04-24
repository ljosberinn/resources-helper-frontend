import createStore from 'storeon';
import { user } from './user';
import { IPreloadedState } from '../types';
import { mines } from './mines';

export const store = createStore<IPreloadedState>([user, mines, process.env.NODE_ENV !== 'production' && require('storeon/devtools')]);
