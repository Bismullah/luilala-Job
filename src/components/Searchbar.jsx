import { useState } from 'react';
import newStar from '../assets/newStar.png';
import CVLibraryInfo from './CVLibraryInfo';

function Searchbar() {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };
    // Define the industry types
    const [industryTypes, setIndustryTypes] = useState([
        { name: 'Technology', posted_days: 10 },
        { name: 'Finance', posted_days: 20 },
        { name: 'Healthcare', posted_days: 5 },
        { name: 'Retail', posted_days: 15 },
        { name: 'Manufacturing', posted_days: 30 },
        { name: 'Education', posted_days: 8 },
        { name: 'Logistics', posted_days: 12 },
        { name: 'Energy', posted_days: 18 },
        { name: 'Agriculture', posted_days: 25 },
      ]);
    
      // Sort the industry types by posted days
      industryTypes.sort((a, b) => b.posted_days - a.posted_days);
    

  return (
    <div className="p-12 bg-gradient-to-r from-[#002244] to-[#4682B4] py-8 pb-16">
      <div className="container mx-auto px-4">
      

        <div className="mt-8 bg-[#002244]  shadow-md p-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <div className="flex-grow flex items-center border-r border-gray-400 pr-4">
            <input
              className="ml-2 w-full py-4 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-400"
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
              className="w-6 h-6 text-white mr-4"
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
              className="ml-2 w-full py-4 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-400"
              type="text"
              placeholder="Add Country or City"
            />
          </div>
        </div>

        {/* added options */}
       
          <div className="flex items-center gap-6 bg-[#002244]  shadow-md p-4 pt-8 border-t-2 border-slate-700 ">
            <div className="flex items-center">
              <input
                className="ml-2 w-full py-3 px-4 border border-slate-200 rounded-md focus:outline-none bg-[#002244] text-white placeholder-gray-400 transition-colors duration-300 hover:border-gray-400"
                type="text"
                placeholder="Minimum Salary"
              />
            </div>
            <div className="flex items-center">
              <input
                className="ml-2 w-full py-3 px-4 border border-slate-200 rounded-md focus:outline-none bg-[#002244] text-white placeholder-gray-400 transition-colors duration-300 hover:border-gray-400"
                type="text"
                placeholder="Maximum Salary"
              />
            </div>
            <div className="flex items-center">
              <select
                className="ml-2 w-full py-2 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-400"
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="flex items-center">
              <select
                className="ml-2 w-full py-2 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-400"
              >
                <option value="">Select Salary Type</option>
                <option value="hourly">Hourly</option>
                <option value="annual">Annual</option>
              </select>
            </div>
           {showMoreOptions ? ' ': <button className="ml-4 bg-[#194162] text-white px-8 py-4 rounded-full hover:bg-[#20517b] transition-colors duration-300">
              Search
            </button>

           }
          </div>
          {showMoreOptions && (
  <div className="flex items-center gap-6 bg-[#002244] shadow-md p-4 pt-8 border-t-2 border-slate-700">
    <div className="container flex gap-x-6 items-center justify-start mx-auto px-4">
      <div className="flex items-center">
        <select className="ml-2 w-full py-2 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-400">
          <option value="">Posted in the</option>
          <option value="last-10-days">Last 10 days</option>
          <option value="last-12-days">Last 12 days</option>
          <option value="last-20-days">Last 20 days</option>
          <option value="last-30-days">Last 30 days</option>
        </select>
      </div>
      <div className="flex items-center">
        <select className="ml-2 w-full py-2  border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-400">
          <option value="">Search by industry</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="finance">Finance</option>
          <option value="retail">Retail</option>
        </select>
      </div>
      <div className="flex items-center">
        <select className="ml-2 w-full py-2 border-slate-200 focus:outline-none bg-[#002244] text-white placeholder-gray-400">
          <option value="">Sort by</option>
          <option value="relevance">Relevance</option>
          <option value="date-posted">Date Posted</option>
          <option value="salary">Salary</option>
          <option value="company-name">Company Name</option>
        </select>
      </div>
       <button className="ml-4 bg-[#194162] text-white px-8 py-4 rounded-full hover:bg-[#20517b] transition-colors duration-300">
              Search
            </button>

           
    </div>
  </div>
)}
        <button
          className="ml-4 bg-[rgb(25,65,98)] text-white px-8 py-4 rounded-full hover:bg-[#20517b] transition-colors duration-300 mt-4"
          onClick={toggleMoreOptions}
        >
          {showMoreOptions ? 'Less Options' : 'More Options'}
        </button>
      </div>
    </div>
  );
}

export default Searchbar;