import React from 'react';
import { Container } from 'rbx';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('contactPageTitle')}</title>
      </Helmet>
      <Container as="main">WIP</Container>
    </>
  );
};

export default ContactPage;
