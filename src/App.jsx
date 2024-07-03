import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob';
import JobDetails from './pages/JobDetails';
import CvBuilder from './pages/CvBuilder';
import JobAlerts from './pages/JobAlerts';
import Courses from './pages/Courses';
import Company from './pages/Company';
import CareerAdvice from './pages/CareerAdvice';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/applyjob" element={<ApplyJob />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/cvbuilder" element={<CvBuilder />} />
        <Route path="/jobalerts" element={<JobAlerts />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/company" element={<Company />} />
        <Route path="/careeradvice" element={<CareerAdvice />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;