import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1550px] w-[95%]`}>
      {children}
    </div>
  )
}

export default Container;