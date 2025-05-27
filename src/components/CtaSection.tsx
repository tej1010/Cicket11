import React, { useEffect, useRef } from 'react';
import { Download, Globe } from 'lucide-react';

const CtaSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const section = entries[0].target;
          section.classList.add('opacity-100');
          section.classList.remove('opacity-0', 'translate-y-12');
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-[#132548] to-[#0D1832] transition-all duration-1000 opacity-0 translate-y-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden">
          {/* Gradient background with animated elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-[#0D1832] z-0">
            <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400 rounded-full filter blur-[80px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Fantasy Cricket Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join millions of cricket fans and experience the thrill of creating your dream team and winning big rewards.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://cric11-fantasy-media.s3.ap-south-1.amazonaws.com/apk/Crickets11.apk" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors w-full sm:w-auto"
              >
                <Download size={20} className="mr-2" />
                Download Android App
              </a>
              <a 
                href="https://www.crickets11.in/" 
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base md:text-lg font-medium rounded-md text-white hover:bg-[#132548] transition-colors w-full sm:w-auto"
              >
                <Globe size={20} className="mr-2" />
                Play on Web
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;