import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from '../ui/BlogCard';

const blogPosts = [
  {
    tagColor: '#F97316',
    tagLabel: 'CONTENT STRATEGY',
    title: 'How to Repurpose Content Across Platforms (Without Repeating Yourself)',
    excerpt:
      'Learn the art of platform-native content repurposing. Turn one piece of cornerstone content into 15+ pieces that feel fresh and native to each platform — LinkedIn, Instagram, YouTube, and X.',
    readTime: '7 min read',
    date: 'Mar 15, 2025',
    imageUrl: '/images/content-studio.png',
  },
  {
    tagColor: '#2563EB',
    tagLabel: 'AI IN MARKETING',
    title: 'AI + Human Creativity: The New Standard for High-Performing Content',
    excerpt:
      'AI isn\'t replacing creators — it\'s supercharging them. Discover how top founders are combining AI tools with human storytelling to produce 3x more content at 10x the quality.',
    readTime: '5 min read',
    date: 'Mar 10, 2025',
    imageUrl: '/images/team-collaboration.png',
  },
  {
    tagColor: '#7C3AED',
    tagLabel: 'MARKETING PSYCHOLOGY',
    title: 'Social Proof Psychology: Why Testimonials and UGC Transform Conversions?',
    excerpt:
      'The science behind why social proof outperforms every other conversion strategy. Learn how to leverage testimonials, case studies, and user-generated content to build unstoppable trust.',
    readTime: '6 min read',
    date: 'Mar 5, 2025',
    imageUrl: '/images/speaker-stage.png',
  },
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-white">
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
            INSIGHTS
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Actionable advice for founders looking to build an authoritative personal brand.
          </p>
        </motion.div>

        {/* 3 Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <BlogCard
                tagColor={post.tagColor}
                tagLabel={post.tagLabel}
                title={post.title}
                excerpt={post.excerpt}
                readTime={post.readTime}
                date={post.date}
                imageUrl={post.imageUrl}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <button className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-orange-200/50 hover:scale-105 active:scale-95">
            Visit Our Full Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
