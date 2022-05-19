import i18next from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import english from './en.json';
import spanish from './es.json';

i18next.use(LanguageDetector).init({
  detection: { order: ['navigator'] },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: english,
    },
    es: {
      translation: spanish,
    },
  },
});

export default i18next;
