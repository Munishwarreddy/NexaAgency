import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SPEAKER_IMAGE = '/images/speaker-stage.png';

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const displayValue = end >= 100 ? count.toLocaleString() : count.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-black text-[#F97316] mb-2">
        {displayValue}
        <span className="text-3xl">{suffix}</span>
      </p>
      <p className="text-sm text-gray-300 font-medium">{label}</p>
    </div>
  );
};

export const SocialProof: React.FC = () => {
  return (
    <section className="relative bg-[#1A1A2E] py-24 lg:py-32 overflow-hidden">
      {/* Background image with orange overlay */}
      <div className="absolute inset-0">
        <img
          src={SPEAKER_IMAGE}
          alt="Speaker on stage presenting"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E]/90 to-[#F97316]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image with orange overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={SPEAKER_IMAGE}
                alt="Speaker on stage"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F97316]/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right — Stats + Quote */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block bg-[#F97316]/20 text-[#F97316] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                PROVEN RESULTS
              </span>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-3">
                Numbers That Speak Louder Than Words
              </h2>
              <p className="text-gray-400">
                We've helped founders across industries build authoritative personal brands that drive real business results.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-8 mb-12"
            >
              <Counter end={150} suffix="+" label="Founders Served" />
              <Counter end={3.2} suffix="M+" label="Content Views Generated" />
              <Counter end={92} suffix="%" label="Client Retention Rate" />
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
};
