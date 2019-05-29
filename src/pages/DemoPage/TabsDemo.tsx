import React from 'react';

import { Tab, Section, Title, Icon } from 'rbx';

const TabItems = () => (
  <ul>
    <Tab active>
      <span>Pictures</span>
    </Tab>
    <Tab>
      <span>Music</span>
    </Tab>
    <Tab>
      <span>Videos</span>
    </Tab>
    <Tab>
      <span>Documents</span>
    </Tab>
  </ul>
);

const ExtendedTabItems = () => (
  <ul>
    <Tab active>
      <Icon size="small">
        <i className="fa fa-image" />
      </Icon>
      <span>Pictures</span>
    </Tab>
    <Tab>
      <Icon size="small">
        <i className="fa fa-music" />
      </Icon>
      <span>Music</span>
    </Tab>
    <Tab>
      <Icon size="small">
        <i className="fa fa-film" />
      </Icon>
      <span>Videos</span>
    </Tab>
    <Tab>
      <Icon size="small">
        <i className="fa fa-file-text-o" />
      </Icon>
      <span>Documents</span>
    </Tab>
  </ul>
);

export const TabsDemo = () => (
  <Section>
    <Title>Tabs</Title>
    <hr />
    <Tab.Group>
      <TabItems />
    </Tab.Group>
    <br />
    <Tab.Group align="centered">
      <TabItems />
    </Tab.Group>
    <br />
    <Tab.Group size="small">
      <TabItems />
    </Tab.Group>
    <br />
    <Tab.Group size="medium">
      <TabItems />
    </Tab.Group>
    <br />
    <Tab.Group size="large">
      <TabItems />
    </Tab.Group>
    <br />
    <Tab.Group kind="boxed">
      <ExtendedTabItems />
    </Tab.Group>
    <br />
    <Tab.Group kind="toggle">
      <ExtendedTabItems />
    </Tab.Group>
    <br />
    <Tab.Group kind="toggle-rounded">
      <ExtendedTabItems />
    </Tab.Group>
    <br />
    <Tab.Group fullwidth>
      <ExtendedTabItems />
    </Tab.Group>
    <br />
    <Tab.Group align="centered" kind="boxed">
      <ExtendedTabItems />
    </Tab.Group>
    <br />
    <Tab.Group size="large" kind="toggle" fullwidth>
      <ExtendedTabItems />
    </Tab.Group>
  </Section>
);
