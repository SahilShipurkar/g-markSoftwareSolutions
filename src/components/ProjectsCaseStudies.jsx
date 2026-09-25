import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from 'framer-motion';
import { Lock, BarChart3, LayoutGrid, Headphones } from 'lucide-react';
import dataPrivacyImg from '../assets/data-privacy.jpg';
import detailedInsightsImg from '../assets/detailed-insights.jpg';
import versatilityAppImg from '../assets/versatility-app.jpg';
import customerExperienceImg from '../assets/customer-experience.jpg';

const easeCustom = [0.22, 1, 0.36, 1];

// Top Parallax Floating Squares Config
const floatingSquaresData = [
  { x: 6, y: 15, size: 12 },
  { x: 12, y: 35, size: 8 },
  { x: 8, y: 55, size: 6 },
  { x: 88, y: 15, size: 10 },
  { x: 92, y: 32, size: 14 },
  { x: 85, y: 48, size: 7 },
  { x: 90, y: 65, size: 5 },
  { x: 14, y: 72, size: 5 },
];

// 4 Pillars Data with Dedicated Simple & Clear Images
const caseStudies = [
  {
    id: 'data-privacy',
    title: 'Data Privacy',
    category: 'Security & Compliance',
    description:
      'At our company, we prioritize data privacy by implementing robust security measures. We use encryption, access controls, and regular audits to ensure your confidential information remains safe and secure at all times.',
    image: dataPrivacyImg,
    Icon: Lock,
    squares: [
      { x: 5, y: 30, size: 16 },
      { x: 10, y: 42, size: 10 },
      { x: 3, y: 52, size: 7 },
      { x: 80, y: 70, size: 14 },
      { x: 85, y: 82, size: 9 },
      { x: 78, y: 60, size: 6 },
    ],
  },
  {
    id: 'detailed-insights',
    title: 'Detailed Insights',
    category: 'Telemetry & Analytics',
    description:
      'Gain detailed insights into your industry to empower data-driven decisions and minimize errors, ensuring your business stays ahead of curve with real-time telemetry.',
    image: detailedInsightsImg,
    Icon: BarChart3,
    squares: [
      { x: 82, y: 55, size: 16 },
      { x: 88, y: 68, size: 10 },
      { x: 78, y: 72, size: 7 },
      { x: 85, y: 42, size: 6 },
      { x: 90, y: 80, size: 8 },
    ],
  },
  {
    id: 'versatility-application',
    title: 'Versatility in Application',
    category: 'Ecosystem & Workflows',
    description:
      "Our platform's allows easy integration with other applications, streamlining processes and enhancing productivity for a more efficient workflow across diverse sectors.",
    image: versatilityAppImg,
    Icon: LayoutGrid,
    squares: [
      { x: 4, y: 24, size: 16 },
      { x: 10, y: 36, size: 10 },
      { x: 2, y: 44, size: 7 },
      { x: 78, y: 78, size: 14 },
      { x: 84, y: 88, size: 8 },
    ],
  },
  {
    id: 'customer-experience',
    title: 'Full Customer Experience',
    category: 'Attentive 24/7 Support',
    description:
      "Our after-sales support is quick and attentive, guaranteeing a smooth customer experience. Your satisfaction is our top priority, and we're here to assist you through every upgrade cycle.",
    image: customerExperienceImg,
    Icon: Headphones,
    squares: [
      { x: 82, y: 26, size: 14 },
      { x: 88, y: 38, size: 10 },
      { x: 78, y: 44, size: 7 },
      { x: 84, y: 54, size: 5 },
      { x: 90, y: 60, size: 8 },
    ],
  },
];

// Single Parallax Floating Square in Top Area
function ParallaxSquare({ square, index, scrollYProgress }) {
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -(80 + index * 30)]);
  const smoothY = useSpring(rawY, { stiffness: 40, damping: 20 });

  return (
    <motion.div
      className="absolute bg-black pointer-events-none"
      style={{
        left: `${square.x}%`,
        top: `${square.y}%`,
        width: `${square.size}px`,
        height: `${square.size}px`,
        y: smoothY,
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3 + index * 0.4,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: index * 0.3,
      }}
    />
  );
}

