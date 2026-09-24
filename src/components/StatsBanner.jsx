import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CounterNumber({ target, suffix = '', duration = 1600, start = 1 }) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // smooth easeOutExpo easing
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(start + (target - start) * easeProgress);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration, start]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 15, suffix: '', label: 'YEARS EXPERIENCE' },
  { target: 10, suffix: 'K', label: 'PARTNERS' },
  { target: 25, suffix: 'M', label: 'INSTALLED' },
  { target: 22, suffix: '', label: 'COUNTRIES' },
  { target: 5, suffix: '', label: 'AWARDS' },
];

export default function StatsBanner() {
  return (
    <section className="relative bg-white text-neutral-900 border-t border-b border-neutral-200 py-8 sm:py-10 overflow-hidden font-['Inter',sans-serif]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="inline-block text-[11px] sm:text-xs font-bold text-neutral-900 uppercase tracking-[0.25em]">
            WE TAKE PRIDE IN OUR NUMBERS
          </span>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 items-center justify-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col items-center text-center px-4 py-1 group ${
                idx !== 0 ? 'lg:border-l lg:border-neutral-200' : ''
              }`}
            >
              {/* Animated Counting Value */}
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-none mb-1.5 group-hover:scale-105 transition-transform duration-200">
                <CounterNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={1400 + idx * 120}
                  start={1}
                />
              </div>

              {/* Stat Label */}
              <div className="text-[10px] sm:text-[11px] font-semibold text-neutral-500 uppercase tracking-[0.16em] group-hover:text-neutral-900 transition-colors duration-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
