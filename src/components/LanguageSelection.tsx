import React, { ChangeEvent, memo } from 'react';
import { Field, Select, Label } from 'rbx';
import { Language } from '../types/user';
import i18next from 'i18next';

interface LanguageSelectionProps {
  currentLocale: Language;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  t: i18next.TFunction;
}

const Languages: Language[] = (process.env.REACT_APP_ENABLED_LANGUAGES as string).split(',') as Language[];

export const LanguageSelection = memo(({ handleChange, currentLocale, t }: LanguageSelectionProps) => (
  <Field>
    <Label>{t('selectLanguage')}</Label>
    <Select.Container size="small">
      <Select onChange={handleChange} value={currentLocale}>
        {Languages.map((language, index) => (
          <option value={language} key={index}>
            {t(language)}
          </option>
        ))}
      </Select>
    </Select.Container>
  </Field>
));
