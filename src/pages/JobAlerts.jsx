import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// Reusable Form Component
const JobAlertForm = ({ onSubmit }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">{t('job_alerts.form.title')}</h2>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        {['keywords', 'location', 'email'].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-gray-700 font-medium"
            >
              {t(`job_alerts.form.${field}`)}
            </label>
            <input
              id={field}
              type={field === 'email' ? 'email' : 'text'}
              placeholder={t(`job_alerts.form.placeholder.${field}`)}
              className="mt-2 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-[#1c4980] text-white py-2 px-4 rounded-md hover:bg-[#2a6aad] focus:outline-none focus:ring-2 focus:ring-[#1c4980] focus:ring-offset-2"
        >
          {t('job_alerts.form.submit_button')}
        </button>
        <div className="text-gray-600 text-sm">
          {t('job_alerts.form.agreement')}
        </div>
      </form>
    </div>
  );
};

// Reusable Video Component
const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-md">
      <iframe
        width="100%"
        height="340"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="mt-4 text-gray-600 font-bold">
        {t('job_alerts.video_section.title')}
      </div>
      <img
        className='mt-2'
        src="https://www.cv-library.co.uk/assets/images/jbe-companies-1955cb7154c6b214ba90714c5dfcbff81569f747e0dcd968b4400fc5e16fc0cb.png"
        alt="Companies"
      />
    </div>
  );
};

// Reusable Reasons Component
const ReasonsToSetupAlerts = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 bg-gray-100 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">{t('job_alerts.reasons.title')}</h2>
      {[
        {
          title: t('job_alerts.reasons.reason1.title'),
          description: t('job_alerts.reasons.reason1.description')
        },
        {
          title: t('job_alerts.reasons.reason2.title'),
          description: t('job_alerts.reasons.reason2.description')
        },
        {
          title: t('job_alerts.reasons.reason3.title'),
          description: t('job_alerts.reasons.reason3.description')
        },
        {
          title: t('job_alerts.reasons.reason4.title'),
          description: t('job_alerts.reasons.reason4.description')
        },
      ].map((item, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

// Main JobAlerts Component
export default function JobAlerts() {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div dir={direction} className="bg-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 text-sm">
          {t('job_alerts.search_info')}
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {t('job_alerts.title')}
            </h1>
            <p className="text-gray-600 mt-4">
              {t('job_alerts.description')}
            </p>
            <div className="mt-6 flex items-center">
              <p className="text-gray-600">{t('job_alerts.already_registered')}</p>
              <a
                href="#"
                className="ml-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {t('job_alerts.view_alerts')}
              </a>
            </div>
          </div>
          <JobAlertForm onSubmit={handleSubmit} />
        </div>
        <div className="second_part mt-8">
          <VideoSection />
        </div>
        <ReasonsToSetupAlerts />
      </div>
    </div>
  );
}