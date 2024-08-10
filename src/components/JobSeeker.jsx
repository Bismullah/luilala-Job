import React, { useState, useEffect } from 'react';
import FirstImage from '../assets/first.jpg';
import SecondImage from '../assets/fourth.jpg';
import ThirdImage from '../assets/second.jpg';
import FourthImage from '../assets/third.jpg';
import { useTranslation } from 'react-i18next';

const JobSeeker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(true);
  const { t, i18n } = useTranslation();
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';

  const testimonials = [
    {
      image: FirstImage,
      text: t('textfirst'),
    },
    {
      image: SecondImage,
      text: t('textsecond'),
    },
    {
      image: ThirdImage,
      text: t('textthird'),
    },
    {
      image: FourthImage,
      text: t('textfourth'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div dir={direction} className={`container ${showSlider ? '' : 'hidden'} p-4 rounded-lg shadow-lg`}>
      <p className={`${direction==='rtl'?'mb-8':''} text-3xl mt-16 text-center`}>{t('Find out why job seekers love CV Builder...')}</p>
      <div className="card relative mx-auto max-w-lg md:max-w-2xl">
        <div className="image-container p-4">
          <img 
            src={testimonials[currentIndex].image} 
            alt="" 
            className="rounded-lg h-[30vh] md:h-[50vh] w-full object-cover" 
          />
          <p className=" text-center mt-4 p-2  text-sm md:text-lg text-white bg-[#002244] bg-opacity-50 rounded-lg">
            {testimonials[currentIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;