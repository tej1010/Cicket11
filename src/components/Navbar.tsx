import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo className="h-14 w-auto" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/how-to-play" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors">
                How to play
              </Link>
              <Link to="/points" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors">
                Points Table
              </Link>
              <Link to="/help" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/terms" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-primary transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/how-to-play" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              How to play
            </Link>
            <Link 
              to="/points" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Points Table
            </Link>
            <Link 
              to="/help" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Help Center
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/terms" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Terms
            </Link>
            <Link 
              to="/privacy" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;