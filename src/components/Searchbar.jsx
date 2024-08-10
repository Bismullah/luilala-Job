import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Import your i18n configuration

function Searchbar() {
  const { t,i18n } = useTranslation();
  
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };
  const industryTypes = [
    { name: { en: 'Technology', ps: 'ټیکنالوژي', fa: 'فناوری' }, posted_days: 10 },
    { name: { en: 'Finance', ps: 'مالی', fa: 'مالی' }, posted_days: 20 },
    { name: { en: 'Healthcare', ps: 'صحت', fa: 'بهداشت' }, posted_days: 5 },
    { name: { en: 'Retail', ps: 'پرچون', fa: 'خرده فروشی' }, posted_days: 15 },
    { name: { en: 'Manufacturing', ps: 'تولید', fa: 'تولید' }, posted_days: 30 },
    { name: { en: 'Education', ps: 'تعلیم', fa: 'آموزش' }, posted_days: 8 },
    { name: { en: 'Logistics', ps: 'لوژستیک', fa: 'لجستیک' }, posted_days: 12 },
    { name: { en: 'Energy', ps: 'انرژی', fa: 'انرژی' }, posted_days: 18 },
    { name: { en: 'Agriculture', ps: 'زارعت', fa: 'کشاورزی' }, posted_days: 25 },
  ].sort((a, b) => b.posted_days - a.posted_days);


  const currentLang = i18n.language;

  const industryOptions = industryTypes.map((type) => (
    <option key={type.name[currentLang]} value={type.name[currentLang]}>
      {type.name[currentLang]}
    </option>
  ));

  return (
    <div dir={direction} className={`p-6 bg-gradient-to-r from-[#002244] to-[#4682B4] ${currentLang === 'ps' || currentLang === 'fa' ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="mt-4 shadow-md p-4 flex flex-col md:flex-row">
          <div className="flex-grow mr-3 flex  items-center mb-2 md:mb-0">
            <input
              className="w-full p-3 rounded-md border-slate-200 focus:outline-none bg-white text-[#002244] placeholder-gray-400"
              type="text"
              placeholder={t('jobTitle')}
            />
          </div>
          <div className="flex-grow flex items-center mb-2 md:mb-0">
            <input
              className={` ${direction==='rtl'?'sm:mr-6':''}   w-full p-3 rounded-md border-slate-200 focus:outline-none bg-white text-[#002244] placeholder-gray-400`}
              type="text"
              placeholder={t('addLocation')}
            />
          </div>
        </div>

        <div className="flex flex-col bg-[#002244] shadow-md p-4 mt-4 border-t-2 border-slate-700">
          <div className="flex flex-wrap gap-4">
            <input
              className="w-full md:w-1/4 p-3 border border-slate-200 rounded-md focus:outline-none bg-white text-[#002244] placeholder-gray-400"
              type="text"
              placeholder={t('minSalary')}
            />
            <input
              className="w-full md:w-1/4 p-3 border border-slate-200 rounded-md focus:outline-none bg-white text-[#002244] placeholder-gray-400"
              type="text"
              placeholder={t('maxSalary')}
            />
            <select className="w-full md:w-1/4 py-2 border-slate-200 focus:outline-none bg-white text-[#002244]">
              <option value="">{t('jobType')}</option>
              <option value="full-time">{t('fullTime')}</option>
              <option value="part-time">{t('partTime')}</option>
              <option value="contract">{t('contract')}</option>
            </select>
            <select className="w-full md:w-1/4 py-2 border-slate-200 focus:outline-none bg-white text-[#002244]">
              <option value="">{t('salaryType')}</option>
              <option value="hourly">{t('hourly')}</option>
              <option value="annual">{t('annual')}</option>
            </select>
          </div>

          {showMoreOptions && (
            <div className="flex flex-wrap gap-4 mt-4">
              <select className="w-full md:w-1/4 py-2 border-slate-200 focus:outline-none bg-white text-[#002244]">
                <option value="">{t('postedIn')}</option>
                <option value="last-10-days">{t('last10Days')}</option>
                <option value="last-20-days">{t('last20Days')}</option>
                <option value="last-30-days">{t('last30Days')}</option>
              </select>
              <select className="w-full md:w-1/4 py-2 border-slate-200 focus:outline-none bg-white text-[#002244]">
                <option value="">{t('searchByIndustry')}</option>
                {industryOptions}
              </select>
              <select className="w-full md:w-1/4 py-2 border-slate-200 focus:outline-none bg-white text-[#002244]">
                <option value="">{t('sortBy')}</option>
                <option value="relevance">{t('relevance')}</option>
                <option value="date-posted">{t('datePosted')}</option>
                <option value="salary">{t('salary')}</option>
                <option value="company-name">{t('companyName')}</option>
              </select>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              className="bg-[#194162] text-white px-4 py-2 rounded-full hover:bg-[#20517b] transition-colors duration-300"
              onClick={toggleMoreOptions}
            >
              {showMoreOptions ? t('lessOptions') : t('moreOptions')}
            </button>
            <button className="bg-[#194162] text-white px-4 py-2 rounded-full hover:bg-[#20517b] transition-colors duration-300">
              {t('search')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;