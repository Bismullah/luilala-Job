// Carousel.js
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const jobs = [
  {
    career: { en: "Software Engineer", ps: "د سافټویر انجنیر", fa: "مهندس نرم‌افزار" },
    salary: { en: "₦100,000 - ₦150,000", ps: "₦۱۰۰،۰۰۰ - ₦۱۵۰،۰۰۰", fa: "₦۱۰۰،۰۰۰ - ₦۱۵۰،۰۰۰" },
    location: { en: "San Francisco, CA", ps: "سان فرانسیسکو، CA", fa: "سان فرانسیسکو، CA" },
  },
  {
    career: { en: "Marketing Manager", ps: "د بازار موندنې مدیر", fa: "مدیر بازاریابی" },
    salary: { en: "₦70,000 - ₦90,000", ps: "₦۷۰،۰۰۰ - ₦۹۰،۰۰۰", fa: "₦۷۰،۰۰۰ - ₦۹۰،۰۰۰" },
    location: { en: "New York, NY", ps: "نیویارک، NY", fa: "نیویورک، NY" },
  },
  {
    career: { en: "Registered Nurse", ps: "ثبت شوی نرس", fa: "پرستار ثبت‌شده" },
    salary: { en: "₦60,000 - ₦80,000", ps: "₦۶۰،۰۰۰ - ₦۸۰،۰۰۰", fa: "₦۶۰،۰۰۰ - ₦۸۰،۰۰۰" },
    location: { en: "Seattle, WA", ps: "سیاتل، WA", fa: "سیاتل، WA" },
  },
  {
    career: { en: "Financial Analyst", ps: "مالي تحلیلګر", fa: "تحلیلگر مالی" },
    salary: { en: "₦80,000 - ₦110,000", ps: "₦۸۰،۰۰۰ - ₦۱۱۰،۰۰۰", fa: "₦۸۰،۰۰۰ - ₦۱۱۰،۰۰۰" },
    location: { en: "Chicago, IL", ps: "شیکاګو، IL", fa: "شیکاگو، IL" },
  },
  {
    career: { en: "Graphic Designer", ps: "ګرافیک ډیزاینر", fa: "طراح گرافیک" },
    salary: { en: "₦50,000 - ₦70,000", ps: "₦۵۰،۰۰۰ - ₦۷۰،۰۰۰", fa: "₦۵۰،۰۰۰ - ₦۷۰،۰۰۰" },
    location: { en: "Los Angeles, CA", ps: "لاس انجلس، CA", fa: "لس آنجلس، CA" },
  },
  {
    career: { en: "IT Project Manager", ps: "د IT پروژې مدیر", fa: "مدیر پروژه IT" },
    salary: { en: "₦90,000 - ₦120,000", ps: "₦۹۰،۰۰۰ - ₦۱۲۰،۰۰۰", fa: "₦۹۰،۰۰۰ - ₦۱۲۰،۰۰۰" },
    location: { en: "Boston, MA", ps: "بوسټن، MA", fa: "بوسطن، MA" },
  },
  {
    career: { en: "Sales Representative", ps: "د پلور استازی", fa: "نماینده فروش" },
    salary: { en: "₦40,000 - ₦60,000", ps: "₦۴۰،۰۰۰ - ₦۶۰،۰۰۰", fa: "₦۴۰،۰۰۰ - ₦۶۰،۰۰۰" },
    location: { en: "Atlanta, GA", ps: "اتلانتا، GA", fa: "آتلانتا، GA" },
  },
  {
    career: { en: "Data Scientist", ps: "د معلوماتو ساینس پوه", fa: "دانشمند داده" },
    salary: { en: "₦100,000 - ₦150,000", ps: "₦۱۰۰،۰۰۰ - ₦۱۵۰،۰۰۰", fa: "₦۱۰۰،۰۰۰ - ₦۱۵۰،۰۰۰" },
    location: { en: "Seattle, WA", ps: "سیاتل، WA", fa: "سیاتل، WA" },
  },
  {
    career: { en: "Human Resources Specialist", ps: "د بشري منابع متخصص", fa: "متخصص منابع انسانی" },
    salary: { en: "₦50,000 - ₦70,000", ps: "₦۵۰،۰۰۰ - ₦۷۰،۰۰۰", fa: "₦۵۰،۰۰۰ - ₦۷۰،۰۰۰" },
    location: { en: "Dallas, TX", ps: "ډالاس، TX", fa: "دالاس، TX" },
  },
  {
    career: { en: "Mechanical Engineer", ps: "میکانیکي انجنیر", fa: "مهندس مکانیک" },
    salary: { en: "₦80,000 - ₦110,000", ps: "₦۸۰،۰۰۰ - ₦۱۱۰،۰۰۰", fa: "₦۸۰،۰۰۰ - ₦۱۱۰،۰۰۰" },
    location: { en: "Houston, TX", ps: "هيوستن، TX", fa: "هوستون، TX" },
  }
];

export default () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';


  return (
    < >
      <p className='text-center pt-8 bg-gray-200 mx-auto text-lg text-[#002244]'>
        {t('jobRecommendation')}
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        className="w-full bg-gray-200 mx-auto flex items-center justify-center p-16 pt-8"
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {jobs.map((job, index) => (
          <SwiperSlide key={index}>
            <div dir={direction} className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-2">{job.career[currentLang]}</h3>
              <p className="text-gray-600 mb-2">{job.salary[currentLang]}</p>
              <p className="text-gray-600">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                {job.location[currentLang]}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};