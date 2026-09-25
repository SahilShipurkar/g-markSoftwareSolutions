import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AccelerateCTA({ onGetStarted }) {
  const handleAction = () => {
    if (onGetStarted) {
      onGetStarted('contact');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white text-neutral-900 py-10 sm:py-14 border-t border-neutral-200 overflow-hidden font-['Inter',sans-serif]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="w-full px-3.5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-neutral-50/90 border border-neutral-200 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
            {/* Left Column: Heading without red color */}
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-neutral-600 uppercase tracking-[0.22em]">
                <Sparkles className="h-3 w-3 text-neutral-800" />
                <span>Next Generation Transformation</span>
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-[34px] font-extrabold text-neutral-950 tracking-tight leading-[1.2]">
                Are You Ready to <span className="italic underline decoration-neutral-400 decoration-2 underline-offset-4">Accelerate</span> Your Business?
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-neutral-900 rounded-full" />
            </div>

            {/* Right Column: Narrative and Minimal Action Button */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                In our pursuit of industry transformation, we envision a future where digitalization drives efficiency and innovation. By leveraging advanced data analysis, we empower businesses to make informed decisions and unlock new opportunities.
              </p>
              <div>
                <button
                  onClick={handleAction}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-[0.16em] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer group/btn"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
