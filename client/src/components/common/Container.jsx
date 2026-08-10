import React from 'react';

export const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
