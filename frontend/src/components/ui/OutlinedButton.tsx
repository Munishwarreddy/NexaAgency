import React from 'react';

interface OutlinedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 border-2 border-[#F97316] text-[#F97316] hover:bg-orange-50 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};
