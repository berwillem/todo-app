// src/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const language = localStorage.getItem('language') || 'en'; // Get language from localStorage or default to 'en'

i18next
  .use(initReactI18next)
  .init({
    lng: language,
    debug: true,
    resources: {
      en: {
        translation: {
          title: 'getStarted!'
        },
      },
      fr: {
        translation: {
          title: "Commencer!"
        },
      },
    },
  });

export default i18next;
