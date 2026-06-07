import React from 'react';
import { motion } from 'framer-motion';

const FOUNDERS_IMAGE = '/images/trusted-founders.png';

const industries = [
  { name: 'Technology & SaaS', icon: '💻', color: '#2563EB' },
  { name: 'Healthcare & Wellness', icon: '🏥', color: '#10B981' },
  { name: 'Finance & Consulting', icon: '📊', color: '#F97316' },
  { name: 'Real Estate', icon: '🏠', color: '#8B5CF6' },
  { name: 'E-commerce & D2C', icon: '🛒', color: '#E11D48' },
  { name: 'Education & Coaching', icon: '📚', color: '#0891B2' },
  { name: 'Fitness & Lifestyle', icon: '💪', color: '#D97706' },
  { name: 'Legal & Professional', icon: '⚖️', color: '#6366F1' },
];

const stats = [
  { value: '15+', label: 'Industries Served' },
  { value: '6', label: 'Countries Reached' },
  { value: '10x', label: 'Avg. Growth Rate' },
  { value: '92%', label: 'Client Retention' },
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F9FA]">
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
            TRUSTED BY FOUNDERS
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Founders Across Industries Trust NEXAS
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From tech startups to fitness coaches — we've helped founders in every industry build powerful personal brands that drive business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-[#F97316]/15 to-[#8B5CF6]/10 rounded-3xl blur-xl" />
            <img
              src={FOUNDERS_IMAGE}
              alt="Diverse group of professional founders and entrepreneurs"
              className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[4/3] border-2 border-orange-100"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A2E]">150+ Founders</p>
                  <p className="text-xs text-gray-400">And growing every month</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Industry Grid */}
          <div>
            <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-6">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <span className="text-sm font-medium text-[#1A1A2E] group-hover:text-[#F97316] transition-colors">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-black text-[#F97316] mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
