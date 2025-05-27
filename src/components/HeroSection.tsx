import React, { useEffect, useState } from 'react';
import { ChevronRight, Download } from 'lucide-react';
import Mokup from '../images/mockup.png';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter via-dark to-dark-light z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full filter blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/50 rounded-full filter blur-[80px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero content */}
          <div className={`lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Experience Fantasy Cricket Like Never Before
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Create your dream team, compete with friends, and win big with CricIQ - India's most exciting fantasy cricket platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://criciq-fantasy-media.s3.ap-south-1.amazonaws.com/apk/CricIQ.apk" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-dark bg-primary hover:bg-secondary transition-colors w-full sm:w-auto"
              >
                <Download size={20} className="mr-2" />
                Download Android App
              </a>
              <a 
                href="https://www.criciq.com/" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-dark-lighter transition-colors w-full sm:w-auto"
              >
                Play on Web
                <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* Hero image/mockup */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative mx-auto w-full max-w-md">
              <img src={Mokup} className='max-w-[80%] mx-auto'/>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;