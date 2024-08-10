import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQItem = ({ questionKey, answerKey }) => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h3 className="text-lg font-medium">{t(questionKey)}</h3>
      <p className="text-gray-700">{t(answerKey)}</p>
    </div>
  );
};

export default function QAF() {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';

  return (
    <div dir={direction} className="bg-white shadow-md rounded-md p-8 my-8">
      <h2 className="text-2xl font-bold mb-6">{t('faq.title')}</h2>

      <div className="space-y-6">
        <FAQItem 
          questionKey="faq.freeUsage"
          answerKey="faq.freeUsageAnswer"
        />
        <FAQItem 
          questionKey="faq.mobileUsage"
          answerKey="faq.mobileUsageAnswer"
        />
        <FAQItem 
          questionKey="faq.cvDelivery"
          answerKey="faq.cvDeliveryAnswer"
        />
        <FAQItem 
          questionKey="faq.cvFormat"
          answerKey="faq.cvFormatAnswer"
        />
        <FAQItem 
          questionKey="faq.editCV"
          answerKey="faq.editCVAnswer"
        />
        <FAQItem 
          questionKey="faq.deleteCV"
          answerKey="faq.deleteCVAnswer"
        />
      </div>
    </div>
  );
}