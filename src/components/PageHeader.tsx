import React, { Suspense } from 'react';
import { Hero, Container, Title } from 'rbx';
import { PageSubTitle } from './PageSubTitle';

export const PageHeader = () => (
  <Hero>
    <Hero.Body as="header">
      <Container>
        <Title className="is-size-1 is-size-3-mobile">Resources Helper</Title>
        <Suspense fallback={null}>
          <PageSubTitle />
        </Suspense>
      </Container>
    </Hero.Body>
  </Hero>
);
