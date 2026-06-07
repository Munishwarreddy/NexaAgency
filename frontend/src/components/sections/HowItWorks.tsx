import React from 'react';
import { motion } from 'framer-motion';

const WORKFLOW_IMAGE = '/images/how-it-works.png';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We start with a deep-dive into your brand, audience, goals, and competitive landscape. Together, we craft a custom positioning blueprint and content strategy roadmap that becomes the foundation for everything we build.',
    details: [
      'Brand audit & competitor analysis',
      'Audience persona development',
      'Content strategy & editorial calendar',
      'Platform selection & channel strategy',
    ],
    color: '#F97316',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    number: '02',
    title: 'Content Creation',
    description:
      'Our creative team takes over — writing scripts, producing videos, designing carousels, ghostwriting posts, and crafting every piece of content you need. You review and approve; we handle the heavy lifting.',
    details: [
      'Video production & professional editing',
      'Carousel & graphic design',
      'Ghostwritten thought leadership posts',
      'Blog articles & newsletter content',
    ],
    color: '#8B5CF6',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    number: '03',
    title: 'Growth & Scale',
    description:
      'We distribute your content strategically across platforms, optimize for algorithms, engage your audience, track performance, and continuously refine the strategy to accelerate your brand\'s growth and reach.',
    details: [
      'Multi-platform publishing & scheduling',
      'Algorithm optimization & hashtag strategy',
      'Community engagement & DM management',
      'Monthly analytics, reporting & strategy refinement',
    ],
    color: '#10B981',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
];

export const HowItWorks: React.FC = () => {
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
            HOW IT WORKS
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Your Brand, Built in 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From strategy to execution to growth — we've streamlined the entire personal branding process so you can focus on running your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Steps */}
          <div className="space-y-8 relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#F97316] via-[#8B5CF6] to-[#10B981] hidden md:block" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`relative ml-0 md:ml-16 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border ${step.borderColor} group`}>
                  {/* Step number circle */}
                  <div
                    className="absolute -left-8 md:-left-[4.5rem] top-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg z-10 hidden md:flex"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Mobile step number */}
                  <div
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm mb-3"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#1A1A2E] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.description}</p>

                  {/* Detail bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-xs text-gray-600">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke={step.color} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#F97316]/15 via-[#8B5CF6]/10 to-[#10B981]/15 rounded-3xl blur-2xl" />
            <img
              src={WORKFLOW_IMAGE}
              alt="Personal branding workflow: strategy, content creation, and growth"
              className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[3/4] border-2 border-orange-100"
            />
            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A2E]">Results in 30 Days</p>
                  <p className="text-xs text-gray-400">Guaranteed brand uplift</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
