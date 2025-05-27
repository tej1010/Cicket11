import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  won: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      location: "Mumbai",
      quote: "I've tried many fantasy cricket apps, but Crickets11 stands out with its user-friendly interface and quick payouts. I won ₹25,000 in my first month!",
      rating: 5,
      won: "₹25,000"
    },
    {
      name: "Preeti Mishra",
      location: "Delhi",
      quote: "The live updates feature makes watching cricket even more exciting. I love how I can track my team's performance in real-time. Already won multiple contests!",
      rating: 5,
      won: "₹18,500"
    },
    {
      name: "Akash Patel",
      location: "Ahmedabad",
      quote: "What I appreciate most about Crickets11 is the transparency. The points system is fair and their customer support is excellent. Highly recommended!",
      rating: 4,
      won: "₹12,750"
    },
    {
      name: "Sneha Verma",
      location: "Bangalore",
      quote: "As a cricket enthusiast, I've found my perfect platform in Crickets11. The contest variety and simple withdrawal process make it my go-to fantasy app.",
      rating: 5,
      won: "₹31,200"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<number | null>(null);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % testimonials.length;
    });
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + testimonials.length) % testimonials.length;
    });
  };
  
  const startAutoPlay = () => {
    if (slideIntervalRef.current !== null) {
      clearInterval(slideIntervalRef.current);
    }
    
    slideIntervalRef.current = window.setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);
  };
  
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (slideIntervalRef.current !== null) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isPaused]);
  
  return (
    <section className="py-20 bg-[#0D1832]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Players Say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Join thousands of happy users who have already experienced the thrill of fantasy cricket on Crickets11
          </p>
        </div>
        
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <div className="bg-gradient-to-b from-[#132548] to-[#1a3366] rounded-xl p-8 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            fill={i < testimonial.rating ? "#FFD700" : "none"} 
                            color={i < testimonial.rating ? "#FFD700" : "#6B7280"} 
                          />
                        ))}
                      </div>
                      <div className="text-green-500 font-semibold">
                        Won {testimonial.won}
                      </div>
                    </div>
                    
                    <blockquote className="text-lg text-gray-200 italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="mr-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-blue-600 rounded-full p-2 text-white shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-blue-600 rounded-full p-2 text-white shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;