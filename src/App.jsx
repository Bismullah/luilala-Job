import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import SearchJob from './pages/SearchJob';
import JobDetails from './pages/JobDetails';
import CvBuilder from './pages/CvBuilder';
import JobAlerts from './pages/JobAlerts';
import Courses from './pages/Courses';
import Company from './pages/Company';
import CareerAdvice from './pages/CareerAdvice';
import NoPage from './pages/NoPage';
import Footer from './components/Footer';
import CVEditor from './components/CVEditor';
import CoursesHome from './components/CoursesHome';
import OnlineCourse from './components/OnlineCourse';
import Stafftraining from './components/Stafftraining';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/searchjob" element={<SearchJob />} />
        <Route path="/courseshome" element={<CoursesHome />} />
        <Route path="/onlinecourses" element={<OnlineCourse />} />
        <Route path="/stafftraining" element={<Stafftraining />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/cvbuilder" element={<CvBuilder />} />
        <Route path="/jobalerts" element={<JobAlerts />} />
        <Route path="/courses" element={<CoursesHome />} />
        <Route path="/company" element={<CVEditor />} />
        <Route path="/careeradvice" element={<CareerAdvice />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;