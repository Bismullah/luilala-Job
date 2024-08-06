import React from 'react';
import { useTranslation } from 'react-i18next';
import cv4 from '../assets/cv4.png';





const RegisterCv = () => {
  const { t,i18n } = useTranslation();
  
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';
  return (
    <div dir={direction} className="mx-auto w-[85vw] sm:w-[85vw] md:w-[75vw] h-auto p-8 sm:p-12 flex items-center justify-center">
      <div className="bg-[#002244] rounded-lg shadow-lg p-6 sm:p-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold mb-4 text-gray-100">{t('Register your CV')}</h3>
          <p className="text-gray-100 mb-6">
            {t('Upload your CV today to be headhunted by 10,071 companies, and apply to 156,503 jobs with 1-click apply.')}
          </p>
          <button className="bg-light-blue text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-300 transition-colors duration-300 ease-in-out">
            {t('Register')}
          </button>
        </div>
        <div className="md:w-1/4 flex justify-center">
          <img src={cv4} alt={t('CV')} className="w-[100px] sm:w-[120px] md:w-[150px] mt-6 rounded-md shadow-md" />
        </div>
      </div>
    </div> 
  );
};

export default RegisterCv;