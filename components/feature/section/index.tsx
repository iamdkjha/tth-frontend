import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <main className={`${className}`}>
      {children}
    </main>
  )
}

export default Section;