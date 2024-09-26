import React from 'react';

const testimonials = [
  {
    name: "Shantanu Gupta",
    date: "Feb 26, 2023",
    
    rating: 5,
    text: "Thank you so much for the service! Your app claim fast loan approval. Got the amount in minutes.",
  },
  {
    name: "Vikram Sher",
    date: "Feb 26, 2023",
   
    rating: 5,
    text: "Had a great experience regarding credit. They just provide you instant credit in times of need. Thanks a lot 😊 for helping me.",
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-4">
        
        <div>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.834-8.718-7.418-5.389h9.168z"/>
            </svg>
          ))}
        </div>
        <p className="mt-2 text-gray-600">{testimonial.text}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">1M Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
