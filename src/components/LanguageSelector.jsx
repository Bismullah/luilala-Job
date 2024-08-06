import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        className={`px-4 py-2 rounded-md transition-colors duration-300 ${
          i18n.language === 'en'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
      <button
        className={`px-4 py-2 rounded-md transition-colors duration-300 ${
          i18n.language === 'ps'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleLanguageChange('ps')}
      >
        پښتو
      </button>
      <button
        className={`px-4 py-2 rounded-md transition-colors duration-300 ${
          i18n.language === 'fa'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleLanguageChange('fa')}
      >
        فارسي
      </button>
    </div>
  );
};

export default LanguageSelector;