// Single Case Study Card with Dedicated Visual, Pixel Dissolve & Info Plate
function CaseStudyCard({ study, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const IconComponent = study.Icon;

  // Normalized pointer coordinates [0, 1], default at center (0.5, 0.5)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  // Generate 12 cols x 8 rows grid blocks (96 blocks)
  const pixelBlocks = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 12; c++) {
      const delayIn = (r + c) * 0.018;
      const delayOut = (8 - r + (12 - c)) * 0.012;
      pixelBlocks.push({ r, c, delayIn, delayOut });
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: easeCustom }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl bg-neutral-900 shadow-xl border border-neutral-200/80 cursor-pointer select-none"
    >
      {/* 1. Dedicated Simple & Clear Background Image */}
      <img
        src={study.image}
        alt={study.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Subtle Bottom Vignette for Info Plate Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* 2. Pixel-block hover overlay (12 cols x 8 rows) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {pixelBlocks.map((block, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-black/75"
            style={{
              left: `${(block.c * 100) / 12}%`,
              top: `${(block.r * 100) / 8}%`,
              width: `${100 / 12}%`,
              height: `${100 / 8}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              duration: 0.25,
              delay: isHovered ? block.delayIn : block.delayOut,
              ease: easeCustom,
            }}
          />
        ))}
      </div>

      {/* 3. Magnetic floating squares */}
      <div className="absolute inset-0 pointer-events-none z-15">
        {study.squares.map((sq, sIdx) => {
          const sqNormX = sq.x / 100;
          const sqNormY = sq.y / 100;

          const rawShiftX = useTransform(mouseX, (xVal) => (xVal - sqNormX) * 40);
          const rawShiftY = useTransform(mouseY, (yVal) => (yVal - sqNormY) * 40);

          const springX = useSpring(rawShiftX, {
            stiffness: 80,
            damping: 18,
            mass: 0.6,
          });
          const springY = useSpring(rawShiftY, {
            stiffness: 80,
            damping: 18,
            mass: 0.6,
          });

          return (
            <motion.div
              key={sIdx}
              className="absolute bg-black shadow-md"
              style={{
                left: `${sq.x}%`,
                top: `${sq.y}%`,
                width: `${sq.size}px`,
                height: `${sq.size}px`,
                x: springX,
                y: springY,
              }}
            />
          );
        })}
      </div>

      {/* 4. Top-Right Red Accent Icon Badge */}
      <div
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-black/70 border border-[#FF5A5F]/40 shadow-lg backdrop-blur-md transition-transform group-hover:scale-110"
        style={{ zIndex: 20 }}
      >
        <IconComponent className="h-4 w-4 text-[#FF5A5F]" strokeWidth={2} />
      </div>

      {/* 5. Clean Info Plate (Bottom) */}
      <div
        className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-4 sm:p-5 border-t border-neutral-200/80 transition-all duration-300 group-hover:bg-white"
        style={{ zIndex: 20 }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#FF5A5F]/15 text-[#FF5A5F]">
            <IconComponent className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-tight">
            {study.title}
          </h3>
          <span className="ml-auto text-[11px] font-medium text-neutral-400 uppercase tracking-wider hidden sm:inline-block">
            {study.category}
          </span>
        </div>

        <p className="text-xs sm:text-[12.5px] leading-[1.6] text-neutral-600 font-normal line-clamp-3 group-hover:line-clamp-none transition-all">
          {study.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProjectsCaseStudies() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });

  // Parallax Scroll for top squares
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={sectionRef}
      id="projects-case-studies"
      className="relative bg-white text-black border-t border-neutral-200 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Inject Keyframe Animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=DM+Sans:500,400');
      `}</style>

      {/* TOP AREA (Header with floating squares) */}
      <div className="relative px-4 pb-8 pt-10 sm:px-10 sm:pt-14 lg:px-16 lg:pt-16">
        {/* Parallax floating black squares */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {floatingSquaresData.map((sq, i) => (
            <ParallaxSquare
              key={i}
              square={sq}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Header Text */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: easeCustom }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <h2 className="text-[clamp(1.7rem,3.2vw,2.8rem)] font-light leading-[1.2] tracking-tight text-black">
            Let Your Data Take Your Business to{' '}
            <span className="text-[#FF5A5F] font-normal">Higher Grounds</span>
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] leading-[1.7] text-neutral-600 max-w-3xl mx-auto font-normal">
            We aim to deliver intuitive high-tech platforms that enable industries to effortlessly shift from the physical world to the digital age. Recognizing the obstacles that come with this change, our cutting solutions are crafted to streamline the transition, boost efficiency, and promote growth.
          </p>
        </motion.div>
      </div>

      {/* CASE STUDY CARDS (2x2 Grid) */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-10 lg:px-16">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {caseStudies.map((study, idx) => (
            <CaseStudyCard key={study.id} study={study} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
