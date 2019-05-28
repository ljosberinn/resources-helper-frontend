import React from 'react';

import { Card, Section, Title, Column, Image, Icon, Content, Media } from 'rbx';

export const Cards = () => (
  <Section>
    <Title>Cards</Title>
    <hr />
    <Column.Group>
      <Column>
        <Card>
          <Card.Image>
            <Image.Container className="is-4by3">
              <Image
                src="https://source.unsplash.com/random/800x600"
                alt="Image"
              />
            </Image.Container>
          </Card.Image>
          <Card.Content>
            <Media as="div">
              <Media.Item align="left">
                <Image.Container>
                  <Image
                    src="https://source.unsplash.com/random/96x96"
                    alt="Image"
                  />
                </Image.Container>
              </Media.Item>
              <Media.Item>
                <Title size={4}>John Smith</Title>
                <Title subtitle size={6}>
                  @johnsmith
                </Title>
              </Media.Item>
            </Media>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <a href="twitter.com/@bulmaio">@bulmaio</a>.
              <a href="twitter.com/#css">#css</a>
              <a href="twitter.com/#responsive">#responsive</a>
              <br /> <small>11:09 PM - 1 Jan 2016</small>
            </Content>
          </Card.Content>
        </Card>
      </Column>
      <Column>
        <Card>
          <Card.Header>
            <Card.Header.Title>Component</Card.Header.Title>
            <Card.Header.Icon>
              <Icon>
                <i className="fa fa-angle-down" />
              </Icon>
            </Card.Header.Icon>
          </Card.Header>
          <Card.Content>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <a href="twitter.com/@bulmaio">@bulmaio</a>.
              <a href="twitter.com/#css">#css</a>
              <a href="twitter.com/#responsive">#responsive</a>
              <br /> <small>11:09 PM - 1 Jan 2016</small>
            </Content>
          </Card.Content>
          <Card.Footer>
            {['Save', 'Edit', 'Delete'].map(content => (
              <Card.Footer.Item key={content}>{content}</Card.Footer.Item>
            ))}
          </Card.Footer>
        </Card>
      </Column>
    </Column.Group>
  </Section>
);
