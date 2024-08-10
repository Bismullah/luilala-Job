import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Card = ({ image, title, subTitle, jobTitles, location, language }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={image} alt="Card image cap" />
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-800">{title[language]}</h5>
        <h6 className="text-sm font-medium text-gray-500 mb-2">{subTitle[language]}</h6>
        <div className="flex flex-wrap mb-2">
          {jobTitles[language].map((job, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-2 mb-2">
              {job}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600">Location: {location[language]}</p>
      </div>
    </div>
  );
};

const CardContainer = ({cardData}) => {
  const { t,i18n } = useTranslation();
  
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';
  const currentLang = i18n.language;
  return (
    <div dir={direction} className="container mx-auto px-8 my-8">
   
      <p className="text-3xl text-[#002244] mb-8">{t('Popular Industries')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div key={index}>
            <Card
              image={card.image}
              title={card.title}
              subTitle={card.subTitle}
              jobTitles={card.jobTitles}
              location={card.location}
              language={currentLang}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;