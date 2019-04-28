import React, { ChangeEvent, memo } from 'react';
import { Field, Help, Label, Checkbox } from 'rbx';
import i18next from 'i18next';

interface WorldMapMineVisibilityProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  t: i18next.TFunction;
}

export const WorldMapMineVisibility = memo(({ handleChange, checked, t }: WorldMapMineVisibilityProps) => (
  <Field>
    <Label>{t('worldMapMineVisibilityLabel')}</Label>
    <Label>
      <Checkbox checked={checked} onChange={handleChange} />{' '}
      {t(checked ? 'worldMapMineVisibility_visible' : 'worldMapMineVisibility_invisible')}
    </Label>
    <Help>{t('worldMapMineVisibilityHelp')}</Help>
  </Field>
));
