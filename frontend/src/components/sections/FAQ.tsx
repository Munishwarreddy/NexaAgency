import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_IMAGE = '/images/faq-consultation.png';

const faqItems = [
  {
    question: 'How is this different from other agencies?',
    answer:
      'Most agencies treat personal branding as a side offering. At NEXAS, it\'s all we do. We combine deep founder-positioning strategy with done-for-you content production and growth distribution. Our team lives and breathes personal branding — we don\'t dilute our focus with corporate marketing work. Every strategy is custom-built around your unique expertise, goals, and audience.',
  },
  {
    question: 'How much time do I need to invest?',
    answer:
      'Very little. After an initial 60-minute strategy session, most founders spend just 1-2 hours per week on quick reviews and approvals. We handle the heavy lifting — content creation, scheduling, engagement, and performance tracking. Our process is designed for busy founders who want results without the time drain.',
  },
  {
    question: 'What kind of results can I expect?',
    answer:
      'Results vary by platform and starting point, but typical outcomes within 90 days include: 3-10x growth in followers, 5-15x increase in post engagement, qualified inbound leads through DMs and comments, speaking or media opportunities, and a clear brand positioning that sets you apart from competitors in your space.',
  },
  {
    question: 'What if I\'m not creative or camera-shy?',
    answer:
      'That\'s exactly why we exist! You don\'t need to be creative or comfortable on camera. Our team handles scriptwriting, content ideation, ghostwriting, and graphic design. For video content, we provide teleprompter scripts and coaching to make you look and sound like a natural. Many of our most successful clients started out camera-shy.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We track both vanity metrics (followers, views, engagement rate) and business metrics (inbound leads, DM conversations, website traffic from social, and client acquisition). You\'ll receive detailed monthly reports with clear KPIs and ROI analysis. We believe in transparency — you\'ll always know exactly what\'s working and why.',
  },
  {
    question: 'Do you work with businesses in specific industries?',
    answer:
      'We work with founders and executives across industries — tech, SaaS, finance, healthcare, real estate, coaching, consulting, and more. Our strategies are industry-agnostic because personal branding principles are universal. The key is that you have genuine expertise and a desire to share it with your audience.',
  },
  {
    question: 'Can I see examples of your work?',
    answer:
      'Absolutely! During your free strategy call, we\'ll share detailed case studies relevant to your industry — including before/after analytics, content examples, and growth timelines. We\'re proud of our 92% client retention rate because our results speak for themselves. Just book a call and we\'ll walk you through real results.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-orange-50 text-[#F97316] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Got questions? We've got answers. If you don't see yours here, book a call and ask us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block sticky top-28"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-[#F97316]/15 to-transparent rounded-3xl blur-xl" />
            <img
              src={FAQ_IMAGE}
              alt="Brand strategy consultation session"
              className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[4/3] border-2 border-orange-100"
            />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A2E]">Free Strategy Call</p>
                  <p className="text-xs text-gray-400">Get all your answers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Accordion */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div
                  className={`faq-item bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? 'border-[#F97316]/30 shadow-lg shadow-orange-100/40'
                      : 'border-gray-100 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span
                      className={`font-heading font-semibold text-base transition-colors duration-200 ${
                        openIndex === index ? 'text-[#F97316]' : 'text-[#1A1A2E]'
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ml-4 transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-[#F97316] text-white rotate-45'
                          : 'bg-orange-50 text-[#F97316]'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12m6-6H6" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* Bottom CTA */}
            <div className="text-center pt-6">
              <p className="text-gray-500 mb-4 text-sm">Still have questions?</p>
              <button
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-200/50 hover:scale-105 active:scale-95"
                onClick={() => {
                  const contact = document.querySelector('#contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Talk to Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
