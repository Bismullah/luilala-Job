import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function CareerAdviceLinks() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex justify-center border-y-2 border-gray-200 py-7 space-x-4 mb-8">
        <Link
        to="/careeradvice"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/careeradvice') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        Home
      </Link>
      <Link
        to="/carrerAdvice/Apprenthiceship"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/carrerAdvice/Apprenthiceship') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        Apprenthiceship
      </Link>
      <Link
        to="/carrerAdvice/carrerDevelopment"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/carrerAdvice/carrerDevelopment') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        Carrer Development
      </Link>
      <Link
        to="/carrerAdvice/graduates"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/carrerAdvice/graduates') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        Graduates
      </Link>
      <Link
        to="/carrerAdvice/coverLater"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/carrerAdvice/coverLater') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        Cover Later
      </Link>
      <Link
        to="/carrerAdvice/GettingStarted"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/carrerAdvice/GettingStarted') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        Getting Started
      </Link>
      <Link
        to="/carrerAdvice/worklife"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/carrerAdvice/worklife') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        Work life
      </Link>
      <Link
        to="/carrerAdvice/cvs"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/carrerAdvice/cvs') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        CVs
      </Link>
      <Link
        to="/carrerAdvice/Interviews"
        className={`text-gray-500 hover:bg-[#002244] hover:text-white font-medium px-2 py-2 rounded transition-colors duration-300 ${
          isActive('/carrerAdvice/Interviews') ? 'text-white bg-[#002244] font-semibold' : ''
        }`}
      >
        Interviews
      </Link>
  
    </div>
  );
}

export default CareerAdviceLinks;