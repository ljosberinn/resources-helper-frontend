import React from 'react';
import { colors, sizes } from './constants';
import { Section, Title, Progress } from 'rbx';

const DEFAULT_VALUE = 15;
const MAX = 100;

export const ProgressBars = () => (
  <Section>
    <Title>Progress bars</Title>
    <hr />

    <Progress max={MAX} value={DEFAULT_VALUE}>
      {DEFAULT_VALUE}%
    </Progress>

    {colors.map(color => (
      <Progress color={color} max={MAX} value={DEFAULT_VALUE}>
        {DEFAULT_VALUE}%
      </Progress>
    ))}

    {sizes.map((size, index) => (
      <Progress size={size} max={MAX} value={DEFAULT_VALUE * (index + 1)}>
        {DEFAULT_VALUE * (index + 1)}%
      </Progress>
    ))}
  </Section>
);
