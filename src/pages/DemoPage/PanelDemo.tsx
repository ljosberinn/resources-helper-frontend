import React from 'react';
import {
  Section,
  Title,
  Panel,
  Column,
  Button,
  Checkbox,
  Input,
  Icon,
  Control,
} from 'rbx';

export const PanelDemo = () => (
  <Section>
    <Title>Panel</Title>

    <hr />
    <Column size={4}>
      <Panel>
        <Panel.Heading> Repositories </Panel.Heading>
        <Panel.Block>
          <Control iconLeft>
            <Input size="small" placeholder="search" />
            <Icon size="small" align="left">
              <i className="fa fa-search" />
            </Icon>
          </Control>
        </Panel.Block>
        <Panel.Tab.Group>
          <Panel.Tab active>All</Panel.Tab>
          <Panel.Tab>Public</Panel.Tab>
          <Panel.Tab>Private</Panel.Tab>
          <Panel.Tab>Sources</Panel.Tab>
          <Panel.Tab>Forks</Panel.Tab>
        </Panel.Tab.Group>
        <Panel.Block active>
          <Panel.Icon>
            <i className="fa fa-book" />
          </Panel.Icon>
          bulma
        </Panel.Block>
        <Panel.Block>
          <Panel.Icon>
            <i className="fa fa-book" />
          </Panel.Icon>
          marksheet
        </Panel.Block>
        <Panel.Block>
          <Panel.Icon>
            <i className="fa fa-book" />
          </Panel.Icon>
          minireset.css
        </Panel.Block>
        <Panel.Block>
          <Panel.Icon>
            <i className="fa fa-book" />
          </Panel.Icon>
          jgthms.github.io
        </Panel.Block>
        <Panel.Block>
          <Panel.Icon>
            <i className="fa fa-code-fork" />
          </Panel.Icon>
          daniellowtw/infBoard
        </Panel.Block>
        <Panel.Block>
          <Panel.Icon>
            <i className="fa fa-code-fork" />
          </Panel.Icon>
          mojs
        </Panel.Block>
        <Panel.Block as="label">
          <Checkbox /> Remember me
        </Panel.Block>
        <Panel.Block>
          <Button color="primary" outlined fullwidth>
            Reset all filters
          </Button>
        </Panel.Block>
      </Panel>
    </Column>
  </Section>
);
