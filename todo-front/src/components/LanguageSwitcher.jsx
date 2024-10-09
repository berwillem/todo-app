import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Access i18n for changing language

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language when the user selects an option
  };

  return (
    <div>
      <label htmlFor="language-select">Choose language:</label>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
