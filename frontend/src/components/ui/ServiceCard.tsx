import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  accentColor: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  gradient,
  accentColor,
}) => {
  return (
    <div
      className="rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-400 group border border-gray-100 hover:border-transparent hover:-translate-y-2 flex flex-col h-full"
      style={{ background: gradient }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${accentColor}20` }}
      >
        <div style={{ color: accentColor }}>{icon}</div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-5">{description}</p>

      {/* Features */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
            <svg
              className="w-5 h-5 mt-0.5 shrink-0"
              fill="none"
              stroke={accentColor}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Learn More Button */}
      <button
        className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full border-2 transition-all duration-300 hover:scale-105 active:scale-95 w-fit"
        style={{
          borderColor: accentColor,
          color: accentColor,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = accentColor;
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = accentColor;
        }}
      >
        Learn More
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
};
