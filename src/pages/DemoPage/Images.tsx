import React from 'react';
import { Section, Title, Image } from 'rbx';

export const Images = () => (
  <Section>
    <Title>Images</Title>
    <hr />
    <figure className="image is-128x128">
      <Image src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
    </figure>
  </Section>
);
