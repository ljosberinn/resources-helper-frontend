import React from 'react';
import { Container } from 'rbx';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

const ToSPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('tosLink')} - Resources Helper</title>
      </Helmet>
      <Container as="main">WIP</Container>
    </>
  );
};

export default ToSPage;
