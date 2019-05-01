import React from 'react';
import { Container } from 'rbx';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const DonatePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('donatePageTitle')}</title>
      </Helmet>
      <Container as="main">
        Resources Helper is free,{' '}
        <a href="https://github.com/ljosberinn/resources-helper" rel="noreferrer noopener" target="_blank">
          open-source
        </a>{' '}
        and will always be. No ads, no tracking, a single cookie to remember your settings. Server cost is 15€/month. If you wish to grab me
        a ☕, please head over to{' '}
        <a href="https://paypal.me/GerritAlex" target="_blank" rel="noreferrer noopener">
          PayPal
        </a>{' '}
        or donate ingame to Chevron
      </Container>
    </>
  );
};

export default DonatePage;
