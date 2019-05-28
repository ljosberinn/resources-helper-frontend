import React from 'react';
import { Section, Title, Tag, Delete } from 'rbx';

export const Deleters = () => (
  <Section>
    <Title>Delete</Title>
    <hr />
    <div className="block">
      <Tag color="success">
        Hello World
        <button className="delete is-small"> </button>
      </Tag>
      <Delete size="small" />
      <Delete />
      <Delete size="medium" />
      <Delete size="large" />
    </div>
    <div className="notification is-danger">
      <Delete /> Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
      ipsum dolor sit amet, consectetur adipiscing elit
    </div>
    <article className="message is-info">
      <div className="message-header">
        Info
        <Delete />
      </div>
      <div className="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus
        ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis
        venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec
        sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id
        porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
        facilisis sodales sem.
      </div>
    </article>
  </Section>
);
