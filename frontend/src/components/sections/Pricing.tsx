import React from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from '../ui/PricingCard';

const packages = [
  {
    name: 'Instagram Growth',
    price: '₹11,999/mo',
    gradientFrom: '#F97316',
    gradientTo: '#FB923C',
    popular: true,
    features: [
      '30 high-quality posts/month',
      'Reels scriptwriting & editing (8/mo)',
      'Story designs & scheduling',
      'Hashtag research & optimization',
      'Engagement growth strategy',
      'Monthly performance report',
    ],
  },
  {
    name: 'LinkedIn Growth',
    price: '₹5,999/mo',
    gradientFrom: '#2563EB',
    gradientTo: '#3B82F6',
    features: [
      '20 thought leadership posts/month',
      'Profile & banner optimization',
      'Connection growth strategy',
      'Article writing (2/month)',
      'Engagement pod management',
      'Network analytics & insights',
    ],
  },
  {
    name: 'Facebook & Instagram Ads',
    price: '₹15,000/mo',
    gradientFrom: '#7C3AED',
    gradientTo: '#A78BFA',
    features: [
      'Custom ad creative design',
      'Audience targeting & segmentation',
      'A/B testing for creatives & copy',
      'Retargeting campaign setup',
      'Conversion tracking setup',
      'Weekly ROAS reports',
    ],
  },
  {
    name: 'YouTube Growth',
    price: '₹20,000/mo',
    gradientFrom: '#DC2626',
    gradientTo: '#F87171',
    features: [
      '8 fully edited videos/month',
      'Thumbnail design & A/B testing',
      'SEO-optimized titles & descriptions',
      'Shorts production (12/month)',
      'Channel strategy & branding',
      'Subscriber growth campaign',
    ],
  },
  {
    name: 'SEO Optimization',
    price: '₹12,000/mo',
    gradientFrom: '#059669',
    gradientTo: '#34D399',
    features: [
      'Comprehensive site audit',
      'Keyword research & mapping',
      'On-page optimization (10 pages)',
      'Technical SEO fixes',
      'Backlink building (5/month)',
      'Monthly ranking reports',
    ],
  },
  {
    name: 'Website Designing',
    price: '₹15,000 one-time',
    gradientFrom: '#0891B2',
    gradientTo: '#22D3EE',
    features: [
      'Custom responsive design',
      'Up to 7 pages',
      'Contact form & CTA integration',
      'SEO-ready structure',
      'Mobile-first approach',
      '30 days free support',
    ],
  },
  {
    name: 'Influencer Marketing',
    price: '₹25,000/campaign',
    gradientFrom: '#DB2777',
    gradientTo: '#F472B6',
    features: [
      'Influencer sourcing & vetting',
      'Campaign strategy & brief creation',
      'Content approval workflow',
      'Performance tracking & ROI',
      'Micro & macro influencer mix',
      'Post-campaign analytics report',
    ],
  },
  {
    name: 'Combo Packs',
    price: '₹14,999/mo',
    gradientFrom: '#D97706',
    gradientTo: '#FCD34D',
    popular: true,
    features: [
      'Instagram + LinkedIn management',
      'Content creation (40 posts/mo)',
      '4 Reels + 2 LinkedIn articles',
      'Cross-platform strategy',
      'Dedicated account manager',
      'Priority support & reporting',
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-50 text-[#F97316] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            PRICING
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Our Packages
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Transparent pricing for founders at every stage. Pick a plan or combine for maximum impact.
          </p>
        </motion.div>

        {/* 4×2 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <PricingCard
                name={pkg.name}
                price={pkg.price}
                gradientFrom={pkg.gradientFrom}
                gradientTo={pkg.gradientTo}
                features={pkg.features}
                popular={pkg.popular}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-6">Not sure which package is right for you?</p>
          <button
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-orange-200/50 hover:shadow-orange-300/60 hover:scale-105 active:scale-95"
            onClick={() => {
              const contact = document.querySelector('#contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book a Call to Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
