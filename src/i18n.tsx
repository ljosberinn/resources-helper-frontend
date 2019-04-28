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
      crossDomain: true,
    },
    saveMissing: true,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    keySeparator: false,
  });

export default i18n;
