import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Sparkles,
  Sprout,
  Sun,
  CloudRain,
  Radio,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  DollarSign,
  Scale,
  Building,
  Globe2,
  Leaf
} from 'lucide-react';
import logoImg from '../../assets/G Mark.png';
import gramUnnatiLogoImg from '../../assets/gramunnati.png';
import gramUnnatiImg from '../../assets/Gramunnati1.png';
import visionImg from '../../assets/gramunnati_vision.png';
import missionImg from '../../assets/gramunnati_mission.png';
import aboutImg from '../../assets/gramunnati_about.png';
import Footer from '../Footer';

export default function GramUnnatiPageView({ onNavigate, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleBackAction = () => {
    if (onBack) {
      onBack();
    } else if (onNavigate) {
      onNavigate('back');
    }
  };

  const pillars = [
    {
      title: 'Our Vision',
      subtitle: 'Precision Farming for Rural Prosperity',
      desc: 'To transform rural agriculture through telemetry intelligence, empowering farmers with real-time soil, crop, and weather insights to maximize yield and economic independence.',
      image: visionImg,
      points: [
        'Data-driven crop lifecycle optimization',
        'Direct farmer-to-buyer transparent markets',
        'Sustainable and ecological soil conservation'
      ]
    },
    {
      title: 'Our Mission',
      subtitle: 'Direct Farmer Value & Market Linkage',
      desc: 'To bridge the digital divide in rural communities by delivering affordable IoT telemetry, fair pricing mechanisms, and end-to-end supply chain integration.',
      image: missionImg,
      points: [
        'Elimination of multi-layer middleman margins',
        'Micro-climate telemetry sensors with multi-lingual alerts',
        'Financial inclusion and automated credit scoring'
      ]
    },
    {
      title: 'About The Platform',
      subtitle: 'Comprehensive Agricultural Ecosystem',
      desc: 'GramUnnati is a holistic agritech platform combining IoT hardware, satellite telemetry, and agricultural advisory services tailored specifically for Indian farming ecosystems.',
      image: aboutImg,
      points: [
        'Automated soil NPK, moisture & pH telemetry',
        'Drone-assisted crop health imaging analysis',
        '24/7 dedicated agronomy expert support network'
      ]
    }
  ];

  const benefits = [
    { name: 'Higher Farmer Income', desc: 'Direct market linkages and reduced input wastage increase net farmer profits by up to 35%.' },
    { name: 'Fair Transparent Pricing', desc: 'Real-time market mandi rates and transparent digital auction mechanisms.' },
    { name: 'Direct Market Access', desc: 'Connect directly with institutional buyers, food processors, and retail chains.' },
    { name: 'Financial Inclusion', desc: 'Digital farm records simplify agricultural loans, crop insurance, and subsidy access.' },
    { name: 'Sustainable Farming', desc: 'Optimized water usage and balanced fertilizer application preserve soil biodiversity.' },
    { name: 'Rural Employment Generation', desc: 'Creates high-tech agritech service jobs and localized drone operator networks.' }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] selection:bg-black selection:text-white">
      {/* =========================================================================
          TOP NAVIGATION BAR (White Theme)
         ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackAction}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black transition-colors px-3 py-1.5 rounded-lg hover:bg-neutral-100 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <div className="h-5 w-px bg-neutral-200 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-extrabold text-lg text-neutral-950 font-['DM_Sans',sans-serif] tracking-tight">
                G-Mark Software
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold text-emerald-700 uppercase tracking-widest">
              <img src={gramUnnatiLogoImg} alt="GramUnnati" className="h-4 w-auto object-contain" />
              <span>GramUnnati Agri-Tech</span>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-neutral-200 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-neutral-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>Empowering Rural India. Enriching Lives.</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                Smart Agricultural <span className="text-emerald-600">Management System</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                GramUnnati combines IoT precision agriculture with seamless farmer-to-enterprise supply chains. From automated soil telemetry to fair pricing intelligence, we transform Indian agriculture into a sustainable, profitable future.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('gramunnati-pillars');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Explore Vision & Mission
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  Join Agri Ecosystem
                </button>
              </div>
            </motion.div>

            {/* Right Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl bg-neutral-950 p-2 shadow-2xl border border-neutral-300 overflow-hidden group">
                <img
                  src={gramUnnatiImg}
                  alt="GramUnnati Platform Showcase"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 rounded-2xl pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    Agricultural Telemetry Active
                  </span>
                  <p className="text-sm font-bold">Connecting 50,000+ Smart Acres</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VISION, MISSION & ABOUT PILLARS
         ========================================================================= */}
      <section id="gramunnati-pillars" className="py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.25em]">
              The Core Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Driving Sustainable Rural Transformation
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              Pioneering telemetry and direct digital supply chains to create an Atmanirbhar agricultural community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, pIndex) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: pIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border-2 border-neutral-200/90 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-100/70 shadow-lg transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-200 via-emerald-200 to-neutral-200 group-hover:from-emerald-500 group-hover:to-emerald-500 transition-all duration-300" />

                <div>
                  <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden mb-5 border-2 border-neutral-200/90 bg-neutral-100 shadow-sm">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-semibold mb-3">{pillar.subtitle}</p>

                  <p className="text-xs sm:text-[13.5px] text-neutral-700 leading-relaxed mb-6 font-normal">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2.5 border-t border-neutral-200 pt-4">
                    {pillar.points.map((point, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2 text-xs text-neutral-800 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY BENEFITS
         ========================================================================= */}
      <section className="py-20 border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.25em]">
              Community Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Empowering Every Stage of the Agri Value Chain
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, bIndex) => (
              <div
                key={bIndex}
                className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Leaf className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-950 mb-2">{b.name}</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onSelectTab={onNavigate} />
    </div>
  );
}
