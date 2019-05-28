import React from 'react';

import {
  Media,
  Section,
  Title,
  Image,
  Level,
  Label,
  Checkbox,
  Icon,
  Content,
  Delete,
  Field,
  Control,
  Textarea,
  Button,
} from 'rbx';

export const MediaObject = () => (
  <Section>
    <Title>Media Object</Title>

    <hr />
    <Media>
      <Media.Item align="left">
        <Image.Container className="is-64x64">
          <Image
            alt=""
            src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
          />
        </Image.Container>
      </Media.Item>
      <Media.Item align="content">
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small>
            <small>31m</small>
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
            Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Content>
        <Level>
          <Level.Item align="left">
            <Level.Item>
              <Icon size="small">
                <i className="fa fa-reply" />
              </Icon>
            </Level.Item>
          </Level.Item>
          <Level.Item>
            <Icon size="small">
              <i className="fa fa-retweet" />
            </Icon>
          </Level.Item>
          <Level.Item align="right">
            <Level.Item>
              <Icon size="small">
                <i className="fa fa-heart" />
              </Icon>
            </Level.Item>
          </Level.Item>
        </Level>
      </Media.Item>
      <Media.Item align="right">
        <Delete />
      </Media.Item>
    </Media>
    <hr />
    <Media>
      <Media.Item align="left">
        <Image.Container className="is-64x64">
          <Image
            alt=""
            src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
          />
        </Image.Container>
      </Media.Item>
      <Media.Item align="content">
        <Field>
          <Control>
            <Textarea className="Textarea" placeholder="Add a comment..." />
          </Control>
        </Field>
        <Level>
          <Level.Item align="left">
            <Level.Item>
              <Button color="info">Post comment</Button>
            </Level.Item>
          </Level.Item>
          <Level.Item align="right">
            <Level.Item>
              <Label>
                <Checkbox /> Press enter to submit
              </Label>
            </Level.Item>
          </Level.Item>
        </Level>
      </Media.Item>
    </Media>
    <hr />
    <Title subtitle size={4}>
      Nesting
    </Title>
    <Media>
      <Media.Item align="left">
        <Image.Container className="is-64x64">
          <Image
            alt=""
            src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
          />
        </Image.Container>
      </Media.Item>
      <Media.Item align="content">
        <Content>
          <p>
            <strong>Barbara Middleton</strong>
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            porta eros lacus, nec ultricies elit blandit non. Suspendisse
            pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
            turpis.
            <br />
            <small>Like · Reply · 3 hrs</small>
          </p>
        </Content>
        <Media>
          <Media.Item align="left">
            <Image.Container className="is-48x48">
              <Image
                alt=""
                src="http://bulma.io/images/placeholders/96x96.png"
              />
            </Image.Container>
          </Media.Item>
          <Media.Item align="content">
            <Content>
              <p>
                <strong>Sean Brown</strong>
                <br /> Donec sollicitudin urna eget eros malesuada sagittis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla
                sagittis, a lobortis leo feugiat.
                <br />
                <small>Like · Reply · 2 hrs</small>
              </p>
            </Content>
            <Media>
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
              lorem cursus ullamcorper sit amet nec massa.
            </Media>
            <Media>
              Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
              Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
              tincidunt iaculis diam non, porta aliquet tortor.
            </Media>
          </Media.Item>
        </Media>
        <Media>
          <Media.Item align="left">
            <Image.Container className="is-48x48">
              <Image
                src="http://bulma.io/images/placeholders/96x96.png"
                alt=""
              />
            </Image.Container>
          </Media.Item>
          <Media.Item align="content">
            <Content>
              <p>
                <strong>Kayli Eunice </strong>
                <br /> Sed convallis scelerisque mauris, non pulvinar nunc
                mattis vel. Maecenas varius felis sit amet magna vestibulum
                euismod malesuada cursus libero. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae;
                Phasellus lacinia non nisl id feugiat.
                <br />
                <small>Like · Reply · 2 hrs</small>
              </p>
            </Content>
          </Media.Item>
        </Media>
      </Media.Item>
    </Media>
    <Media>
      <Media.Item align="left">
        <Image.Container className=" is-64x64">
          <Image
            alt=""
            src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
          />
        </Image.Container>
      </Media.Item>
      <Media.Item align="content">
        <Field>
          <Control>
            <Textarea placeholder="Add a comment..." />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button>Post comment</Button>
          </Control>
        </Field>
      </Media.Item>
    </Media>
  </Section>
);
