import React from 'react';
import createStore from 'storeon';
import useStoreon from 'storeon/react';
import './App.css';
import { IUserState } from './types/user';

interface DashboardStoreon {
  dispatch: createStore.Dispatch;
  user: IUserState;
}

export const Dashboard: React.FC = () => {
  const { dispatch, user }: DashboardStoreon = useStoreon('user');

  if (!user.isAuthenticated) {
    setTimeout(() => {
      dispatch('user/login', { isAuthenticated: true });
    }, 1000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>isAuthenticated ? {JSON.stringify(user.isAuthenticated)}</p>
      </header>
    </div>
  );
};
