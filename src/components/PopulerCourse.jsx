import { FaStar } from 'react-icons/fa';
import BlackCircle from '../assets/subscribe.png'

export default function PopulerCourse() {

  return (
    <div className="bg-[#1a3857] py-4 w-[70vw] mx-auto  my-6 sm:py-12  rounded-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://course.cv-library.co.uk/assets/images/course-trophy.png"
              alt="course trophy"
              className="w-42 mx-auto mb-42 mb-8"
            />
            <p className="  bg-[#002244] py-2 px-6  rounded-full text-white text-lg">Premium Membership</p>
          </div>

          <div className="col-span-2 flex flex-col gap-y-6">
            <div className="flex justify-between space-x-2 items-center">
              <h3 className="text-2xl font-bold text-white">
                Get Access To Our Entire Course Library
              </h3>
             
              <div
      className="flex flex-col w-[160px] h-[160px]  items-center justify-center rounded-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BlackCircle})`,backggroundSize:"cover",backgroundPosition:"center" }}
    >
      <span className="text-white text-shadow">Only</span>
      <span className="text-6xl  font-bold text-white text-shadow">
        <sup className="font-medium">£</sup>99
      </span>
      <span className="text-white text-shadow">Per Year</span>
    </div>



            </div>

            <div className="flex justify-between  mt-[-50px] items-end">
              <ul className="space-y-4 text-white">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Study 700+ courses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>
                    Unlimited access to study{' '}
                    <small className="text-white">(max 50 active courses at any one time)</small>
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Career matching service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Free XO Student Discounts membership</span>
                </li>
              </ul>
              <a
                href="https://course.cv-library.co.uk/subscription"
                className="inline-flex items-center px-8 left-8 py-4 relative top-12 bg-[#002244] hover:bg-[#003344] text-white font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 "
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}