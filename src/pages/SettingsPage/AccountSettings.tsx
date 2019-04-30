import i18next from 'i18next';
import { Box } from 'rbx';
import React, { memo } from 'react';
import { ChangePassword } from '../../components/ChangePassword';
import { DeleteAccount } from '../../components/DeleteAccount';
import { IUseStoreon } from '../../store';
import { IUserState } from '../../types/user';

interface AccountSettingsProps extends IUseStoreon {
  user: IUserState;
  t: i18next.TFunction;
}

export const AccountSettings = memo(({ user, t }: AccountSettingsProps) => {
  return (
    <Box>
      <h1>{t('accountSettings')}</h1>
      <ChangePassword t={t} />
      <DeleteAccount t={t} />
    </Box>
  );
});
