import React from 'react';
import { motion } from 'framer-motion';

const TEAM_IMAGE = '/images/agency-team.png';

const teamMembers = [
  {
    name: 'Harsha Reddy',
    role: 'Founder & CEO',
    bio: 'Ex-growth lead at a top SaaS startup. Built personal brands for 50+ founders before starting NEXAS. Obsessed with positioning and content that converts.',
    color: '#F97316',
    initials: 'HR',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Ananya Iyer',
    role: 'Head of Content Strategy',
    bio: 'Former journalist turned content strategist. She crafts narratives that position founders as industry authorities. Specializes in LinkedIn & long-form content.',
    color: '#8B5CF6',
    initials: 'AI',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Rohan Kapoor',
    role: 'Creative Director',
    bio: 'Award-winning designer with 8+ years in brand identity. Leads all visual branding, video production, and creative direction for NEXAS clients.',
    color: '#2563EB',
    initials: 'RK',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Meera Nair',
    role: 'Growth & Ads Manager',
    bio: 'Data-driven growth marketer who has managed $2M+ in ad spend. She runs paid campaigns, SEO, and growth distribution across all platforms.',
    color: '#10B981',
    initials: 'MN',
    social: { linkedin: '#', twitter: '#' },
  },
];

export const Team: React.FC = () => {
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
            THE TEAM
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Meet the Minds Behind NEXAS
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A team of strategists, creators, designers, and growth hackers dedicated to making your personal brand unstoppable.
          </p>
        </motion.div>

        {/* Team Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-16 shadow-xl"
        >
          <img
            src={TEAM_IMAGE}
            alt="NEXAS creative digital agency team working together"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent flex items-end">
            <div className="p-8 md:p-12">
              <p className="text-white font-heading font-bold text-2xl mb-1">Your Dedicated Brand Team</p>
              <p className="text-white/70 text-sm">Strategists, creators, and growth experts — all focused on your success.</p>
            </div>
          </div>
        </motion.div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: member.color }}
              >
                {member.initials}
              </div>

              {/* Info */}
              <h3 className="font-heading font-bold text-lg text-[#1A1A2E] mb-1">{member.name}</h3>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: member.color }}
              >
                {member.role}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{member.bio}</p>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-gray-100 hover:bg-[#F97316] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={member.social.twitter}
                  className="w-8 h-8 bg-gray-100 hover:bg-[#F97316] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
