import React, { Fragment } from 'react';

import {
  Section,
  Title,
  Image,
  Hero,
  Navbar,
  Tab,
  Level,
  Button,
  Icon,
  Container,
} from 'rbx';

import { colors } from './constants';

export const HeroDemo = () => (
  <Section>
    <Title>Hero</Title>
    <hr />

    {colors.map(color => (
      <Fragment key={color}>
        <Section className={`hero is-${color}`}>
          <Hero.Head>
            <Navbar>
              <Navbar.Brand>
                <Navbar.Item href="#">
                  <Image
                    src="https://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </Navbar.Item>
                <Navbar.Burger />
              </Navbar.Brand>
              <Navbar.Menu>
                <Navbar.Segment align="end">
                  <Navbar.Item active>Home</Navbar.Item>
                  <Navbar.Item>Examples</Navbar.Item>
                  <Navbar.Item>Documentation</Navbar.Item>
                  <Navbar.Item dropdown hoverable>
                    <Navbar.Link>More</Navbar.Link>
                    <Navbar.Dropdown>
                      <Navbar.Item as="a">
                        <Level>
                          <Level.Item align="left">
                            <Level.Item>
                              <p>
                                <strong>Extensions</strong>
                                <br />
                                <small>Side projects to enhance Bulma</small>
                              </p>
                            </Level.Item>
                          </Level.Item>
                        </Level>
                      </Navbar.Item>
                    </Navbar.Dropdown>
                  </Navbar.Item>
                  <Navbar.Item>
                    <Button inverted color="primary">
                      <Icon>
                        <i className="fa fa-github" />
                      </Icon>
                      <span>Download</span>
                    </Button>
                  </Navbar.Item>
                </Navbar.Segment>
              </Navbar.Menu>
            </Navbar>
          </Hero.Head>
          <Hero.Body>
            <Container textAlign="centered">
              <Title>Title</Title>
              <Title subtitle>Subtitle</Title>
            </Container>
          </Hero.Body>
          <Hero.Foot>
            <Container>
              <Tab.Group>
                <Tab active>Overview</Tab>
                <Tab>Modifiers</Tab>
                <Tab>Grid</Tab>
                <Tab>Elements</Tab>
                <Tab>Components</Tab>
                <Tab>Layout</Tab>
              </Tab.Group>
            </Container>
          </Hero.Foot>
        </Section>
        <br />
      </Fragment>
    ))}
  </Section>
);
