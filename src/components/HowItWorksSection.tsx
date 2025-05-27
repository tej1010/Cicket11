import React, { useEffect, useRef } from 'react';
import { UserPlus, Users, Award, DollarSign } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const steps = [
    {
      icon: <UserPlus size={28} />,
      title: "Sign Up",
      description: "Create your account in less than a minute and verify your mobile number"
    },
    {
      icon: <Users size={28} />,
      title: "Create Your Team",
      description: "Select your 11 players within the available credits and choose a captain"
    },
    {
      icon: <Award size={28} />,
      title: "Join Contests",
      description: "Enter contests with different entry fees and prize pools"
    },
    {
      icon: <DollarSign size={28} />,
      title: "Win Prizes",
      description: "Score points based on your players' performance and win cash prizes"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const stepsElements = document.querySelectorAll('.step-item');
          stepsElements.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('translate-y-0', 'opacity-100');
              step.classList.remove('translate-y-12', 'opacity-0');
            }, 300 * index);
          });
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
    <section ref={sectionRef} className="py-20 bg-[#132548]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Crickets11 Works</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Get started with fantasy cricket in four simple steps
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item flex flex-col items-center text-center px-4 transition-all duration-700 translate-y-12 opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-white">{step.icon}</span>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-blue-600/30">
                    <div className="h-full bg-blue-600 transform origin-left transition-all duration-1000 scale-x-0 step-line"></div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;