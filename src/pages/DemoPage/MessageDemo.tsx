import React from 'react';

import { Message, Section, Title, Column, Delete } from 'rbx';
import { colors } from './constants';

const Text = () => (
  <>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum felis venenatis efficitur. Aenean ac
    <em>eleifend lacus</em>.
  </>
);

export const MessageDemo = () => (
  <Section>
    <Title>Message</Title>
    <hr />
    <Column.Group multiline>
      <Column size="half">
        <Message>
          <Message.Header>
            <p>Message</p>
            <Delete />
          </Message.Header>
          <Message.Body>
            <Text />
          </Message.Body>
        </Message>
      </Column>

      {colors.map(color => (
        <Column size="half" key={color}>
          <Message color={color}>
            <Message.Header>
              <p>{color}</p>
              <Delete />
            </Message.Header>
            <Message.Body>
              <Text />
            </Message.Body>
          </Message>
        </Column>
      ))}
    </Column.Group>
  </Section>
);
