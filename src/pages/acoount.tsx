import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const Account: React.FC = () => {
  useEffect(() => {
    document.title = 'Account - Crickets11';
  }, []);
  return (
    <div className="bg-[#0D1832] min-h-screen">
      <Navbar />
      
      <div className="pt-16 bg-[#0D1832]">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-[#1a3366] to-[#0D1832] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block bg-blue-600/20 p-4 rounded-full mb-4">
                <FileText className="h-8 w-8 text-blue-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Account</h1>
              {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Last Updated: November 1, 2025
              </p> */}
            </div>
          </div>
        </div>
        
        {/* Terms content */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#132548] rounded-xl p-8 mb-8">
                <p className="text-gray-300 leading-relaxed">
                    Steps to Create Account on Cricket 11 (or similar apps):
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                Download the App
                </p>
                <p className='text-gray-300 leading-relaxed mt-4'>Go to the web Cricketss11.com</p>
                <p className='text-gray-300 leading-relaxed mt-4'>and install the app or play on web.</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Sign Up / Register</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Tap on "Sign Up" or "Create Account".</p>
                <p className='text-gray-300 leading-relaxed mt-4'>You’ll be asked for:</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Mobile number or Email ID</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Username</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Password</p>
                <p className='text-gray-300 leading-relaxed mt-4'>App send an OTP (One Time Password) to verify your mobile number.</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Complete Your Profile</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Fill in details like Name, Date of Birth, etc.</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Verify KYC (identity verification) to withdraw winning money.</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Start Playing!</p>
                <p className='text-gray-300 leading-relaxed mt-4'>Once your account is ready, you can join matches, create fantasy teams, and start playing.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Account;