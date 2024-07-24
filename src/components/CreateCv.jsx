import React from 'react';
import cvBuilder1 from '../assets/cvbuilder2.jpg';
import { useNavigate } from 'react-router-dom';

export default function CreateCv() {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/cveditor')
  }
  return (
    
    <>
    <div className="bg-white w-full px-6 py-2 rounded-md mb-4">
          <p className="text-slate-500 text-lg">Search 156,089 jobs from 10,070 companies</p>
        </div>
    <div className="bg-gradient-to-r from-[#002244] to-[#4682B4] py-12">
      <div className="container mx-auto">
        
        <div className="flex p-12 bg-gradient-to-r from-[#002244] to-[#4682B4] py-8 pb-16 items-center justify-between rounded-md">
          {/* text part */}
          <div className="text-contents w-1/2 pr-8">
            <h1 className=" font-bold text-6xl text-white mb-4">Free CV Builder</h1>
            <p className="text-gray-300 text-2xl  mb-8">Need a CV? Create your own on the go and start applying to jobs in minutes.</p>
            <button onClick={handleClick}  className="bg-light-blue hover:bg-blue-400 text-white  font-semibold py-3 px-6 rounded-md transition-colors duration-300">
              Build my CV
            </button>
          </div>
          {/* image part */}
          <div className="image_part w-1/2">
            <img src={cvBuilder1} alt="" className="w-full rounded-md shadow-lg" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}