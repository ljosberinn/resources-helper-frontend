import React from 'react';

import { Box, Section, Title, Media, Icon, Level, Control, Image } from 'rbx';

export const BoxDemo = () => (
  <Section>
    <Title>Box</Title>
    <hr />
    <Box>
      <Media>
        <Media.Item as="figure" align="left">
          <Image.Container className="is-64x64">
            <Image
              alt=""
              src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
            />
          </Image.Container>
        </Media.Item>
        <Media.Item align="content">
          <Control>
            <p>
              <strong> John Smith </strong> <small> @johnsmith </small>
              <small> 31m </small>
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas. Nullam
              condimentum luctus turpis.
            </p>
          </Control>
          <Level>
            <Level.Item align="left">
              <Level.Item>
                <Icon size="small">
                  <i className="fa fa-reply" />
                </Icon>
              </Level.Item>
              <Level.Item>
                <Icon size="small">
                  <i className="fa fa-retweet" />
                </Icon>
              </Level.Item>

              <Level.Item>
                <Icon size="small">
                  <i className="fa fa-heart" />
                </Icon>
              </Level.Item>
            </Level.Item>
          </Level>
        </Media.Item>
      </Media>
    </Box>
  </Section>
);
