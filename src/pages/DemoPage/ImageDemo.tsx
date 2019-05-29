import React from 'react';
import { Section, Title, Image } from 'rbx';

export const ImageDemo = () => (
  <Section>
    <Title>Images</Title>
    <hr />
    <Image.Container className="is-128x128">
      <Image src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
    </Image.Container>
  </Section>
);
