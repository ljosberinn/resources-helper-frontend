import React, { memo } from 'react';
import useStoreon from 'storeon/react';
import { IUseStoreon } from '../../store';
import { IUserState } from '../../types/user';
import { PageSettings } from './PageSettings';
import { AccountSettings } from './AccountSettings';

interface SettingsPageStoreon extends IUseStoreon {
  user: IUserState;
}

const SettingsPage = memo(() => {
  const { dispatch, user }: SettingsPageStoreon = useStoreon('user');

  return (
    <>
      <PageSettings user={user} dispatch={dispatch} />
      <hr />
      <AccountSettings user={user} dispatch={dispatch} />
    </>
  );
});

export default SettingsPage;
