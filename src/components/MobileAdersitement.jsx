import React from 'react';
import { useTranslation } from 'react-i18next';
import mobileView from '../assets/mobileView2.png';
import appStore from '../assets/appStore.png';
import playstore from '../assets/playstore.png';

export default function MobileAdvertisement() {
  const { t,i18n } = useTranslation();
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';
  return (
    <div  className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src={mobileView} alt={t('Mobile View')} className="w-full max-w-md mx-auto" />
      </div>
      <div dir={direction} className={`w-full md:w-1/2 text-center ${direction==='ltr'?'md:text-left':'md:text-right'} md:text-left`}>
        <h2 className="text-3xl font-bold mb-4">{t('Job Search App')}</h2>
        <p className="text-gray-600 mb-6">
          {t('Download the CV-Library app for iPhone, iPad and Android to search jobs on the go.')}
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="inline-block">
            <img src={playstore} alt={t('Download on Play Store')} className="h-12" />
          </a>
          <a href="#" className="inline-block">
            <img src={appStore} alt={t('Download on App Store')} className="h-12" />
          </a>
        </div>
      </div>
    </div>
  );
}