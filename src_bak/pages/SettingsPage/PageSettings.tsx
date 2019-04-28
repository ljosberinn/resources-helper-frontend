import React, { ChangeEvent, useCallback } from 'react';
import { LanguageSelection } from '../../components/LanguageSelection';
import { RememberAPIKey } from '../../components/RememberAPIKey';
import { APIKeyInput } from '../../components/APIKeyInput';
import { PriceAgeSelect } from '../../components/PriceAgeSelect';
import { WorldMapMineVisibility } from '../../components/WorldMapMineVisibility';
import { WorldMapHeadquarterVisibility } from '../../components/WorldMapHeadquarterVisibility';
import { Box } from 'rbx';
import { IUseStoreon } from '../../store';
import { IUserState, Language } from '../../types/user';
import { useTranslation } from 'react-i18next';

interface PageSettingsProps extends IUseStoreon {
  user: IUserState;
}

const APIKeyRegExp = new RegExp(/^[a-f0-9]{45}/);

export const PageSettings = ({ dispatch, user }: PageSettingsProps) => {
  const { t, i18n } = useTranslation();

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
    (e: ChangeEvent<HTMLInputElement>) => dispatch('user/remembersAPIKey', e.currentTarget.checked),
    [dispatch],
  );

  const handleAPIKeyInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.value;

    if (APIKeyRegExp.test(key)) {
      console.log({ key });
    }
  }, []);

  const handleWorldMapMineVisibilityChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch('user/worldMapMineVisibility', e.currentTarget.checked),
    [dispatch],
  );

  const handleWorldMapHeadquarterVisibilityChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch('user/worldMapHeadquarterVisibility', e.currentTarget.checked),
    [dispatch],
  );

  const handlePriceAgeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => dispatch('user/priceAge', parseInt(e.currentTarget.value)),
    [dispatch],
  );

  return (
    <Box>
      <h1>{t`pageSettings`}</h1>
      <LanguageSelection handleChange={handleLanguageChange} currentLocale={settings.locale} t={t} />
      <hr />
      <RememberAPIKey handleChange={handleRememberAPIKeyChange} remembersAPIKey={settings.remembersAPIKey} t={t} />
      <APIKeyInput handleChange={handleAPIKeyInputChange} apiKey={user.API.key} t={t} />
      <hr />
      <PriceAgeSelect handleChange={handlePriceAgeChange} currentValue={settings.prices.range} t={t} />
      <hr />
      {!user.API.isAPIUser && (
        <>
          <WorldMapMineVisibility handleChange={handleWorldMapMineVisibilityChange} checked={settings.worldMapMinesAreVisible} t={t} />
          <WorldMapHeadquarterVisibility
            handleChange={handleWorldMapHeadquarterVisibilityChange}
            checked={settings.worldMapHeadquarterIsVisible}
            t={t}
          />
        </>
      )}
    </Box>
  );
};