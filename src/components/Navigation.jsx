import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import TransitionWrapper from './TransitionWrapper';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/applyjob', label: 'Apply Job' },
    { path: '/cvbuilder', label: 'CV Builder' },
    { path: '/jobalerts', label: 'Job Alerts' },
    { path: '/courses', label: 'Courses' },
    { path: '/company', label: 'Company' },
    { path: '/careeradvice', label: 'Career Advice' },
  ];

  return (
    <TransitionWrapper classNames="nav-fade" timeout={300}>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
   
          zIndex: 100,
        }}
      >
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={item.path}
                  className={`text-[#FFFFFF] hover:text-[#4682B4] transition-colors duration-100 ${
                    location.pathname === item.path
                      ? 'active-nav-link'
                      : ''
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
}
