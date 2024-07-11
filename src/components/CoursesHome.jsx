import React, { useEffect, useState } from 'react';
import CoursesNavigation from './CoursesNavigation';
import BackgroundImage from '../assets/bgcourses4.jpg';
import Rating from './Rating';
import OnlineCourses from './OnlineCourses';
import TrainNewSkill from './TrainNewSkill';
import PopulerCourse from './PopulerCourse';
import Logo1 from '../assets/firstLogo.png';
import Logo2 from '../assets/secondLogo.png';
import Logo3 from '../assets/thirdLogo.png';
import Logo4 from '../assets/fourthLof.png';
import Logo5 from '../assets/fifthLogo.png';
import BackgroundImage2 from '../assets/coursebg2.jpg';
import { FaBookOpen, FaClipboardList, FaUserGraduate } from 'react-icons/fa';



export default function CoursesHome() {
  const [studentCount, setStudentCount] = useState(0);
  const [bookCount, setBookCount] = useState(0);
  const [lessons, setLessons] = useState(0);

  
  useEffect(() => {
    const lessonsIntervalId = setInterval(() => {
      setLessons((prevCount) => {
        if (prevCount >= 550) {
          clearInterval(lessonsIntervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 4000 / 700);

    const bookCountIntervalId = setInterval(() => {
      setBookCount((prevCount) => {
        if (prevCount >= 850) {
          clearInterval(bookCountIntervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 4000 / 700);

    const studentCountIntervalId = setInterval(() => {
      setStudentCount((prevCount) => {
        if (prevCount >= 1250) {
          clearInterval(studentCountIntervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 4000 / 700);

    return () => {
      clearInterval(lessonsIntervalId);
      clearInterval(bookCountIntervalId);
      clearInterval(studentCountIntervalId);
    };
  }, []);

  return (
    <div className="">
      <CoursesNavigation />
      <div
        className="container_Home_courses h-[40rem] bg-cover bg-center "
         
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-6xl font-bold mb-4  ">Change Your Life With A New Skill</h1>
          <h3 className="text-4xl mx-auto w-[60vw] mb-8">
            Join Over 1,000,000 students and study one of our 760+ career enhancing,
            confidence boosting courses
          </h3>
          <div className="flex items-center rounded-full bg-white  px-4 py-2  mx-auto w-[70vw]  mb-8">
            <input
              type="text"
              placeholder="Search for a course"
              className="flex-1 text-slate-950 w-80 border-none focus:outline-none"
            />
          
          
            <button className=" text-[#002244]  rounded-md px-4 py-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
          </div>
          <div className="space-x-4">
            <button className="bg-[#001b36] text-white py-4 rounded-full  px-4  hover:bg-[#002244]">
              See All Courses
            </button>
            <button className="bg-[#001b36] text-white py-4 rounded-full  px-4  hover:bg-[#002244]">
              Unlimited Learning
            </button>
            <button className="bg-[#001b36] text-white py-4 rounded-full  px-4  hover:bg-[#002244]">
              Redeem a Voucher
            </button>
          </div>
        </div>
      </div>
<Rating />
{/* ending part of bg color and tailwainds */}
<OnlineCourses />
<TrainNewSkill />
{/* anouncement */}
<div className=' my-16 w-[80vw] mx-auto text-4xl p-6 text-white rounded-full text-center bg-[#002244]'>
All New Skills Academy Courses Come With Lifetime Access!
</div>
<PopulerCourse />
{/* start of container */}
<div class="bg-[#fff] py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl  text-center  font-bold text-gray-900 mb-12 ">Learn with confidence</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div>
        <img src={Logo1} alt="" class="h-32 w-auto" />
      </div>
      <div>
        <img src={Logo2} alt="" class="h-32 w-auto" />
      </div>
      <div>
        <img src={Logo3} alt="" class="h-32 w-auto" />
      </div>
      <div>
        <img src={Logo4} alt="" class="h-32 w-auto" />
      </div>
      <div>
        <img src={Logo5} alt="" class="h-32 w-auto" />
      </div>
    </div>
  </div>
</div>

{/* ending part of container */}
<div className="bg-gray-100 py-8">
  <div className="relative h-[40rem] max-w-7xl mx-auto">
    <div className="absolute inset-0 bg-gradient-to-b from-darkblue to-[#0b2e4f] opacity-70"></div>
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImage2})` }}></div>
    <div className="relative z-10 top-[35%] left-[10%] grid grid-cols-2 sm:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <p className="text-gray-500">
          <FaBookOpen className="h-8 w-8 mx-auto" />
        </p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{studentCount}</p>
        <p className="text-gray-500">Total courses</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <p className="text-gray-500">
          <FaUserGraduate className="h-8 w-8 mx-auto" />
        </p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{lessons}</p>
        <p className="text-gray-500">Total Students</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <p className="text-gray-500">
          <FaClipboardList className="h-8 w-8 mx-auto" />
        </p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{bookCount}</p>
        <p className="text-gray-500">Total Lessons</p>
      </div>
   
    </div>
  </div>
</div>
    </div>
  );
}