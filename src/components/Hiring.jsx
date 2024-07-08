import React from 'react';

import logo5 from '../assets/logo5.png';
import Carousel from '../pages/Carousel';


const Hiring = () => {
  return (
    <div className="bg-white shadow-md p-12 mt-12 flex items-center justify-center gap-x-12 rounded-lg overflow-hidden">
  <div className="md:flex md:w-1/3 flex-col  items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <div className="md:w-1/4 image_part">
    <img src={logo5} alt="" className="w-full h-24 object-cover rounded-t-lg" />
  </div>
  <div className="md:w-full flex flex-col items-center text-center text_part p-6 bg-white rounded-b-lg">
    <h1 className="text-2xl text-center font-bold mb-4">Hiring Company</h1>
    <p className="text-gray-700 mb-6">
      We are a leading recruitment agency in the UK and Ireland.
    </p>
    <button className="bg-dark-blue text-white px-4 py-2 rounded-md hover:bg-light-blue transition-colors duration-300">
      Apply job
    </button>
  </div>
</div>
      <div className="SLiderPart">
        <div className='text-center text-3xl'> Companys that Hiring </div>
        <Carousel />
        </div>
    
      
    </div>
  );
};

export default Hiring;