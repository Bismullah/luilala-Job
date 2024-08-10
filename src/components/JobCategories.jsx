import React from 'react';
import { useTranslation } from 'react-i18next';

const JobCategories = () => {
  const { t,i18n } = useTranslation();
  
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';

  const jobCategories = [
    {
      title: t('trendingJobs'),
      jobs: [
        t('jobs.0'), t('jobs.1'), t('jobs.2'), t('jobs.3'),
        t('jobs.4'), t('jobs.5'), t('jobs.6'), t('jobs.7'),
        t('jobs.8'), t('jobs.9'), t('jobs.10'), t('jobs.11'),
        t('jobs.12'), t('jobs.13'),
      ],
    },
    {
      title: t('moreIndustries'),
      jobs: [
        t('jobs.14'), t('jobs.15'), t('jobs.16'), t('jobs.17'),
        t('jobs.18'), t('jobs.19'), t('jobs.20'), t('jobs.21'),
        t('jobs.22'), t('jobs.23'), t('jobs.24'), t('jobs.25'),
        t('jobs.26'), t('jobs.27'),
      ],
    },
  ];

  return (
    <div dir={direction} className="bg-gray-100 px-6 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t('browseJobs')}</h2>
        {jobCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.jobs.map((job, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-md p-4 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                >
                  {job}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;