import React from 'react';
import { motion } from 'framer-motion';

const DASHBOARD_IMAGE = '/images/case-studies.png';

const caseStudies = [
  {
    industry: 'Tech SaaS Founder',
    name: 'Vikram Patel',
    role: 'CEO, CloudSync',
    color: '#F97316',
    bgGradient: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
    metrics: [
      { label: 'LinkedIn Followers', before: '1.2K', after: '28K', change: '+2,233%' },
      { label: 'Monthly Impressions', before: '5K', after: '450K', change: '+8,900%' },
      { label: 'Inbound Leads/Month', before: '3', after: '42', change: '+1,300%' },
    ],
    quote: 'NEXAS didn\'t just grow my LinkedIn — they positioned me as the go-to voice in cloud infrastructure. The leads are now coming to me.',
    duration: '6 months',
  },
  {
    industry: 'Fitness Coach',
    name: 'Priya Sharma',
    role: 'Founder, FitMind Studio',
    color: '#8B5CF6',
    bgGradient: 'linear-gradient(135deg, #FDF4FF, #FAE8FF)',
    metrics: [
      { label: 'Instagram Followers', before: '800', after: '45K', change: '+5,525%' },
      { label: 'Monthly Video Views', before: '2K', after: '1.2M', change: '+59,900%' },
      { label: 'Course Enrollments/Month', before: '5', after: '120', change: '+2,300%' },
    ],
    quote: 'I was camera-shy and had no idea how to create content. NEXAS turned me into a content machine — and my business exploded.',
    duration: '4 months',
  },
  {
    industry: 'Real Estate Consultant',
    name: 'Arjun Mehra',
    role: 'Founder, PropVista Advisory',
    color: '#10B981',
    bgGradient: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)',
    metrics: [
      { label: 'YouTube Subscribers', before: '200', after: '12K', change: '+5,900%' },
      { label: 'Monthly Website Traffic', before: '300', after: '18K', change: '+5,900%' },
      { label: 'Deals Closed/Quarter', before: '2', after: '15', change: '+650%' },
    ],
    quote: 'My personal brand became my best sales tool. Clients now reach out to me instead of the other way around.',
    duration: '8 months',
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
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
            RESULTS THAT MATTER
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Real Founders. Real Results.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            See how we've transformed personal brands and driven measurable business growth for founders across industries.
          </p>
        </motion.div>

        {/* Dashboard Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-16 shadow-xl"
        >
          <img
            src={DASHBOARD_IMAGE}
            alt="Brand growth analytics dashboard showing follower growth and engagement metrics"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/70 to-transparent flex items-center">
            <div className="px-8 md:px-12">
              <p className="text-white/80 text-sm font-medium mb-2">AVERAGE CLIENT RESULTS</p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-3xl md:text-4xl font-black text-[#F97316]">10x</p>
                  <p className="text-white/70 text-sm">Follower Growth</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-[#F97316]">5x</p>
                  <p className="text-white/70 text-sm">Engagement Rate</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-[#F97316]">340%</p>
                  <p className="text-white/70 text-sm">More Inbound Leads</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Header */}
              <div className="p-6" style={{ background: study.bgGradient }}>
                <span
                  className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: study.color }}
                >
                  {study.industry}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#1A1A2E]">{study.name}</h3>
                <p className="text-sm text-gray-500">{study.role}</p>
              </div>

              {/* Metrics */}
              <div className="bg-white p-6">
                <div className="space-y-4 mb-5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{metric.label}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 line-through">{metric.before}</span>
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                          <span className="text-sm font-bold text-[#1A1A2E]">{metric.after}</span>
                        </div>
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${study.color}15`, color: study.color }}
                      >
                        {metric.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-500 italic leading-relaxed mb-2">"{study.quote}"</p>
                  <p className="text-xs text-gray-400">Results in {study.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
