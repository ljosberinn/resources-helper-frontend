import React, { memo, ChangeEvent } from 'react';
import { Help, Field, Checkbox, Label } from 'rbx';
import i18next from 'i18next';

interface WorldMapHeadquarterVisibilityProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  t: i18next.TFunction;
}

export const WorldMapHeadquarterVisibility = memo(({ handleChange, checked, t }: WorldMapHeadquarterVisibilityProps) => (
  <Field>
    <Label>{t('worldMapHeadquarterVisibilityLabel')}</Label>
    <Label>
      <Checkbox checked={checked} onChange={handleChange} />{' '}
      {t(checked ? 'worldMapHeadquarterVisibility_visible' : 'worldMapHeadquarterVisibility_invisible')}
    </Label>
    <Help>{t('worldMapHeadquarterVisibilityHelp')}</Help>
  </Field>
));
