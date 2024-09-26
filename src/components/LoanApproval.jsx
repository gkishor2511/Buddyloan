import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from './Footer';

const LoanApproval = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [category, setCategory] = useState('');
  const [emi, setEmi] = useState(null);

  const [bankName, setBankName] = useState('');
  const [branch, setBranch] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [reenterAccountNumber, setReenterAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [disbursementPopup, setDisbursementPopup] = useState(false);
  const navigate = useNavigate();

  const calculateEmi = () => {
    if (amount && tenure) {
      const rate = 0.05;
      const months = parseInt(tenure);
      const emiAmount = (amount * (1 + rate * months / 12)) / months;
      setEmi(emiAmount.toFixed(2));
    }
  };

  const handleDisburseLoan = () => {
    if (accountNumber !== reenterAccountNumber) {
      setErrorMessage('Account numbers do not match!');
      return;
    }
    
    if (
      !amount ||
      !tenure ||
      !category ||
      !bankName ||
      !branch ||
      !accountNumber ||
      !reenterAccountNumber ||
      !ifscCode
    ) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    setErrorMessage('');
    setDisbursementPopup(true);
  };

  return (
    <div className='bg-gradient-to-bl from-blue-100 to-blue-700 min-h-screen p-6'>
      <div className="p-4">
        <button onClick={() => navigate('/application')}>
          <FaArrowLeft className="text-2xl text-white hover:text-gray-300" />
        </button>
      </div>

      <div className='bg-gradient-to-bl from-blue-300 to-blue-900 rounded-md mb-10 '>
      <h1 className='text-4xl text-center font-serif font-semibold text-white py-8'>
        Your Loan Approved by MY-Loan!
      </h1>
      <div className="flex flex-col items-center space-y-4 p-6">
        <div className="w-full max-w-md">
          <label className="block mb-2  text-white font-serif font-medium">Select Loan Amount:</label>
          <select
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          >
            <option value="">Select Amount</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
          </select>
        </div>

        <div className="w-full max-w-md">
          <label className="block mb-2  text-white font-serif font-medium">Select Tenure (days):</label>
          <select
            value={tenure}
            onChange={(e) => {
              setTenure(e.target.value);
              calculateEmi();
            }}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Tenure</option>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="90">90 days</option>
          </select>
        </div>

        <div className="w-full max-w-md">
          <label className="block mb-2  text-white font-serif font-medium">Select Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Category</option>
            <option value="educational">Educational</option>
            <option value="personal">Personal</option>
            <option value="entertainment">Entertainment</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>

        {emi && (
          <div className="text-lg">
            EMI: <span className="font-bold text-blue-500">${emi}</span>
          </div>
        )}
      </div>

      <div className="w-full max-w-md mx-auto space-y-4 mt-8">
        <div>
          <label className="block mb-2 text-white font-serif font-medium">Bank Name:</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-white font-serif font-medium">Branch:</label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-white font-serif font-medium">Account Number:</label>
          <input
            type="password"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-white font-serif font-medium">Re-enter Account Number:</label>
          <input
            type="password"
            value={reenterAccountNumber}
            onChange={(e) => setReenterAccountNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-white font-serif font-medium">IFSC Code:</label>
          <input
            type="text"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-blue-500 mb-4"
          />
        </div>

        <button
          onClick={handleDisburseLoan}
          className={`w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4 ${
            !amount || !tenure || !category || !bankName || !branch || !accountNumber || !reenterAccountNumber || !ifscCode ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Disburse Loan
        </button>

        {errorMessage && <div className="text-red-500 text-center mt-4">{errorMessage}</div>}
      </div>
      </div>

      {/* Pop-up message */}
      {disbursementPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Disbursement Successful</h2>
            <p>
              An amount of ${amount} has been disbursed to {bankName} successfully.
            </p>
            <button
              onClick={() => {
                setDisbursementPopup(false);
                navigate('/');
              }}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
      <Footer footerColor=""/>
    
    </div>
  );
};

export default LoanApproval;
