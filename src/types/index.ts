import { IUserState } from './user';
import { IMineState } from './mines';

export interface IPreloadedState {
  user: IUserState;
  mines: IMineState[];
}
