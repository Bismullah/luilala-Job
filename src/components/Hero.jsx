import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import newStar from '../assets/newStar.png';
import CVLibraryInfo from './CVLibraryInfo';

function Hero() {
  const { t, i18n } = useTranslation(); // Initialize translation
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  // Determine the direction based on the language
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';

  return (
    <div className={`bg-gradient-to-r from-[#002244] to-[#001122] h-auto px-4 py-8 pb-16`} dir={direction}>
      <div className="container mx-auto px-6 sm:px-8">
        <div className={`text-center flex flex-col items-center ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('Search Job')}
          </h1>
          <img
            className="mx-8 mt-4 w-16 h-16"
            loading="lazy"
            alt={t('S')}
            src={newStar}
          />
        </div>
        
        <div className="mt-8 rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-grow w-full sm:w-[auto] flex items-center">
            <input
              className={`ml-2 w-full py-4 p-4 rounded-md focus:outline-none bg-white text-[#002244] placeholder-gray-400 ${direction === 'rtl' ? 'mr-2 ml-0' : 'ml-2'}`}
              type="text"
              placeholder={t('Search Job')}
            />
          </div>
          <div className="flex-grow w-full sm:w-[auto] flex items-center">
            <input
              className={`ml-2 w-full py-4 p-4 rounded-md focus:outline-none bg-white text-[#002244] placeholder-gray-400 ${direction === 'rtl' ? 'mr-2 ml-0' : 'ml-2'}`}
              type="text"
              placeholder={t('Company')}
            />
          </div>
        </div>

        {showMoreOptions && (
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 rounded-lg shadow-md p-6">
            <input
              className={`ml-2 w-full py-3 p-4 rounded-md focus:outline-none bg-white text-[#002244] placeholder-gray-400 ${direction === 'rtl' ? 'mr-2 ml-0' : 'ml-2'}`}
              type="text"
              placeholder={t('Minimum Salary')}
            />
            <input
              className={`ml-2 w-full py-3 p-4 rounded-md focus:outline-none bg-white text-[#002244] placeholder-gray-400 ${direction === 'rtl' ? 'mr-2 ml-0' : 'ml-2'}`}
              type="text"
              placeholder={t('Maximum Salary')}
            />
            <select className={`ml-2 w-full py-3 p-4 rounded-md focus:outline-none bg-white text-[#002244] ${direction === 'rtl' ? 'mr-2 ml-0' : 'ml-2'}`}>
              <option value="">{t('Select Job Type')}</option>
              <option value="full-time">{t('Full-time')}</option>
              <option value="part-time">{t('Part-time')}</option>
              <option value="contract">{t('Contract')}</option>
            </select>
            <select className={`ml-2 w-full py-3 p-4 rounded-md focus:outline-none bg-white text-[#002244] ${direction === 'rtl' ? 'mr-2 ml-0' : 'ml-2'}`}>
              <option value="">{t('Select Salary Type')}</option>
              <option value="hourly">{t('Hourly')}</option>
              <option value="annual">{t('Annual')}</option>
            </select>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
          <button className="bg-[#194162] text-white px-8 py-4 rounded-full hover:bg-[#20517b] transition-colors duration-300 shadow-lg">
            {t('Search')}
          </button>
          <button
            className="bg-[#194162] text-white px-8 py-4 rounded-full hover:bg-[#20517b] transition-colors duration-300 shadow-lg"
            onClick={toggleMoreOptions}
          >
            {showMoreOptions ? t('Less Options') : t('More Options')}
          </button>
        </div>
      </div>
      <CVLibraryInfo />
    </div>
  );
}

export default Hero;