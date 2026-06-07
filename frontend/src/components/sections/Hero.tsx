import React from 'react';
import { motion } from 'framer-motion';

const HERO_IMAGE = '/images/hero-founder.png';

export const Hero: React.FC = () => {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-glow min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#F97316] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse" />
              #1 Personal Branding Agency for Founders
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A2E] leading-tight mb-6">
              Tired of Being the{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Best-Kept Secret</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#F97316]/20 rounded-full -z-0" />
              </span>{' '}
              in Your Industry?
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              We build personal brands for founders that{' '}
              <span className="inline-flex items-center gap-1 bg-[#F97316] text-white text-sm font-bold px-3 py-1 rounded-full">
                speak, connect, and convert
              </span>{' '}
              — turning your expertise into authority and attracting a flood of new clients and opportunities.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <p className="text-3xl font-black text-[#F97316]">150+</p>
                <p className="text-sm text-gray-500 font-medium">Founders Served</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#F97316]">3.2M+</p>
                <p className="text-sm text-gray-500 font-medium">Content Views</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#F97316]">92%</p>
                <p className="text-sm text-gray-500 font-medium">Client Retention</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-orange-200/60 hover:shadow-orange-300/70 hover:scale-105 active:scale-95"
              >
                Claim Your Free Strategy Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => handleScroll('#services')}
                className="inline-flex items-center gap-2 border-2 border-[#F97316] text-[#F97316] hover:bg-orange-50 font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              >
                See Our Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-3 mt-8 text-sm text-gray-400">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No contracts</span>
              <span className="text-gray-300">•</span>
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
              <span className="text-gray-300">•</span>
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Results in 30 days</span>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F97316]/30 to-[#F97316]/5 rounded-3xl blur-2xl" />
              
              {/* Main image */}
              <div className="relative animate-float">
                <img
                  src={HERO_IMAGE}
                  alt="Confident founder at desk building their personal brand"
                  className="w-full max-w-lg rounded-3xl shadow-2xl shadow-orange-100/40 object-cover aspect-[4/5]"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A2E]">Brand Growth</p>
                    <p className="text-xs text-green-500 font-semibold">+340% this quarter</p>
                  </div>
                </div>

                {/* Floating badge top-right */}
                <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 border border-gray-100">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-[#1A1A2E]">Verified Agency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
