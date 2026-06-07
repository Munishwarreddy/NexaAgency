import React from 'react';
import { motion } from 'framer-motion';

const TEAM_IMAGE = '/images/team-collaboration.png';

const features = [
  {
    icon: '🎛️',
    title: 'Strategy & Blueprint',
    description:
      'We start with a deep dive into your brand, audience, and goals — crafting a custom content strategy and positioning blueprint that becomes your personal brand roadmap.',
    borderColor: '#F97316',
    bgColor: 'bg-orange-50',
    details: ['Audience persona mapping', 'Content calendar planning', 'Competitive analysis'],
  },
  {
    icon: '🎥',
    title: 'Done-For-You Content',
    description:
      'From scriptwriting and video production to carousel design and ghostwritten posts — we create scroll-stopping content that positions you as the go-to authority.',
    borderColor: '#8B5CF6',
    bgColor: 'bg-purple-50',
    details: ['Video production & editing', 'Carousel & graphic design', 'Ghostwritten thought leadership'],
  },
  {
    icon: '📈',
    title: 'Growth & Distribution',
    description:
      'We don\'t just create content — we distribute it strategically across platforms, optimize for algorithms, and track performance to continuously grow your reach.',
    borderColor: '#10B981',
    bgColor: 'bg-green-50',
    details: ['Multi-platform distribution', 'Algorithm optimization', 'Analytics & reporting'],
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white">
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
            WHY NEXAS?
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Why Choose <span className="text-[#F97316]">NEX</span>AS?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We handle everything — from strategy and content creation to distribution and growth. Your brand, amplified.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-[#F97316]/20 to-transparent rounded-3xl blur-xl" />
            <img
              src={TEAM_IMAGE}
              alt="Team collaborating on content strategy"
              className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[4/3] border-2 border-orange-100"
            />
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#1A1A2E]">92%</p>
                  <p className="text-xs text-gray-400 font-medium">Client Retention Rate</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Feature Rows */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group`}
                style={{ borderLeftWidth: '4px', borderLeftColor: feature.borderColor }}
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-3">
                  <span
                    className={`flex items-center justify-center w-12 h-12 rounded-xl text-2xl ${feature.bgColor} shrink-0`}
                  >
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Detail tags */}
                <div className="flex flex-wrap gap-2 ml-16">
                  {feature.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${feature.borderColor}12`,
                        color: feature.borderColor,
                      }}
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke={feature.borderColor}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
