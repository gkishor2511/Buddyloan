import React, { useState } from 'react';
import Navbar from './NavBar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    mobileNumber: '',
    aadhaarNumber: '',
    panCardNumber: '',
    aadhaarPhoto: null,
    panCardPhoto: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation for mobile number and Aadhaar number
    if (name === 'mobileNumber' && !value.match(/^[0-9]{10}$/)) {
      setErrors({ ...errors, mobileNumber: 'Enter a valid 10-digit mobile number' });
    } else if (name === 'mobileNumber') {
      const { mobileNumber, ...restErrors } = errors;
      setErrors(restErrors);
    }

    if (name === 'aadhaarNumber' && !value.match(/^[0-9]{12}$/)) {
      setErrors({ ...errors, aadhaarNumber: 'Enter a valid 12-digit Aadhaar number' });
    } else if (name === 'aadhaarNumber') {
      const { aadhaarNumber, ...restErrors } = errors;
      setErrors(restErrors);
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.mobileNumber.match(/^[0-9]{10}$/)) newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
    if (!formData.aadhaarNumber.match(/^[0-9]{12}$/)) newErrors.aadhaarNumber = 'Enter a valid 12-digit Aadhaar number';
    if (!formData.panCardNumber.trim()) newErrors.panCardNumber = 'PAN Card number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    localStorage.setItem('applicationData', JSON.stringify(formData));
    alert('Form Submitted Successfully!');
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      mobileNumber: '',
      aadhaarNumber: '',
      panCardNumber: '',
      aadhaarPhoto: null,
      panCardPhoto: null,
    });
    setErrors({});
    navigate('/loanapproval');
  };

  return (
    <div>
      <Navbar navbarColor=" bg-blue-300 text-blue-500 shadow-md" />
      <div className="flex flex-col items-center py-16 bg-gradient-to-bl from-blue-100 to-blue-500 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6 mt-10 ">
          Welcome to MY-Loan!
        </h1>
        <form
          className="bg-gradient-to-bl from-blue-100 to-blue-500  rounded-xl p-6 sm:p-8 w-full max-w-2xl md:max-w-4xl"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="relative">
              <label htmlFor="firstName" className="block font-medium mb-1 text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full mt-1 p-2 sm:p-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm`}
                placeholder="Enter your first name"
                required
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            
            <div className="relative">
              <label htmlFor="middleName" className="block font-medium mb-1 text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm"
                placeholder="Enter your middle name"
              />
            </div>

            <div className="relative">
              <label htmlFor="lastName" className="block font-medium mb-1 text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full mt-1 p-2 sm:p-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm`}
                placeholder="Enter your last name"
                required
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            {/* Row 2: Date of Birth */}
            <div className="relative col-span-1 md:col-span-3">
              <label htmlFor="dob" className="block font-medium mb-1 text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm"
              />
            </div>

            {/* Row 3: Mobile Number */}
            <div className="relative col-span-1 md:col-span-3">
              <label htmlFor="mobileNumber" className="block font-medium mb-1 text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className={`w-full mt-1 p-2 sm:p-3 border ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm`}
                placeholder="Enter your mobile number"
              />
              {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
            </div>

            {/* Row 4: Aadhaar Number and Upload */}
            <div className="relative col-span-1 md:col-span-2">
              <label htmlFor="aadhaarNumber" className="block font-medium mb-1 text-gray-700">
                Aadhaar Number
              </label>
              <input
                type="text"
                id="aadhaarNumber"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{12}"
                className={`w-full mt-1 p-2 sm:p-3 border ${errors.aadhaarNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm`}
                placeholder="Enter your Aadhaar number"
              />
              {errors.aadhaarNumber && <p className="text-red-500 text-sm">{errors.aadhaarNumber}</p>}
            </div>

            <div className="relative">
              <label htmlFor="aadhaarPhoto" className="block font-medium mb-1 text-gray-700">
                Upload Aadhaar Photo
              </label>
              <input
                type="file"
                id="aadhaarPhoto"
                name="aadhaarPhoto"
                onChange={handleFileChange}
                accept="image/*"
                className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm"
              />
            </div>

            {/* Row 5: PAN Card Number and Upload */}
            <div className="relative col-span-1 md:col-span-2">
              <label htmlFor="panCardNumber" className="block font-medium mb-1 text-gray-700">
                PAN Card Number
              </label>
              <input
                type="text"
                id="panCardNumber"
                name="panCardNumber"
                value={formData.panCardNumber}
                onChange={handleChange}
                required
                className={`w-full mt-1 p-2 sm:p-3 border ${errors.panCardNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm`}
                placeholder="Enter your PAN card number"
              />
              {errors.panCardNumber && <p className="text-red-500 text-sm">{errors.panCardNumber}</p>}
            </div>

            <div className="relative">
              <label htmlFor="panCardPhoto" className="block font-medium mb-1 text-gray-700">
                Upload PAN Card Photo
              </label>
              <input
                type="file"
                id="panCardPhoto"
                name="panCardPhoto"
                onChange={handleFileChange}
                accept="image/*"
                className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out shadow-sm"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer footerColor="bg-gradient-to-br from-blue-100 to-blue-500 text-blue-500"/>
    </div>
  );
};

export default Application;
