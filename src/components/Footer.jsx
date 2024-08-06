import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t,i18n } = useTranslation();
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';

  return (
    <footer dir={direction} className="bg-[#002244] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-4">{t('Jobseekers')}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Register')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('CV Advice')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Job Alerts')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Career Advice')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Salary Guide')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Popular')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Search Jobs')}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{t('Employers')}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Agencies')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Popular jobs')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Salary Tax Calculator')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Recruiters')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('CV Database Access')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Advertise Jobs')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Search CVs')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Test CV Search')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Recruiter blog')}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{t('About')}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('About us')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Contact us')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Work for us')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Help')}</a></li>
            <li><a href="#" className="hover:text-[#a5d1ff]">{t('Job Search App')}</a></li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-[#a5d1ff] hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#a5d1ff] hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#a5d1ff] hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/" className="text-white">
            <img className='w-[150px] h-[150px]' src={logo} alt={t('Company Logo')} />
          </Link>
          <p className="text-white">{t('Company Name')}</p>
          <p className="text-white">{t('Online jobs')}</p>
        </div>
      </div>
      <div className="container mx-auto border-t-2 border-gray-500 py-8 px-4 mt-8 text-center text-[#a5d1ff]">
        &copy; {new Date().getFullYear()} {t('Company Name')}. {t('All rights reserved.')}
      </div>
    </footer>
  );
};

export default Footer;