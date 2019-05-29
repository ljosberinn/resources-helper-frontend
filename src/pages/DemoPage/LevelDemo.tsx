import React from 'react';

import {
  Section,
  Control,
  Level,
  Field,
  Heading,
  Title,
  Input,
  Button,
  Image,
} from 'rbx';

const TwitterData = [
  { heading: 'Tweets', title: '3,456' },
  { heading: 'Following', title: 123 },
  { heading: 'Followers', title: '456K' },
  { heading: 'Likes', title: 789 },
];

const TwitterLevelItems = () => (
  <>
    {TwitterData.map(({ heading, title }, index) => (
      <Level.Item textAlign="centered" key={index}>
        <div>
          <Heading>{heading}</Heading>
          <Title as="p">{title}</Title>
        </div>
      </Level.Item>
    ))}
  </>
);

export const LevelDemo = () => (
  <Section>
    <Title>Level</Title>

    <hr />
    <Level>
      <Level.Item align="left">
        <Level.Item>
          <Title size={5} subtitle>
            <strong>123</strong> posts
          </Title>
        </Level.Item>
        <Level.Item>
          <Field kind="addons">
            <Control>
              <Input type="text" placeholder="Find a post" />
            </Control>
            <Control>
              <Button>Search</Button>
            </Control>
          </Field>
        </Level.Item>
      </Level.Item>
      <Level.Item align="left">
        <Level.Item>
          <strong>All</strong>
        </Level.Item>
        {['Published', 'Drafts', 'Deleted'].map(text => (
          <Level.Item key={text}>{text}</Level.Item>
        ))}
        <Level.Item>
          <Button color="success">New</Button>
        </Level.Item>
      </Level.Item>
    </Level>
    <hr />
    <Level>
      <TwitterLevelItems />
    </Level>
    <hr />
    <Level>
      <Level.Item textAlign="centered">
        <a href="#home" className="link is-info">
          Home
        </a>
      </Level.Item>
      <Level.Item textAlign="centered">
        <a href="#menu" className="link is-info">
          Menu
        </a>
      </Level.Item>
      <Level.Item textAlign="centered">
        <Image src="http://bulma.io/images/bulma-type.png" alt="" />
      </Level.Item>
      <Level.Item textAlign="centered">
        <a href="#reservations" className="link is-info">
          Reservations
        </a>
      </Level.Item>
      <Level.Item textAlign="centered">
        <a href="#contact" className="link is-info">
          Contact
        </a>
      </Level.Item>
    </Level>
    <hr />
    <Level className="is-mobile">
      <TwitterLevelItems />
    </Level>
    <hr />
  </Section>
);
