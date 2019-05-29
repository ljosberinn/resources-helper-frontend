import React from 'react';

import { Section, Title, Breadcrumb } from 'rbx';

export const BreadcrumbsDemo = () => (
  <Section>
    <Title>Breadcrumb</Title>
    <hr />
    <Breadcrumb>
      {['Bulma', 'Documentaton', 'Components', 'Breadcrumb'].map(content => (
        <Breadcrumb.Item key={content}>{content}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  </Section>
);
