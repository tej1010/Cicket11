import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Crickets11 - Fantasy Cricket App';
  }, []);

  return (
    <div className="bg-[#0D1832] min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;