import React from 'react';
import { useTranslation } from 'react-i18next';

const AdviceCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="h-48 w-full object-cover" src={image} alt="" />
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default function SeekingAdvice() {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';

  const adviceData = [
    {
      image: "https://media.istockphoto.com/id/515660203/photo/man-and-machine-as-one.jpg?s=612x612&w=0&k=20&c=M2k7LZhefbz922o9W-XbTouRAyw9u5FVUZd5stoPWRQ=",
      titleKey: "advice.profileWriting",
    },
    {
      image: "https://media.istockphoto.com/id/874813790/photo/the-digital-worker-gets-things-done.jpg?s=612x612&w=0&k=20&c=0S2_0Hgd73qngrRrQkBdtvh3uPS2A-ulOXvT31Sct84=",
      titleKey: "advice.cvLyingDangers",
    },
    {
      image: "https://media.istockphoto.com/id/1081867492/photo/they-prove-what-true-dedication-is.jpg?s=612x612&w=0&k=20&c=DlDvz-ZK8Q6oUAp894M2sLJj0VGlDoLYJ47hb8gFrbs=",
      titleKey: "advice.cvRejectionTips",
    },
    {
      image: "https://media.istockphoto.com/id/576902490/photo/businesswoman-giving-presentation-on-future-plans-to-colleagues.jpg?s=612x612&w=0&k=20&c=JX23C56FdGHJ8GtB5QixGh6f1K4h7ZYjdFN19SMkuGY=",
      titleKey: "advice.hobbiesInterests",
    },
    {
      image: "https://media.istockphoto.com/id/532121712/photo/make-sure-your-business-is-portable.jpg?s=612x612&w=0&k=20&c=PdZvhxBh9RO6duIfKpBPR7b8nLNGDydKGtfpsx4asIo=",
      titleKey: "advice.profileWriting",
    },
    {
      image: "https://media.istockphoto.com/id/1326660339/photo/using-phone-in-a-front-of-neon-lights-on-the-street.jpg?s=612x612&w=0&k=20&c=oZXzCJ2J4ulV_p81zit4Toa2wfriQOGMhUVOdS2BhwQ=",
      titleKey: "advice.profileWriting",
    },
  ];

  return (
    <div dir={direction} className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('advice.seekingAdvice')}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {t('advice.helpfulTips')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {adviceData.map((advice, index) => (
            <AdviceCard key={index} image={advice.image} title={t(advice.titleKey)} />
          ))}
        </div>
      </div>
    </div>
  );
}