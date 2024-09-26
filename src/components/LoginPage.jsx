import React from 'react';
import image from "../assets/image.png";
import Loginpage from "../assets/LoginPage.png";
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';


const LoginPage = () => {
  return (
    <div>
      <Navbar navbarColor="bg-neutral-800 text-white shadow-md" />
      <div className="relative bg-gray-50 min-h-screen flex justify-center items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${Loginpage})` }}
        ></div>

        <div className="w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 py-16 lg:py-20 lg:px-8">
          {/* Left Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black-600 mb-4">
              Instant Personal Loans up to <span className="text-black-700">₹45,000</span>
            </h1>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: '👤', text: 'For Students and Salaried' },
                { emoji: '⚡', text: 'Approval in 10 mins' },
                { emoji: '📄', text: 'No collaterals & 100% digital process' },
                { emoji: '📝', text: 'Minimum documents & no paperwork' },
                { emoji: '🏦', text: 'Instant cash in your bank account' },
                { emoji: '🔄', text: 'Flexible repayment options' }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white shadow-lg rounded-lg flex items-center space-x-4">
                  <div className="bg-yellow-200 p-2 rounded-full">
                    <span role="img" aria-label="icon">{item.emoji}</span>
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (Login Form) */}
          <div className="bg-white p-8 rounded-lg shadow-lg lg:w-full">
            <div className="flex justify-center mb-4">
              
              <div className="flex-shrink-0 font-serif text-green-500 text-center text-lg font-bold py-3 px-3">
                BuddyLoan
              </div>
            </div>

            <h2 className="text-center text-xl lg:text-2xl font-bold mb-6">
              Approval in <span className="text-yellow-500">10 mins</span>
            </h2>

            <div className="flex items-center border border-gray-300 rounded-lg p-4">
              <span className="text-gray-600">+91</span>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-full pl-4 outline-none"
              />
            </div>

            <div className="flex items-center mt-4 space-x-2">
              <input type="checkbox" id="terms" className="h-4 w-4" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-green-500 underline">Privacy Policy</a> and{' '}
                <a href="#" className="text-green-500 underline">T&C</a>, and to receive communication via WhatsApp.
              </label>
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-light hover:font-semibold w-full md:w-64 py-3 mt-4 rounded-lg">
                Send OTP
              </button>
            </div>

            <Link to="/application" className="flex items-center justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-light hover:font-bold w-full py-3 mt-8 rounded-lg">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer footerColor="bg-neutral-800 text-green-500" />
    </div>
  );
};

export default LoginPage;
