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
            <Icon>
              <i className="fa fa-github"> </i>
            </Icon>
            <span> GitHub </span>
          </Button>
          <Button color="primary">
            <Icon>
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
        <Button.Group hasAddons>
          {['bold', 'italic', 'underline'].map(size => (
            <Control key={size}>
              <Button>
                <Icon size="small">
                  <i className={`fa fa-${size}`} />
                </Icon>
                <span>{size}</span>
              </Button>
            </Control>
          ))}
        </Button.Group>

        <Button.Group hasAddons>
          {['left', 'center', 'right'].map(direction => (
            <Control key={direction}>
              <Button>
                <Icon size="small">
                  <i className={`fa fa-${direction}`} />
                </Icon>
                <span>{direction}</span>
              </Button>
            </Control>
          ))}
        </Button.Group>
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
        <Button.Group className="notification is-primary">
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
        </Button.Group>
        <Button.Group className="notification is-primary">
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
        </Button.Group>
        <Button.Group>
          <Button size="small">
            <Icon size="small">
              <i className="fa fa-github"> </i>
            </Icon>
            <span> GitHub </span>
          </Button>
          <Button>
            <Icon>
              <i className="fa fa-github"> </i>
            </Icon>
            <span> GitHub </span>
          </Button>
          <Button size="medium">
            <Icon>
              <i className="fa fa-github"> </i>
            </Icon>
            <span> GitHub </span>
          </Button>
          <Button size="large">
            <Icon size="medium">
              <i className="fa fa-github"> </i>
            </Icon>
            <span> GitHub </span>
          </Button>
        </Button.Group>
        <Field>
          <Button size="small">
            <Icon size="small">
              <i className="fa fa-header"> </i>
            </Icon>
          </Button>
        </Field>
        <Field>
          <Button>
            <Icon size="small">
              <i className="fa fa-header"> </i>
            </Icon>
          </Button>
          <Button>
            <Icon>
              <i className="fa fa-header fa-lg"> </i>
            </Icon>
          </Button>
        </Field>
        <Field>
          <Button size="medium">
            <Icon size="small">
              <i className="fa fa-header"> </i>
            </Icon>
          </Button>
          <Button size="medium">
            <Icon>
              <i className="fa fa-header fa-lg"> </i>
            </Icon>
          </Button>
          <Button size="medium">
            <Icon size="medium">
              <i className="fa fa-header fa-2x"> </i>
            </Icon>
          </Button>
        </Field>
        <Field>
          <Button size="large">
            <Icon size="small">
              <i className="fa fa-header"> </i>
            </Icon>
          </Button>
          <Button size="large">
            <Icon size="medium">
              <i className="fa fa-header fa-lg"> </i>
            </Icon>
          </Button>
          <Button size="large">
            <Icon size="large">
              <i className="fa fa-header fa-2x"> </i>
            </Icon>
          </Button>
        </Field>
      </Column>
    </Column.Group>
  </Section>
);
