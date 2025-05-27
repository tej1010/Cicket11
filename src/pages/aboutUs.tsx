import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText } from 'lucide-react';

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Crickets11';
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h1>
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
                Welcome to Crickets 11, your ultimate destination for fantasy real-money gaming, proudly operated by STOCKLIFT SOLUTIONS PRIVATE LIMITED.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                At Crickets 11, we are passionate about bringing the thrill of cricket to your fingertips through an immersive fantasy gaming experience. Our platform is designed to offer a safe, engaging, and fair environment, where users can compete in exciting contests, test their skills, and win real rewards.
                </p>
                <p className='text-gray-300 leading-relaxed mt-4'>We believe in fostering a community-driven approach, allowing players to share ideas, refine their strategies, and connect with like-minded cricket enthusiasts. With a commitment to transparency, security, and responsible gaming, we ensure that every user enjoys a seamless and trustworthy gaming experience.</p>
                <p className='text-gray-300 leading-relaxed mt-4'>We are proud to be a certified member of the Federation of Indian Fantasy Sports (FIFS), reinforcing our dedication to ethical gaming standards and industry best practices. You can view our certification <a href='https://fifs.in/members/' className=' underline cursor-pointer' target='blank'>here.</a></p>
                <p className='text-gray-300 leading-relaxed mt-4'>Join Crickets 11 today and take your love for cricket to the next level!</p>
                <p className='text-gray-300 leading-relaxed mt-4'>🚀 Play. Compete. Win.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;