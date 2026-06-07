import React from 'react';

interface OrangeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export const OrangeButton: React.FC<OrangeButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-orange-200/50 hover:shadow-orange-300/60 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};
