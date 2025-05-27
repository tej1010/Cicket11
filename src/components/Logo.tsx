import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/logo.svg" 
      alt="Crickets11 Logo"
      className={className} 
    />
  );
};

export default Logo;