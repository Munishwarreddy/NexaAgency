import React from 'react';

interface OrangePillProps {
  children: React.ReactNode;
  className?: string;
}

export const OrangePill: React.FC<OrangePillProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center bg-[#F97316] text-white text-sm font-bold px-3 py-1 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};
