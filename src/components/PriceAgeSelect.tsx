import React, { ChangeEvent, memo } from 'react';
import { Help, Field, Select, Label } from 'rbx';
import i18next from 'i18next';
import { PriceRanges } from '../types/user';

interface PriceAgeSelectProps {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  currentValue: number;
  t: i18next.TFunction;
}

const options: PriceRanges[] = [1, 24, 48, 72, 96, 120, 144, 168];

export const PriceAgeSelect = memo(
  ({ handleChange, currentValue, t }: PriceAgeSelectProps) => (
    <Field>
      <Label>{t('priceAge')}</Label>
      <Select.Container size="small">
        <Select onChange={handleChange} value={currentValue}>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {t(`priceAge_${option}`)}
            </option>
          ))}
        </Select>
      </Select.Container>
      <Help>{t('priceAgeSelect')}</Help>
    </Field>
  ),
);
