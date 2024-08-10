import React from 'react';
import CreateCv from '../components/CreateCv';
import CvWork from '../components/CvWork';
import JobSeeker from '../components/JobSeeker';
import SeekingAdvice from '../components/SeekingAdvice';
import QAF from './QAF';
import { useTranslation } from 'react-i18next';
export default function CvBuilder() {
  const { t, i18n } = useTranslation();
  const direction = i18n.language === 'ps' || i18n.language === 'fa' ? 'rtl' : 'ltr';
  return (
    
    <div>
      <CreateCv />
      <CvWork />
      <JobSeeker />
      <SeekingAdvice />
      <div dir={direction} class="bg-light-blue py-8 px-4 sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto text-center">
    <h2 class="text-3xl  font-extrabold text-gray-100 sm:text-4xl">
     { t("Build your CV and start applying for 158,016 jobs today!")}
    </h2>
    <button class="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-dark-blue hover:bg-[#334e69] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#001830]">
     {t(" Build my CV")}
    </button>
  </div>
</div>

{/* quentification */}
<QAF />
<div dir={direction} class="bg-[#1a3857] py-4 px-4 sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto flex items-center gap-5 text-center">
    <h2 class="text-xl font-extrabold text-gray-100 sm:text-2xl">
   {t("Create Your free cv")}
    </h2> 
    <button class="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-dark-blue hover:bg-[#334e69] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#001830]">
    {t(" Build my CV")}
    </button>
  </div>
</div>
    </div>
  );
}