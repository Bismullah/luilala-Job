import CvImage from '../assets/cvVedio.png';

export default function() {
  return (
    <div>
      <div className="cvWork px-8 bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className=" grid grid-cols-2 gap-y-4 mr-8 text-center md:text-left">
            <div className="mb-8">
              <span className="inline-block bg-light-blue text-white rounded-full p-2 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              <h2 className="text-3xl font-bold mb-2">Build your CV</h2>
              <p className="text-gray-600">on a mobile, tablet or desktop device</p>
            </div>
            <div className="mb-8">
              <span className="inline-block bg-light-blue text-white rounded-full p-2 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </span>
              <h2 className="text-3xl font-bold mb-2">Customise your CV</h2>
              <p className="text-gray-600">with pre-written summaries and responsibilities</p>
            </div>
            <div className="mb-8">
              <span className="inline-block bg-light-blue text-white rounded-full p-2 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <h2 className="text-3xl font-bold mb-2">Preview your CV</h2>
              <p className="text-gray-600">Preview your CV</p>
            </div>
            <div className="mb-8">
              <span className="inline-block bg-light-blue text-white rounded-full p-2 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>
              <h2 className="text-3xl font-bold mb-2">Download your CV</h2>
              <p className="text-gray-600">and apply to jobs anywhere</p>
            </div>
          </div>
          <div className="image">
            <img src={CvImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}