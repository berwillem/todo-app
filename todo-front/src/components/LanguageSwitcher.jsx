// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation(); // Utilisez le hook pour accéder à l'instance i18next

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Change la langue
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button>
        </div>
    );
};

export default LanguageSwitcher;
