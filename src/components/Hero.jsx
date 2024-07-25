import { useState } from 'react';
import newStar from '../assets/newStar.png';
import CVLibraryInfo from './CVLibraryInfo';


function Hero() {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <div className="bg-gradient-to-r from-[#002244] to-[#4682B4] h-auto px-6 py-8 pb-16">
      <div className="container mt-8 mx-auto px-8">
        <div className="text-center flex items-center">
          <h1 className="text-4xl  font-bold text-white">Find Your Dream Job</h1>
          <img
            className="mx-8 mt-4 w-16 h-16"
            loading="lazy"
            alt="Star icon"
            src={newStar}
          />
        </div>
        <div className="mt-8 bg-[#002244] rounded-lg shadow-md p-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <div className="flex-grow flex items-center border-r border-gray-300 pr-4">
            <input
              className="ml-2 w-full py-4 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-300"
              type="text"
              placeholder="Job title or keyword"
            />
          </div>
          <div className="flex-grow flex items-center pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <input
              className="ml-2 w-full py-4 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-300"
              type="text"
              placeholder="Add Country or City"
            />
          </div>
          <button className="ml-4 bg-[#194162] text-white px-8 py-4 rounded-full hover:bg-[#20517b] transition-colors duration-300">
            Search
          </button>
          <button
            className="ml-4 bg-[#194162] text-white px-8 py-4 rounded-full hover:bg-[#20517b] transition-colors duration-300"
            onClick={toggleMoreOptions}
          >
            {showMoreOptions ? 'Less Options' : 'More Options'}
          </button>
        </div>
        {showMoreOptions && (
          <div className="mt-4 flex items-center gap-6 bg-[#002244] rounded-lg shadow-md p-4">
           <div className="fitems-center">
  <input
    className="ml-2 w-full py-3 px-4 border border-slate-200 rounded-md focus:outline-none bg-[#002244] text-white placeholder-gray-300 transition-colors duration-300 hover:border-gray-400"
    type="text"
    placeholder="Minimum Salary"
  />
</div>
<div className="flex items-center">
  <input
    className="ml-2 w-full py-3 px-4 border border-slate-200 rounded-md focus:outline-none bg-[#002244] text-white placeholder-gray-300 transition-colors duration-300 hover:border-gray-400"
    type="text"
    placeholder="Maximum Salary"
  />
</div>
            <div className="flex items-center mt-2">
              <select
                className="ml-2 w-full py-2 border-slate-200  focus:outline-none bg-[#002244] text-white placeholder-gray-300"
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="flex items-center mt-2">
              <select
                className="ml-2 w-full py-2 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-300"
              >
                <option value="">Select Salary Type</option>
                <option value="hourly">Hourly</option>
                <option value="annual">Annual</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <CVLibraryInfo />
    </div>
  );
}

export default Hero;