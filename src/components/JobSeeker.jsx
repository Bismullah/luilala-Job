import React, { useState, useEffect } from 'react';
import FirstImage from '../assets/first.jpg';
import SecondImage from '../assets/fourth.jpg';
import ThirdImage from '../assets/second.jpg';
import FourthImage from '../assets/third.jpg';


const JobSeeker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(true);

  const testimonials = [
    {
      image: FirstImage,
      text: '"I\'ve used many CV building sites, but this one is simple, clear and understandable."',
    },
    {
      image: SecondImage,
      text: '"CV Builder helps give me an idea of the professional wording that a potential employer is looking for."',
    },
    {
      image: ThirdImage,
      text: '"CV Builder is brilliant! It\'s really great to use when you are stuck on what to say or feel stressed and overwhelmed about writing a CV."',
    },
    {
      image: FourthImage,
      text: '"CV Builder is great for when you don\'t know where to start and need some help. You are guaranteed to get a professional CV without doing it from scratch."',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleClose = () => {
    setShowSlider(false);
  };

  return (
    <div className={`container ${showSlider ? '' : 'hidden'}  p-4 rounded-lg   shadow-lg`}>
      <p className='w-[50vw] mx-auto text-3xl mt-16'>Find out why job seekers love CV Builder...</p>
    <div className="card relative">
      <div className="image-container  p-12">
        <img src={testimonials[currentIndex].image} alt="" className={`rounded-t-lg  h-[50vh] w-[50vw] mx-auto `}/>
        <p className={`text-gray-800 absolute   ${testimonials[currentIndex].image===FourthImage ||testimonials[currentIndex].image===ThirdImage ?'right-6 pt-16 text-xl':'left-12 pt-12  text-3xl ' } top-6  px-64 pb-16 text-white  h-[50vh] w-[50vw] mx-auto`}>{testimonials[currentIndex].text}</p>
      </div>
      
    </div>
  </div>
  );
};

export default JobSeeker;