import React, { ChangeEvent, memo } from 'react';
import { Input } from 'rbx';
import i18next from 'i18next';

interface APIKeyInputProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  apiKey: string | undefined;
  t: i18next.TFunction;
}

export const APIKeyInput = memo(
  ({ handleChange, apiKey, t }: APIKeyInputProps) => (
    <Input
      type="text"
      onChange={handleChange}
      defaultValue={apiKey}
      placeholder={t('APIKey')}
    />
  ),
);
