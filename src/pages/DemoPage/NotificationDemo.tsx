import React from 'react';
import { Section, Title, Column, Delete, Notification } from 'rbx';
import { colors } from './constants';

export const NotificationDemo = () => (
  <Section>
    <Title>Notifications</Title>
    <hr />
    <Column.Group multiline>
      {[undefined, ...colors].map((color, index) => (
        <Column size="half" key={index}>
          <Notification color={color}>
            <Delete as="button" />
            Lorem ipsum dolor sit amet,
            <span>consectetur</span> adipiscing elit lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </Notification>
        </Column>
      ))}
    </Column.Group>
  </Section>
);
