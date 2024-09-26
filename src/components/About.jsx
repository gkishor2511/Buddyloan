import React from 'react';
import aboutus from "../assets/AboutUs.jpg"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="About" className="px-4 lg:px-0 py-8 mt-8">
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {/* Image Section */}
        <div className="flex justify-center lg:order-2">
          <img
            src={aboutus}
            alt="About us"
            className="w-full h-auto object-cover max-w-lg rounded-lg "
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="flex flex-col items-start justify-center px-16 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-500 font-serif text-center lg:text-left">
            Buddy-Loan: Your Instant Loan App
          </h2>
          <p className="text-black-900 font-medium mb-6 text-center lg:text-left">
            Get it in simple steps with limit ranging from 1000-100000.
          </p>

          {/* Button Section */}
          <div className="flex flex-col md:flex-row items-center md:justify-start w-full space-y-4 md:space-y-0 md:space-x-4">
            
            <Link to="/login" className="w-full md:w-auto">
              <button className="bg-green-300 hover:bg-green-500 text-white hover:font-semibold px-6 py-3 rounded-md w-full md:w-auto transition duration-300 ease-in-out transform hover:scale-105 text-center">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
