import React from 'react';

import { Field, Control, Section, Icon, Title, Column, Button } from 'rbx';
import { states, colors } from './constants';

export const Buttons = () => (
  <Section>
    <Title>Button</Title>
    <hr />
    <Column.Group>
      <Column>
        <Button.Group>
          <Button>Button</Button>
          <Button color="white">White</Button>
          <Button color="light">light</Button>
          <Button color="dark">dark</Button>
          <Button color="black">black</Button>
          <Button color="link">link</Button>
          <Button text>text</Button>
        </Button.Group>
        <Button.Group>
          <Button color="primary">primary</Button>
          {colors.map(color => (
            <Button color={color} key={color}>
              {color}
            </Button>
          ))}
        </Button.Group>
        {states.map(state => (
          <Button.Group key={state}>
            <Button state={state}>{state}</Button>
            {colors.map(color => (
              <Button color={color} state={state} key={color}>
                {color}
              </Button>
            ))}
          </Button.Group>
        ))}

        <Field>
          <Button>
            <Icon size="small">
              <i className="fa fa-bold"> </i>
            </Icon>
          </Button>
          <Button>
            <Icon size="small">
              <i className="fa fa-italic"> </i>
            </Icon>
          </Button>
          <Button>
            <Icon size="small">
              <i className="fa fa-underline"> </i>
            </Icon>
          </Button>
          <Button>
            <Icon className="icon">
              <i className="fa fa-github"> </i>
            </Icon>
            <span> GitHub </span>
          </Button>
          <Button color="primary">
            <Icon className="icon">
              <i className="fa fa-twitter"> </i>
            </Icon>
            <span> Twitter </span>
          </Button>
          <Button color="success">
            <Icon size="small">
              <i className="fa fa-check"> </i>
            </Icon>
            <span> Save </span>
          </Button>
          <Button color="danger" outlined>
            <span> Delete </span>
            <Icon size="small">
              <i className="fa fa-times"> </i>
            </Icon>
          </Button>
        </Field>
        <Field hasAddons>
          <Control>
            <Button>
              <Icon size="small">
                <i className="fa fa-bold" />
              </Icon>
              <span>Bold</span>
            </Button>
          </Control>
          <Control>
            <Button>
              <Icon size="small">
                <i className="fa fa-italic" />
              </Icon>
              <span>Italic</span>
            </Button>
          </Control>
          <Control>
            <Button>
              <Icon size="small">
                <i className="fa fa-underline" />
              </Icon>
              <span>Underline</span>
            </Button>
          </Control>
        </Field>

        <Field hasAddons>
          <Control>
            <Button>
              <Icon size="small">
                <i className="fa fa-align-left" />
              </Icon>
              <span>Left</span>
            </Button>
          </Control>
          <Control>
            <Button>
              <Icon size="small">
                <i className="fa fa-align-center" />
              </Icon>
              <span>Center</span>
            </Button>
          </Control>
          <Control>
            <Button>
              <Icon size="small">
                <i className="fa fa-align-right" />
              </Icon>
              <span>Right</span>
            </Button>
          </Control>
        </Field>
        <Button.Group>
          <Button rounded>rounded</Button>
          <Button color="primary" rounded>
            rounded
          </Button>
          <Button color="link" rounded>
            rounded
          </Button>
          <Button color="info" rounded>
            rounded
          </Button>
          <Button color="success" rounded>
            rounded
          </Button>
          <Button color="danger" rounded>
            rounded
          </Button>
        </Button.Group>
      </Column>
      <Column>
        <Button.Group>
          <Button size="small">small</Button>
          <Button>normal</Button>
          <Button size="medium">medium</Button>
          <Button size="large">large</Button>
        </Button.Group>
        <Button.Group>
          <Button color="primary" outlined>
            outlined
          </Button>
          <Button color="info" outlined>
            outlined
          </Button>
          <Button color="success" outlined>
            outlined
          </Button>
          <Button color="danger" outlined>
            outlined
          </Button>
        </Button.Group>
        <div className="buttons notification is-primary">
          <Button color="primary" inverted outlined>
            inverted outlined
          </Button>
          <Button color="info" inverted outlined>
            inverted outlined
          </Button>
          <Button color="success" inverted outlined>
            inverted outlined
          </Button>
          <Button color="danger" inverted outlined>
            inverted outlined
          </Button>
        </div>
        <div className="buttons notification is-primary">
          <Button color="primary" inverted>
            inverted
          </Button>
          <Button color="info" inverted>
            inverted
          </Button>
          <Button color="success" inverted>
            inverted
          </Button>
          <Button color="danger" inverted>
            inverted
          </Button>
        </div>
        <Button.Group>
          <Button size="small">
            <span className="icon is-small">
              <i className="fa fa-github"> </i>
            </span>
            <span> GitHub </span>
          </Button>
          <Button>
            <span className="icon">
              <i className="fa fa-github"> </i>
            </span>
            <span> GitHub </span>
          </Button>
          <Button size="medium">
            <span className="icon">
              <i className="fa fa-github"> </i>
            </span>
            <span> GitHub </span>
          </Button>
          <Button size="large">
            <span className="icon is-medium">
              <i className="fa fa-github"> </i>
            </span>
            <span> GitHub </span>
          </Button>
        </Button.Group>
        <Field>
          <Button size="small">
            <span className="icon is-small">
              <i className="fa fa-header"> </i>
            </span>
          </Button>
        </Field>
        <Field>
          <Button>
            <span className="icon is-small">
              <i className="fa fa-header"> </i>
            </span>
          </Button>
          <Button>
            <span className="icon">
              <i className="fa fa-header fa-lg"> </i>
            </span>
          </Button>
        </Field>
        <Field>
          <Button size="medium">
            <span className="icon is-small">
              <i className="fa fa-header"> </i>
            </span>
          </Button>
          <Button size="medium">
            <span className="icon">
              <i className="fa fa-header fa-lg"> </i>
            </span>
          </Button>
          <Button size="medium">
            <span className="icon is-medium">
              <i className="fa fa-header fa-2x"> </i>
            </span>
          </Button>
        </Field>
        <Field>
          <Button size="large">
            <span className="icon is-small">
              <i className="fa fa-header"> </i>
            </span>
          </Button>
          <Button size="large">
            <span className="icon is-medium">
              <i className="fa fa-header fa-lg"> </i>
            </span>
          </Button>
          <Button size="large">
            <span className="icon is-large">
              <i className="fa fa-header fa-2x"> </i>
            </span>
          </Button>
        </Field>
      </Column>
    </Column.Group>
  </Section>
);
