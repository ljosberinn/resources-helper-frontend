import React from 'react';

import { Section, Title, Column } from 'rbx';

export const TypographyDemo = () => (
  <Section>
    <Title>Typography</Title>
    <hr />
    <Column.Group>
      <Column>
        <Title size={1}>Title 1</Title>
        <Title size={2}>Title 2</Title>
        <Title size={3}>Title 3</Title>
        <Title size={4}>Title 4</Title>
        <Title size={5}>Title 5</Title>
        <Title size={6}>Title 6</Title>
      </Column>
      <Column>
        <Title subtitle size={1}>
          Subtitle 1
        </Title>
        <Title subtitle size={2}>
          Subtitle 2
        </Title>
        <Title subtitle size={3}>
          Subtitle 3
        </Title>
        <Title subtitle size={4}>
          Subtitle 4
        </Title>
        <Title subtitle size={5}>
          Subtitle 5
        </Title>
        <Title subtitle size={6}>
          Subtitle 6
        </Title>
      </Column>
      <Column>
        <Title>Title</Title>
        <Title subtitle> Subtitle </Title>
        <Title size={1}>Title 1</Title>
        <Title size={3} subtitle>
          Subtitle 3
        </Title>
        <Title size={2}>Title 2</Title>
        <Title size={4} subtitle>
          Subtitle 4
        </Title>
        <Title size={3}>Title 3</Title>
        <Title size={5} subtitle>
          Subtitle 5
        </Title>
      </Column>
    </Column.Group>
  </Section>
);
