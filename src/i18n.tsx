import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `/api/locales.json?lang={{lng}}`,
      addPath: `/api/locales.json?add&lang={{lng}}`,
    },
    fallbackLng: 'en',
    saveMissing: true,
    debug: process.env.NODE_ENV === 'development',
    whitelist: (process.env.REACT_APP_ENABLED_LANGUAGES as string).split(','),
  });

export default i18n;
