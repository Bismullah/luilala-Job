import Header from "../components/Header";
import newStar from '../assets/newStar.png';

function Home() {
  return (
    
     <div className="bg-[#13314a] py-8">
     <div className="container mx-auto px-4">
       <div className="text-center flex  items-center ">
         <h1 className="text-4xl font-bold text-white">Find Your Dream Job</h1>
         <img
           className="mx-8 mt-4 w-16 h-16"
           loading="lazy"
           alt="Star icon"
           src={newStar}
         />
       </div>
       <div className="mt-8 bg-white rounded-lg shadow-md p-4 flex items-center">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

         <div className="flex-grow flex items-center border-r border-gray-300 pr-4">
          
           <input
             className="ml-2 w-full border-none focus:outline-none"
             type="text"
             placeholder="Job title or keyword"
           />
         </div>
         <div className="flex-grow flex items-center pl-4">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>


           <input
             className="ml-2 w-full border-none focus:outline-none"
             type="text"
             placeholder="Add Country or City"
           />
         </div>
         <button className="ml-4 bg-[#194162] text-white px-8 py-4 rounded-full hover:bg-[#20517b] transition-colors duration-300">
           Search
         </button>
       </div>
     </div>
   </div>

  );
}

export default Home;