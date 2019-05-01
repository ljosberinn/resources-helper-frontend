import React from 'react';
import { useTranslation } from 'react-i18next';

export const PageSubTitle = () => {
  const { t } = useTranslation();

  return <h2 className="subtitle is-size-6-mobile">{t('pageMetaDescription')}</h2>;
};
