import React from 'react';
import { Container } from 'rbx';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const DonatePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('donateLink')} - Resources Helper</title>
      </Helmet>
      <Container as="main">
        {t('donateContent1')}
        <a href="https://github.com/ljosberinn/resources-helper" rel="noreferrer noopener" target="_blank">
          {t('donateContent2')}
        </a>
        {t('donateContent3')}
        <a href="https://paypal.me/GerritAlex" target="_blank" rel="noreferrer noopener">
          PayPal
        </a>
        {t('donateContent4')}
        <strong>Chevron</strong>.
      </Container>
    </>
  );
};

export default DonatePage;
