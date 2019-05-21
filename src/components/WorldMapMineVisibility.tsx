import React, { ChangeEvent, memo } from 'react';
import { Field, Help, Label, Checkbox } from 'rbx';
import i18next from 'i18next';

interface WorldMapMineVisibilityProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  t: i18next.TFunction;
}

export const WorldMapMineVisibility = memo(
  ({ handleChange, checked, t }: WorldMapMineVisibilityProps) => (
    <Field>
      <Label>{t('worldMapMineVisibilityLabel')}</Label>
      <Checkbox
        className="is-checkradio is-small"
        id="worldmap-mine-visibility"
        checked={checked}
        onChange={handleChange}
      />
      <Label htmlFor="worldmap-mine-visibility">
        {t(
          checked
            ? 'worldMapMineVisibility_visible'
            : 'worldMapMineVisibility_invisible',
        )}
      </Label>
      <Help>{t('worldMapMineVisibilityHelp')}</Help>
    </Field>
  ),
);
