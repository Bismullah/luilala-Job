import React, { useEffect, useState } from 'react';
import ContentContainer from './ContentContainer';
import '../styles/global.css';

const coursesData = {
  animal: ['Animal Behavior', 'Veterinary Science', 'Wildlife Conservation'],
  education: ['Teaching Methods', 'Educational Psychology', 'Curriculum Development'],
  politics: ['Political Science', 'International Relations', 'Public Policy'],
  // Add more categories and courses as needed
};

const AllCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when a category is selected
  };

  const filteredCourses = () => {
    if (searchQuery) {
      return Object.keys(coursesData).reduce((acc, category) => {
        const filtered = coursesData[category].filter((course) =>
          course.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filtered.length) {
          acc[category] = filtered;
        }
        return acc;
      }, {});
    }
    return selectedCategory ? { [selectedCategory]: coursesData[selectedCategory] } : coursesData;
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(headerRef.current.getBoundingClientRect().top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-6 sticky top-0 z-10">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl font-bold text-gray-800">Courses</h1>
          <div className="relative flex items-center w-full max-w-xl mr-16">
            <input
              type="search"
              className="bg-gray-100 border-gray-300 px-12 pr-12 rounded-full py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="absolute right-4 text-gray-500">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
          <select className="bg-gray-100 rounded-full border-gray-300 px-8 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ml-4">
            <option value="">Popular course</option>
            <option value="">Release Date</option>
            <option value="">Name A-Z</option>
            <option value="">Price (high to low)</option>
            <option value="">Price (low to high)</option>
            <option value="">Rating (high to low)</option>
            <option value="">Duration (short to long)</option>
            <option value="">Rating (long to short)</option>
          </select>
        </div>
      </div>
      <ContentContainer>
        <div className="app-container p-12">
          <CategoryList categories={Object.keys(coursesData)} onSelectCategory={handleCategorySelect} />
          <CourseList courses={filteredCourses()} />
        </div>
      </ContentContainer>
      
    </div>
  );
};

const CategoryList = ({ categories, onSelectCategory }) => (
  <div className="category-list">
    <h2>Categories</h2>
    <ul>
      {categories.map((category) => (
        <li key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </li>
      ))}
    </ul>
  </div>
);

const CourseList = ({ courses }) => (
  <div className="course-list">
    {Object.keys(courses).map((category) => (
      <div key={category} className="category-section">
        <h2>{category}</h2>
        <ul>
          {courses[category].map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default AllCourses;