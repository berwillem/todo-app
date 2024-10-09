// src/i18n.jsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Get started": "Get started",
            "Get Started": "Get Started", // Ajoutez cette ligne
            // Ajoutez d'autres traductions ici
        }
    },
    fr: {
        translation: {
            "Get started": "commencer",
            "Get Started": "Commencer", // Ajoutez cette ligne
            // Ajoutez d'autres traductions ici
        }
    }
};

i18n
    .use(initReactI18next) // Passe i18n à react-i18next
    .init({
        resources,
        lng: "en", // Langue par défaut
        fallbackLng: "en", // Langue de repli
        interpolation: {
            escapeValue: false // React protège déjà contre les XSS
        },
        debug: true,
        missingKeyHandler: function(lng, ns, key) {
            console.warn(`Missing translation for key: ${key}`);
            return key; // Retourne la clé si la traduction est manquante
        },
    });

export default i18n;
