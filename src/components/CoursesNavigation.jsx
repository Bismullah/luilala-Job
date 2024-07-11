import React from 'react';
import Navimg from '../assets/coursesNav.png';
import { Link } from 'react-router-dom';

export default function CoursesNavigation() {
  return (
    <div className="bg-white shadow-md  p-4 flex justify-between items-center">
      <div className="logo">
        <img src={Navimg} alt="" className="max-h-12" />
      </div>
      <div className="links flex space-x-6">
        <Link to="/courseshome" className="text-gray-700 hover:text-gray-900">
          Courses Home
        </Link>
        <Link to="/onlinecourses" className="text-gray-700 hover:text-gray-900">
          Online Courses
        </Link>
        <Link to="/stafftraining" className="text-gray-700 hover:text-gray-900">
          Staff Training
        </Link>
      </div>
      <div className="buttons flex space-x-4">
        <button className="bg-[#002244] text-white py-2 px-4 rounded-md hover:bg-[#001122]">
          Courses Sign in
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}