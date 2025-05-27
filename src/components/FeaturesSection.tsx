import React, { useEffect, useRef } from 'react';
import { Trophy, Users, TrendingUp, Zap, Shield, Award } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef}
      className="bg-gradient-to-b from-[#132548] to-[#1a3366] rounded-xl p-6 shadow-xl transition-all duration-700 ease-out opacity-0 translate-y-8"
    >
      <div className="bg-[#0D1832]/50 p-3 rounded-full inline-block mb-5">
        <div className="text-blue-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Trophy size={24} />,
      title: "Win Big Rewards",
      description: "Compete in contests and win exciting cash prizes based on your team's performance in real matches."
    },
    {
      icon: <Users size={24} />,
      title: "Create Multiple Teams",
      description: "Build up to 6 different teams for a single match to maximize your chances of winning."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Live Score Updates",
      description: "Get real-time updates and watch your fantasy points increase as the actual match progresses."
    },
    {
      icon: <Zap size={24} />,
      title: "Quick Withdrawals",
      description: "Enjoy hassle-free and instant withdrawals directly to your bank account or UPI."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Platform",
      description: "Your data and transactions are protected with bank-grade security protocols."
    },
    {
      icon: <Award size={24} />,
      title: "Expert Analysis",
      description: "Get access to expert tips and analysis to help you make informed team selections."
    }
  ];
  
  return (
    <section className="py-20 bg-[#0D1832]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Crickets11</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Experience the ultimate fantasy cricket platform with features designed to enhance your gameplay and winning chances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;