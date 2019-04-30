import React from 'react';
import useStoreon from 'storeon/react';
import { IUseStoreon } from '../../store';
import { IUserState } from '../../types/user';
import { PageSettings } from './PageSettings';
import { AccountSettings } from './AccountSettings';
import { useTranslation } from 'react-i18next';

interface SettingsPageStoreon extends IUseStoreon {
  user: IUserState;
}

const SettingsPage = () => {
  const { dispatch, user }: SettingsPageStoreon = useStoreon('user');
  const { t, i18n } = useTranslation();

  return (
    <>
      <PageSettings user={user} dispatch={dispatch} t={t} i18n={i18n} />
      <AccountSettings user={user} dispatch={dispatch} t={t} />
    </>
  );
};

export default SettingsPage;
