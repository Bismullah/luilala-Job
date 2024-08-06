import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa';

import TransitionWrapper from './TransitionWrapper';

const NavigationMobile = ({ setMenuOpen }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const navItems = [
    { path: '/searchjob', label: t('Search Job') },
    { path: '/cvbuilder', label: t('CV Builder') },
    { path: '/jobalerts', label: t('Job Alerts') },
    { path: '/courses', label: t('Courses') },
    { path: '/company', label: t('Company') },
    { path: '/careeradvice', label: t('Career Advice') },
  ];

  const handleLinkClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <TransitionWrapper classNames="nav-fade" timeout={300}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 100 }}
      >
        <div className="relative text-white text-2xl font-bold bottom-32 left-96">
          <button
            onClick={() => handleLanguageChange(currentLanguage === 'en' ? 'fr' : 'en')}
            className="text-[#333333] hover:text-[#000000] transition-colors duration-200"
          >
            {currentLanguage === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
        <div className="flex flex-col p-8 bg-[#eee] gap-y-10 text-xl items-center py-10 rounded-b-md">
          <button onClick={() => setMenuOpen(false)}>
            <CloseButton onClose={() => {}} language={currentLanguage} />
          </button>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full"
            >
              <Link
                to={item.path}
                className={`block px-6 py-3 rounded-md hover:bg-[#e0e0e0] transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-[#e0e0e0] text-[#000a14] font-bold'
                    : 'text-[#333333] hover:text-[#000000]'
                }`}
                onClick={() => handleLinkClick(item.path)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </TransitionWrapper>
  );
};

const CloseButton = ({ onClose, language }) => {
  return (
    <button onClick={onClose}>
      {language === 'en' ? <FaTimes /> : <FaTimes style={{ transform: 'rotateY(180deg)' }} />}
    </button>
  );
};

const NavigationDesktop = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const navItems = [
    { path: '/searchjob', label: t('Search Job') },
    { path: '/cvbuilder', label: t('CV Builder') },
    { path: '/jobalerts', label: t('Job Alerts') },
    { path: '/courses', label: t('Courses') },
    { path: '/company', label: t('Company') },
    { path: '/careeradvice', label: t('Career Advice') },
  ];

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <TransitionWrapper classNames="nav-fade" timeout={300}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 100 }}
      >
        <div className="relative text-white text-2xl font-bold bottom-32 left-96">
          <button
            onClick={() => handleLanguageChange(currentLanguage === 'en' ? 'fr' : 'en')}
            className="text-[#333333] hover:text-[#000000] transition-colors duration-200"
          >
            {currentLanguage === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to={item.path}
                  className={`text-[#FFFFFF] hover:text-[#4682B4] transition-colors duration-100 ${
                    location.pathname === item.path ? 'active-nav-link' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </motion.nav>
    </TransitionWrapper>
  );
};

export default function Navigation({ setMenuOpen }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {screenWidth >= 1000 ? (
        <NavigationDesktop />
      ) : screenWidth >= 300 ? (
        <NavigationMobile setMenuOpen={setMenuOpen} />
      ) : null}
    </div>
  );
}