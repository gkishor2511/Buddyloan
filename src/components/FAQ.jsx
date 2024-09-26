import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const FAQ = () => {
  const faqData = [
    {
      question: 'How can I start borrowing money using BuddyLoan?',
      answer: 'To start borrowing money using MY-Loan, you need to download the app, sign up, and follow the onboarding process.'
    },
    {
      question: 'Will I get money in cash when I borrow from BuddyLoan?',
      answer: 'No, the money will be transferred directly to your bank account or Paytm wallet.'
    },
    {
      question: 'Do I need to have a credit history and credit score to be able to borrow on BuddyLoan?',
      answer: 'No, MY-Loan does not require a credit history or score to borrow.'
    },
    {
      question: 'How often can I borrow on BuddyLoan?',
      answer: 'You can borrow as often as you want, as long as your previous loan is cleared.'
    },
    {
      question: 'How can I return or repay a loan on BuddyLoan?',
      answer: 'You can repay the loan through the app using various online payment options like UPI, bank transfer, or debit card.'
    },
    {
      question: 'Is BuddyLoan a fintech or NBFC?',
      answer: 'BuddyLoan is a digital platform amongst a few Indian Fintech companies that partner with banks and NBFCs that comply with RBI lending policies and are ISO 27001:2022 Certified for Information Security Management Systems.'
    },
    {
      question: 'How Do I contact Moneyview if I face any issues with the BuddyLoan app & website?',

      answer: 'Customers wanting to file a complaint or report an issue can do so through the BuddyLoan app. You will receive a response within 24 - 48 working hours.'
    },
    
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <section id="faq">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8  rounded-md mb-8">
      <h2 className="text-center text-4xl font-serif font-bold text-green-500">FAQ</h2>
      <p className="text-center text-green-800 mt-2 mb-8">Have questions? We are here to answer them.</p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-gray-700 font-medium">{item.question}</h3>
              <span>
                {openIndex === index ? (
                  <FaChevronDown className="text-gray-500 " />
                ) : (
                  <FaChevronRight className="text-gray-500" />
                )}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-green-500  mt-3">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-green-300 text-white py-2 px-6 rounded-lg hover:bg-green-500 hover:font-semibold transition">
          Get MY-Loan App
        </button>
      </div>
    </div>
    </section>
  );
};

export default FAQ;
