import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  ArrowDown,
  ChevronDown,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.png';
import step6 from '../assets/step6.png';

const phases = [
  {
    num: '1',
    title: 'Ideas & Capture',
    desc: 'Understand your vision, business goals, and project requirements through detailed discussions.',
    desc2: 'Gather key features, target audience, and project scope to build a strong foundation.',
    image: step1,
  },
  {
    num: '2',
    title: 'Strategy & Planning',
    desc: 'Create a strategic roadmap with clear milestones, timelines, and technology selection.',
    desc2: 'Plan the project architecture and development approach for smooth execution.',
    image: step2,
  },
  {
    num: '3',
    title: 'Blueprint & Design',
    desc: 'Design intuitive wireframes and modern UI/UX focused on user experience.',
    desc2: 'Create responsive layouts and interactive prototypes before development begins.',
    image: step3,
  },
  {
    num: '4',
    title: 'Development Build',
    desc: 'Transform approved designs into a fast, secure, and scalable digital solution.',
    desc2: 'Develop the frontend, backend, APIs, and database with best coding practices.',
    image: step4,
  },
  {
    num: '5',
    title: 'Testing & QA',
    desc: 'Perform comprehensive testing to ensure quality, security, and performance.',
    desc2: 'Fix bugs and verify seamless functionality across all devices and browsers.',
    image: step5,
  },
  {
    num: '6',
    title: 'Launch Verification',
    desc: 'Deploy the application with final checks, optimization, and security validation.',
    desc2: 'Monitor performance, configure the live environment, and provide ongoing support.',
    image: step6,
  },
];

export default function WorkflowBlueprint() {
  const [activeStep, setActiveStep] = useState(0); // First step open by default
  const sectionRef = useRef(null);
  const isHeaderInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      id="workflow-blueprint"
      className="relative bg-white text-neutral-900 font-['Inter',sans-serif] min-h-screen py-12 sm:py-20 lg:py-24 border-t border-neutral-200 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* =========================================================================
              LEFT COLUMN: Heading, Guarantee, and Progress Info (Sticky on Desktop)
             ========================================================================= */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A5F] uppercase tracking-[0.25em] mb-2 sm:mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>WORKFLOW BLUEPRINT</span>
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-950 tracking-tight leading-[1.15] mb-3 sm:mb-4">
                Mastery in <span className="text-[#FF5A5F]">Every Phase</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed text-xs sm:text-base font-normal">
                We follow a disciplined, telemetry-driven workflow to transition your industrial vision into an optimized digital platform.
              </p>
            </div>

            {/* Vertical Connector and Guarantee Card */}
            <div className="flex flex-col items-center lg:items-start mt-1 sm:mt-2">
              <div className="w-0.5 h-6 sm:h-10 bg-gradient-to-b from-neutral-300 to-[#FF5A5F]/70 mb-2" />
              <div className="flex items-center gap-2 text-[#FF5A5F] mb-3 sm:mb-4">
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </div>

              {/* Our Guarantee Card */}
              <div className="w-full p-4 sm:p-6 rounded-2xl border border-[#FF5A5F]/30 bg-red-50/40 hover:bg-red-50/70 transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF5A5F]" />
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FF5A5F]/15 border border-[#FF5A5F]/30 flex items-center justify-center text-[#FF5A5F] group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A5F] mb-0.5 sm:mb-1">
                      Our Guarantee
                    </h4>
                    <p className="text-sm sm:text-lg font-bold text-neutral-950 group-hover:text-[#FF5A5F] transition-colors duration-200">
                      Fast-Track Delivery
                    </p>
                    <p className="text-[11px] sm:text-[13px] text-neutral-600 mt-1 leading-relaxed">
                      We commit to rapid iteration cycles, deploying production-ready milestones on schedule without compromising on security or scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN: Interactive Vertical Timeline & Accordion Steps
             ========================================================================= */}
          <div className="lg:col-span-7 relative">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-[19px] sm:left-[21px] top-6 bottom-6 w-0.5 bg-neutral-200" />

            <div className="space-y-3 sm:space-y-5">
              {phases.map((phase, index) => {
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={phase.num}
                    className="relative flex gap-3 sm:gap-6 group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => setActiveStep((prev) => (prev === index ? -1 : index))}
                  >
                    {/* Glowing / Number Dot on Timeline */}
                    <div
                      className={`relative z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 transition-all duration-300 cursor-pointer shrink-0 ${
                        isActive
                          ? 'bg-[#FF5A5F] text-white border-[#FF5A5F] shadow-lg shadow-[#FF5A5F]/30 scale-105'
                          : 'bg-white text-neutral-700 border-neutral-300 group-hover:border-[#FF5A5F] group-hover:text-[#FF5A5F]'
                      }`}
                    >
                      <span className="font-bold text-xs">{phase.num}</span>
                    </div>

                    {/* Phase Info Card (Accordion Body) */}
                    <div
                      className={`flex-1 p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'border-[#FF5A5F]/50 bg-white shadow-xl shadow-neutral-200/80 ring-1 ring-[#FF5A5F]/20'
                          : 'border-neutral-200/90 bg-neutral-50/70 hover:bg-white hover:border-neutral-300 hover:shadow-md'
                      }`}
                    >
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                          <h3
                            className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                              isActive ? 'text-[#FF5A5F]' : 'text-neutral-900 group-hover:text-[#FF5A5F]'
                            }`}
                          >
                            {phase.title}
                          </h3>
                        </div>

                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? 'bg-[#FF5A5F]/15 text-[#FF5A5F] rotate-180'
                              : 'bg-neutral-100 text-neutral-400 group-hover:text-neutral-700'
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Expandable Content Area */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-3 border-t border-neutral-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                              <div className="flex-1 space-y-2">
                                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                                  {phase.desc}
                                </p>
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
                                  {phase.desc2}
                                </p>
                              </div>

                              {/* Dedicated 3D Step Image */}
                              {phase.image && (
                                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 relative flex items-center justify-center select-none pointer-events-none p-1 bg-neutral-100/70 rounded-xl border border-neutral-200/60 shadow-sm">
                                  <img
                                    src={phase.image}
                                    alt={phase.title}
                                    className="w-full h-full object-contain filter drop-shadow-md"
                                  />
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
