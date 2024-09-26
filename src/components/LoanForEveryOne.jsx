import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons';
import student from "../assets/Student.avif";

import selfemp from "../assets/selfemp.avif";

const LoanForEveryone = () => {
  const [activeTab, setActiveTab] = useState('College Students');

  const content = {
    'College Students': {
      title: 'Loan In A Tap For College Students',
      description: `Empowering young college students with our instant loan app in India, 
        providing affordable loans for their dreams. We understand the importance of 
        money in shaping your future. Our loan for students program is designed to provide 
        aspiring scholars with the financial support they need to pursue their dreams.`,
      imgSrc: student,
    },
    'Working Professionals': {
      title: 'Loan In A Tap For Working Professionals',
      description: `Our loans for working professionals are tailored to help you grow in your 
        career by providing affordable financial solutions. From personal expenses to professional 
        growth, we’ve got you covered.`,
      
    },
    'Self Employed': {
      title: 'Loan In A Tap For Self Employed',
      description: `Empowering self-employed individuals with the financial support they need 
        to grow their business and manage day-to-day expenses. Our loans are designed to provide 
        flexibility and ease.`,
      imgSrc: selfemp,
    },
  };

  return (
    <section id="categories">
    <div className='container mx-auto px-4 py-8 bg-green-300 mt-4'>
      <h1 className='text-4xl text-black-500 font-bold text-center font-serif py-8'>Loan for Everyone</h1>

      {/* Tabs Section */}

      <div className='flex justify-center flex-wrap gap-4 py-8'>
        
        <button
          className={`w-60 px-6 py-3 rounded-lg flex items-center justify-center ${
            activeTab === 'College Students' ? 'bg-green-500 text-white font-semibold' : 'bg-gray-200 text-green-500'
          }`}
          onClick={() => setActiveTab('College Students')}
        >
          <FontAwesomeIcon icon={faGraduationCap} className='mr-2' />
          College Students
        </button>
        
        <section id="working-professionals">
        <button
          className={`w-60 px-6 py-3 rounded-lg flex items-center justify-center ${
            activeTab === 'Working Professionals' ? 'bg-green-500 text-white font-semibold' : 'bg-gray-200 text-green-500'
          }`}
          onClick={() => setActiveTab('Working Professionals')}
        >
          <FontAwesomeIcon icon={faBriefcase} className='mr-2' />
          Working Professionals
        </button>
        </section>
        <section id="self-employed">
        <button
          className={`w-60 px-6 py-3 rounded-lg flex items-center justify-center ${
            activeTab === 'Self Employed' ? 'bg-green-500 text-white font-semibold' : 'bg-gray-200 text-green-500'
          }`}
          onClick={() => setActiveTab('Self Employed')}
        >
          <FontAwesomeIcon icon={faBuilding} className='mr-2' />
          Self Employed
        </button>
        </section>
      </div>
     

      {/* Content Section */}
      <div className='bg-white  gap-6 px-4 lg:px-16 py-8 rounded-xl mx-auto max-w-screen-lg'>
        <div className='flex flex-col items-start justify-center p-6 rounded-lg'>
          <h2 className='text-black-500 text-3xl font-bold mb-4'>{content[activeTab].title}</h2>
          <p className='text-black-600'>{content[activeTab].description}</p>
        </div>
        <div className='flex justify-center'>
          
        </div>
      </div>
    </div>
    </section>
  );
};

export default LoanForEveryone;
