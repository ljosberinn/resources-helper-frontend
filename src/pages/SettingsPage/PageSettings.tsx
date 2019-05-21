import React, { ChangeEvent, useCallback, memo } from 'react';
import { LanguageSelection } from '../../components/LanguageSelection';
import { RememberAPIKey } from '../../components/RememberAPIKey';
import { APIKeyInput } from '../../components/APIKeyInput';
import { PriceAgeSelect } from '../../components/PriceAgeSelect';
import { WorldMapMineVisibility } from '../../components/WorldMapMineVisibility';
import { WorldMapHeadquarterVisibility } from '../../components/WorldMapHeadquarterVisibility';
import { Box } from 'rbx';
import { IUseStoreon } from '../../store';
import { IUserState, Language } from '../../types/user';
import i18next from 'i18next';

interface PageSettingsProps extends IUseStoreon {
  user: IUserState;
  t: i18next.TFunction;
  i18n: i18next.i18n;
}

const APIKeyRegExp = new RegExp(/^[a-f0-9]{45}/);

export const PageSettings = memo(
  ({ dispatch, user, t, i18n }: PageSettingsProps) => {
    const { settings } = user;

    const handleLanguageChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.currentTarget.value as Language;

        i18n.changeLanguage(newLocale);
        dispatch('user/setLanguage', newLocale);
      },
      [dispatch, i18n],
    );

    const handleRememberAPIKeyChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) =>
        dispatch('user/remembersAPIKey', e.currentTarget.checked),
      [dispatch],
    );

    const handleAPIKeyInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.currentTarget.value;

        if (APIKeyRegExp.test(key)) {
          console.log({ key });
        }
      },
      [],
    );

    const handleWorldMapMineVisibilityChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) =>
        dispatch('user/worldMapMineVisibility', e.currentTarget.checked),
      [dispatch],
    );

    const handleWorldMapHeadquarterVisibilityChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) =>
        dispatch('user/worldMapHeadquarterVisibility', e.currentTarget.checked),
      [dispatch],
    );

    const handlePriceAgeChange = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) =>
        dispatch('user/priceAge', parseInt(e.currentTarget.value)),
      [dispatch],
    );

    return (
      <Box>
        <h1>{t`pageSettings`}</h1>
        <LanguageSelection
          handleChange={handleLanguageChange}
          currentLocale={settings.locale}
          t={t}
        />
        <hr />
        <RememberAPIKey
          handleChange={handleRememberAPIKeyChange}
          remembersAPIKey={settings.remembersAPIKey}
          t={t}
        />
        <APIKeyInput
          handleChange={handleAPIKeyInputChange}
          apiKey={user.API.key}
          t={t}
        />
        <hr />
        <PriceAgeSelect
          handleChange={handlePriceAgeChange}
          currentValue={settings.prices.age}
          t={t}
        />
        {user.API.isAPIUser && (
          <>
            <hr />
            <WorldMapMineVisibility
              handleChange={handleWorldMapMineVisibilityChange}
              checked={settings.worldMapMinesAreVisible}
              t={t}
            />
            <WorldMapHeadquarterVisibility
              handleChange={handleWorldMapHeadquarterVisibilityChange}
              checked={settings.worldMapHeadquarterIsVisible}
              t={t}
            />
          </>
        )}
      </Box>
    );
  },
);
