import React from 'react';

const OurReviews = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center p-6 lg:p-20 bg-white">
      {/* Left Side: Rating and Review Text */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          The most loved financial app
        </h2>
        <div className="mt-4">
          <div className="flex items-center">
            
            <div>
              <p className="text-4xl font-semibold text-gray-900">4.8</p>
              <p className="text-gray-500">2M+ reviews</p>
            </div>
          </div>
          <div className="mt-4">
            {/* Rating bars */}
            <div className="flex items-center">
              <span className="text-sm text-gray-600">5</span>
              <div className="w-40 h-3 ml-2 bg-green-600 rounded-lg"></div>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-sm text-gray-600">4</span>
              <div className="w-20 h-3 ml-2 bg-green-600 rounded-lg"></div>
            </div>
            {/* Add remaining bars as needed */}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default OurReviews;
