import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';

const HelpCenter: React.FC = () => {
  useEffect(() => {
    document.title = 'Help Center - Crickets11';
  }, []);

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        "How do I create an account on Crickets11?",
        "Is Crickets11 legal in India?",
        "How do I verify my account?",
        "How can I download the Crickets11 app?"
      ]
    },
    {
      title: "Creating Teams",
      questions: [
        "How many teams can I create per match?",
        "What is the credit system for team creation?",
        "How do I select a captain and vice-captain?",
        "Can I edit my team after the match starts?"
      ]
    },
    {
      title: "Contests & Winnings",
      questions: [
        "How do I join a contest?",
        "When are winnings credited to my account?",
        "What are the different types of contests available?",
        "How is the leaderboard calculated?"
      ]
    },
    {
      title: "Deposits & Withdrawals",
      questions: [
        "What are the withdrawal methods available?",
        "How long does it take to process withdrawals?",
        "Is there a minimum withdrawal amount?",
        "Which payment methods are supported for deposits?"
      ]
    }
  ];

  return (
    <div className="bg-[#0D1832] min-h-screen">
      <Navbar />

      <div className="pt-16 bg-[#0D1832]">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-[#1a3366] to-[#0D1832] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">How can we help you?</h1>

              <div className="max-w-2xl mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-[#132548] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search for questions, topics..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories section */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["Account", "Teams", "Contests", "Payments", "Rules", "Technical"].map((category, index) => (
                <a
                  key={index}
                  href={`/help/${category.toLowerCase()}`} // Adjust the href as per your routing structure
                  className="block"
                >
                  <div className="bg-[#132548] rounded-lg p-6 hover:bg-[#1a3366] transition duration-300 cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">{category}</h3>
                      <ChevronRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="py-16 bg-[#0D1832] hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

                  <div className="space-y-4">
                    {category.questions.map((question, qIndex) => (
                      <div key={qIndex} className="bg-[#132548] rounded-lg overflow-hidden">
                        <button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none">
                          <span className="text-white">{question}</span>
                          <ChevronDown className="h-5 w-5 text-blue-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">Can't find what you're looking for?</p>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;