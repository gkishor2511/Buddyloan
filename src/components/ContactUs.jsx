import React, { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import contactus from "../assets/contactUs1.jpg"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false })); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '',
    };

    if (newErrors.name || newErrors.email) {
      setErrors(newErrors);
      return;
    }

    alert('Your message has been sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <Navbar navbarColor="bg-blue-300 text-blue-500 " />
        
        <div className=" grid grid-cols-1 md:grid-cols-2  rounded-lg  w-full p-8 px-16 mt-20 gap-8">
          
          
          
          {/* Form Section */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
              Contact Us
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Feel free to contact our customer care team via the form below or send us an email at{' '}
              <a
                href="mailto:support@company.com"
                className="text-black-500 hover:underline"
              >
                support@company.com
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">Name is required.</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">Email is required.</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Or send us an email at{' '}
                <a
                  href="mailto:support@company.com"
                  className="text-blue-500 hover:underline"
                >
                  support@company.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer footerColor="bg-green-400 text-blue-700" />
    </>
  );
};

export default ContactUs;
