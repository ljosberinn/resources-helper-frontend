import React from 'react';
import { IUserState } from '../../types/user';
import { Box } from 'rbx';
import { IUseStoreon } from '../../store';
import { ChangePassword } from '../../components/ChangePassword';
import { DeleteAccount } from '../../components/DeleteAccount';
import { useTranslation } from 'react-i18next';

interface AccountSettingsProps extends IUseStoreon {
  user: IUserState;
}

export const AccountSettings = ({ user }: AccountSettingsProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <h1>{t('accountSettings')}</h1>
      <ChangePassword t={t} />
      <DeleteAccount t={t} />
    </Box>
  );
};
