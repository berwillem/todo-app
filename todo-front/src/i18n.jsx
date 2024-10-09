import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define the translation content
const resources = {
  en: {
    translation: {
      getStarted: "Get Started",
    },
  },
  es: {
    translation: {
      getStarted: "Comienza",
    },
  },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  debugger:true,
});

export default i18n;
