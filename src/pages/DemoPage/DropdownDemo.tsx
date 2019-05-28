import React from 'react';

import { Section, Title, Icon, Dropdown, Button, Column } from 'rbx';

export const DropdownDemo = () => (
  <Section>
    <Title>Dropdown</Title>
    <hr />
    <Column.Group>
      <Column>
        <Dropdown managed active>
          <Dropdown.Trigger>
            <Button>
              <span>Dropdown button</span>
              <Icon size="small">
                <i className="fa fa-angle-down" aria-hidden="true" />
              </Icon>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Content>
              <Dropdown.Item>Dropdown item</Dropdown.Item>
              <Dropdown.Item>Other dropdown item</Dropdown.Item>
              <Dropdown.Item active>Active dropdown item</Dropdown.Item>
              <Dropdown.Item>Other dropdown item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>With a divider</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
      </Column>

      <Column>
        <Dropdown managed active>
          <Dropdown.Trigger>
            <Button color="info">
              <span>Dropdown button</span>
              <Icon size="small">
                <i className="fa fa-angle-down" aria-hidden="true" />
              </Icon>
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Content>
              <Dropdown.Item>
                <p>
                  You can insert <strong>any type of content</strong> within the
                  dropdown menu.
                </p>
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item>
                <p>
                  You simply need to use a <code>&lt;div&gt;</code> instead.
                </p>
              </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item>This is a link</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
      </Column>
    </Column.Group>
  </Section>
);
