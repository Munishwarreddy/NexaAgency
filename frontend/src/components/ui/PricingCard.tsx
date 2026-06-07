import React from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  gradientFrom: string;
  gradientTo: string;
  features: string[];
  popular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  gradientFrom,
  gradientTo,
  features,
  popular = false,
}) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 group flex flex-col h-full ${
        popular ? 'ring-2 ring-[#F97316] ring-offset-2' : 'border border-gray-100'
      }`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute top-4 right-4 z-10 bg-white text-[#F97316] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          ⭐ POPULAR
        </div>
      )}

      {/* Gradient Header Band */}
      <div
        className="px-6 py-6"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <h3 className="font-heading font-bold text-lg text-white mb-1 drop-shadow-sm">{name}</h3>
        <p className="text-2xl font-black text-white drop-shadow-sm">{price}</p>
      </div>

      {/* White body */}
      <div className="bg-white px-6 py-6 flex flex-col flex-1">
        <ul className="space-y-3 mb-6 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
              <svg
                className="w-4 h-4 mt-0.5 shrink-0 text-[#F97316]"
                fill="none"
                stroke="currentColor"
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

        <button
          className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg shadow-orange-200/40 hover:shadow-orange-300/50 hover:scale-[1.02] active:scale-95 text-sm"
          onClick={() => {
            const contact = document.querySelector('#contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Book a Strategy Call
        </button>
      </div>
    </div>
  );
};
