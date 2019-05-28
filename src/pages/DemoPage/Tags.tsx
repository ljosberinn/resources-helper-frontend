import React from 'react';
import { Tag, Section, Title, Control, Field, Delete } from 'rbx';

import { colors } from './constants';

export const Tags = () => (
  <Section>
    <Title>Tag</Title>

    <hr />
    <Tag.Group>
      {colors.map((color, index) => (
        <Tag color={color} key={index}>
          {color}
        </Tag>
      ))}

      <Tag color="primary" size="medium">
        Medium
      </Tag>

      <Tag color="info" size="large">
        Large
      </Tag>

      <Tag color="success">
        Bar
        <Delete size="small" />
      </Tag>

      <Tag color="warning" size="medium">
        Hello
        <Delete size="small" />
      </Tag>

      <Tag color="danger" size="large">
        World
        <Delete size="small" />
      </Tag>
    </Tag.Group>
    <Field kind="group" multiline>
      <Control>
        <Tag.Group gapless>
          <Tag color="dark">npm</Tag>
          <Tag color="info">2.0.0</Tag>
        </Tag.Group>
      </Control>
      <Control>
        <Tag.Group gapless>
          <Tag color="dark">build</Tag>
          <Tag color="success">passing</Tag>
        </Tag.Group>
      </Control>
      <Control>
        <Tag.Group gapless>
          <Tag color="dark">chat</Tag>
          <Tag color="primary">#reactiflux</Tag>
        </Tag.Group>
      </Control>
    </Field>
    <Field multiline kind="group">
      {[
        'Technology',
        'CSS',
        'Flexbox',
        'Web Design',
        'Open Source',
        'Community',
        'Documentation',
      ].map(name => (
        <Control key={name}>
          <Tag.Group gapless>
            <Tag color="link">{name}</Tag>
            <Tag delete />
          </Tag.Group>
        </Control>
      ))}
    </Field>
  </Section>
);
