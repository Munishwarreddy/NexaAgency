import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../ui/ServiceCard';

const STUDIO_IMAGE = '/images/content-studio.png';

const services = [
  {
    title: 'Personal Branding',
    description:
      'Build a magnetic personal brand that attracts clients, partnerships, and speaking opportunities. We position you as the undeniable authority in your niche.',
    features: [
      'Brand identity & positioning strategy',
      'Professional brand assets & guidelines',
      'Authority content & thought leadership',
    ],
    gradient: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
    accentColor: '#F97316',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'SEO Strategy',
    description:
      'Dominate search rankings with data-driven SEO strategies that put your brand in front of the right audience. Organic traffic that converts.',
    features: [
      'Keyword research & topic clusters',
      'On-page & technical SEO audits',
      'Backlink strategy & domain authority growth',
    ],
    gradient: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
    accentColor: '#2563EB',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Web Design',
    description:
      'Stunning, conversion-optimized websites that tell your brand story and turn visitors into leads. Fast, responsive, and beautifully crafted.',
    features: [
      'Custom UI/UX design & prototyping',
      'Mobile-first responsive development',
      'Landing page & funnel optimization',
    ],
    gradient: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)',
    accentColor: '#10B981',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    description:
      'Scroll-stopping content that educates, entertains, and converts. From short-form videos to long-form articles — we craft content your audience craves.',
    features: [
      'Video production & editing',
      'Carousel & infographic design',
      'Blog writing & newsletter copy',
    ],
    gradient: 'linear-gradient(135deg, #FDF4FF, #FAE8FF)',
    accentColor: '#8B5CF6',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Social Media Management',
    description:
      'We manage your social presence end-to-end — scheduling, engagement, community building, and performance tracking across all major platforms.',
    features: [
      'Content scheduling & publishing',
      'Community engagement & DM management',
      'Monthly analytics & growth reports',
    ],
    gradient: 'linear-gradient(135deg, #FFF1F2, #FFE4E6)',
    accentColor: '#E11D48',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: 'Paid Advertising',
    description:
      'High-ROI paid campaigns on Meta, Google, and LinkedIn that put your brand in front of your ideal clients — with precise targeting and measurable results.',
    features: [
      'Meta & Google Ads campaign management',
      'Audience targeting & A/B testing',
      'ROAS tracking & budget optimization',
    ],
    gradient: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)',
    accentColor: '#D97706',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F8F9FA]">
      {/* Parallax Banner */}
      <div
        className="parallax-banner relative h-64 md:h-80 mb-20 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${STUDIO_IMAGE})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/80 to-[#F97316]/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
            Everything You Need to Build Your Brand
          </h2>
          <p className="text-base text-white/80 max-w-xl mx-auto">
            Professional content production, strategic distribution, and measurable growth — all under one roof.
          </p>
        </motion.div>
      </div>

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
            WHAT WE DO
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A complete system for building your personal brand and driving business growth.
          </p>
        </motion.div>

        {/* 3×2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                gradient={service.gradient}
                accentColor={service.accentColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
