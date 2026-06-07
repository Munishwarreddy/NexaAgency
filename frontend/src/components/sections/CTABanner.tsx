import React from 'react';
import { motion } from 'framer-motion';

const CTA_IMAGE = '/images/cta-standout.png';

export const CTABanner: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F97316] via-[#EA580C] to-[#C2410C]" />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              YOUR BRAND. YOUR LEGACY.
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Stop Blending In.{' '}
              <span className="relative inline-block">
                Start Standing Out.
                <span className="absolute bottom-1 left-0 w-full h-3 bg-white/20 rounded-full" />
              </span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              Every day you wait is another day your competitors are building the brand authority that should be yours. Let's change that — starting today.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <p className="text-3xl font-black text-white">30</p>
                <p className="text-sm text-white/60">Days to First Results</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">₹0</p>
                <p className="text-sm text-white/60">Strategy Call Cost</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-sm text-white/60">Done-For-You</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="inline-flex items-center gap-2 bg-white text-[#F97316] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
                onClick={() => {
                  const contact = document.querySelector('#contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Claim Your Free Strategy Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => {
                  const services = document.querySelector('#services');
                  if (services) services.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 bg-white/10 rounded-3xl blur-2xl" />
            <img
              src={CTA_IMAGE}
              alt="Confident founder standing out - personal brand authority"
              className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[3/4] border-2 border-white/20"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A2E]">Your Time is Now</p>
                  <p className="text-xs text-gray-400">Book your free call today</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
