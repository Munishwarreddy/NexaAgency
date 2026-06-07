import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OFFICE_IMAGE = '/images/contact-office.png';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    website: '',
    industry: '',
    phone: '',
    services: '',
    funded: '',
    teamSize: '',
    role: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you within 24 hours.');
  };

  const inputClasses =
    'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all duration-200';

  const labelClasses = 'block text-sm font-semibold text-[#1A1A2E] mb-2';

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image — blurred */}
      <div className="absolute inset-0">
        <img
          src={OFFICE_IMAGE}
          alt="Modern office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#F8F9FA]/85 backdrop-blur-md" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-orange-50 text-[#F97316] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            GET IN TOUCH
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1A1A2E] mb-4">
            Ready to Become an Authority?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Fill out the form below and our team will reach out within 24 hours to schedule your free strategy call.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 md:p-10 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className={labelClasses}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Business Name */}
              <div>
                <label className={labelClasses}>Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Acme Inc."
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClasses}>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Website */}
              <div>
                <label className={labelClasses}>Website (Optional)</label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Business Type / Industry */}
              <div>
                <label className={labelClasses}>Business Type / Industry *</label>
                <input
                  type="text"
                  name="industry"
                  placeholder="SaaS, E-commerce, Consulting..."
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Phone */}
              <div>
                <label className={labelClasses}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* Services — Full width textarea */}
              <div className="md:col-span-2">
                <label className={labelClasses}>What services are you looking for? *</label>
                <textarea
                  name="services"
                  placeholder="Tell us about your goals and what services interest you..."
                  required
                  rows={4}
                  value={formData.services}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Is business funded? */}
              <div>
                <label className={labelClasses}>Is your business funded?</label>
                <select
                  name="funded"
                  value={formData.funded}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select...</option>
                  <option value="bootstrapped">Bootstrapped</option>
                  <option value="seed">Seed Funded</option>
                  <option value="series-a">Series A+</option>
                  <option value="profitable">Profitable / Self-sustained</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Team size */}
              <div>
                <label className={labelClasses}>Team Size</label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select...</option>
                  <option value="solo">Solo Founder</option>
                  <option value="2-5">2-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>

              {/* Your role — Full width */}
              <div className="md:col-span-2">
                <label className={labelClasses}>Your Role</label>
                <input
                  type="text"
                  name="role"
                  placeholder="CEO, Founder, Marketing Head..."
                  value={formData.role}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-8 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-lg py-4 rounded-full transition-all duration-300 shadow-xl shadow-orange-200/50 hover:shadow-orange-300/60 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
            >
              Let's Build Your Brand
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Trust note */}
            <p className="text-center text-xs text-gray-400 mt-4">
              🔒 Your information is secure and will never be shared with third parties.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
