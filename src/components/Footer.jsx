import React from "react";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";



const Footer = ({footerColor}) => {
  return (
    <section id="footer"> 
    <footer className={`${footerColor}`}>
      <div className="bg-green-500 container mx-auto py-16">
        {/* Top Section */}
        

          <div className="bg-white shadow-md rounded-md text-center py-4">
            <p className="font-bold text-lg mb-4">Interest rates from</p>
            <p className="text-xl text-gray-800">
              <span className="font-bold">0% to 4% per month</span> Max Annual Interest Rate: <span className="font-bold">48%</span>
            </p>
          </div>


        {/* Footer Links */}
        <div className="mt-8  border-b">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center text-sm mb-6">
                <div className="space-y-2 flex items-center justify-center gap-2">
                    
                    <p className="font-bold text-4xl text-white font-serif py-4">BuddyLoan</p>
                    
                </div>
                <div className="space-y-2">
                    <p className="font-bold">Interest Rate Policy</p>
                    <p className="text-white">Code of Conduct</p>
                    <p className="text-white">Terms & Conditions</p>
                    <p className="text-white">Privacy & Data Storage Policy</p>
                </div>

                <div className="space-y-2">
                    <p className="font-bold">Other Links</p>
                    <p className="text-white">Fair Practice Code</p>
                    <p className="text-white">Grievance Redressal Policy</p>
                    <p className="text-white">Ombudsman Scheme</p>
                </div>

                <div className="space-y-2">
                    <p className="font-bold">Services</p>
                    <p className="text-white">LSP & DLA</p>
                    <p className="text-white">Digital Lending</p>
                    <p className="text-white">Disclosures</p>
                    <p className="text-white">Blogs</p>
                </div>

                <div className="space-y-2 text-center justify-center md:text-left">
                    <p className="font-bold">CONNECT</p>
                    <div className="flex justify-center md:justify-start space-x-3">
                    <a href="#" className="text-white text-2xl"><FaTwitter/></a>
                    <a href="#" className="text-white text-2xl"><FaFacebook/></a>
                    <a href="#" className="text-white text-2xl"><FaYoutube/></a>
                    <a href="#" className="text-white text-2xl"><FaInstagram/></a>
                    </div>
                </div>
        </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-white text-xs ">
          <p>
            Copyright @ 2024 MY-Loan Financial Services Private Limited all rights reserved
          </p>
          <p className="mt-1">CIN: U65999WB2019PTC233120</p>
          <p>12th Floor, Unit No. - 1204, PS, Tower 1, SRIJAN CORPORATE PARK, 2, EP & GP, Sector V, Bidhannagar, Kolkata, West Bengal 700091</p>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
