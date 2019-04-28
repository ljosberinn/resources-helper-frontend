import React, { ChangeEvent, memo } from 'react';
import { Field, Checkbox, Label, Help } from 'rbx';

interface RememberAPIKeyProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  remembersAPIKey: boolean;
  t: (key: string) => string;
}

export const RememberAPIKey = memo(({ handleChange, remembersAPIKey, t }: RememberAPIKeyProps) => (
  <Field>
    <Label>
      <Checkbox onChange={handleChange} checked={remembersAPIKey} /> {t('rememberAPIKey')}
    </Label>
    <Help>{t('rememberAPIKey')}</Help>
  </Field>
));
