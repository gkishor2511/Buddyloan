import React from 'react';
import { FaUserAlt, FaFileAlt, FaShieldAlt, FaTrophy, FaStar } from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <section id="achievements">
    <section className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10">We’re better in every sense!</h2>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white shadow-md rounded-md">
            <FaUserAlt className="mx-auto text-3xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Fully personalized</h3>
            <p>Products for your needs</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <FaFileAlt className="mx-auto text-3xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Zero paperwork</h3>
            <p>Makes it easy & faster</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <FaShieldAlt className="mx-auto text-3xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">100% transparent</h3>
            <p>100% peace of mind</p>
          </div>
        </div>

        {/* User stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-purple-100 rounded-md flex items-center justify-center">
            <FaTrophy className="text-4xl text-purple-600 mr-4" />
            <div>
              <h3 className="text-5xl font-bold">60</h3>
              <p>million users</p>
            </div>
          </div>
          <div className="p-6 bg-purple-100 rounded-md flex items-center justify-center">
            <FaStar className="text-4xl text-purple-600 mr-4" />
            <div>
              <h3 className="text-5xl font-bold">4.8</h3>
              <p>on Play Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default BenefitsSection;
