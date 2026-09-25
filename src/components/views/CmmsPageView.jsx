import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Settings,
  ClipboardList,
  Package,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Activity,
  Calendar,
  Layers,
  BarChart3
} from 'lucide-react';
import logo4MImg from '../../assets/4M.png';
import manImg from '../../assets/4m_man.png';
import machineImg from '../../assets/4m_machine.png';
import methodImg from '../../assets/4m_method.png';
import materialImg from '../../assets/4m_material.png';
import cmmsImg from '../../assets/4M CMMS.webp';
import Footer from '../Footer';

export default function CmmsPageView({ onNavigate, onBack }) {
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

  const fourMData = [
    {
      title: 'Man',
      subtitle: 'Workforce & Skill Intelligence',
      desc: 'Manage workforce performance, technician assignments, skill tracking, attendance, and maintenance responsibilities to improve productivity and accountability.',
      image: manImg,
      icon: Users,
      badge: 'Operator Allocation',
      points: [
        'Real-time technician skill matrix and shift scheduling',
        'Automated task dispatch and response time telemetry',
        'Direct accountability and digital sign-off audits'
      ]
    },
    {
      title: 'Machine',
      subtitle: 'Asset Health & Uptime Optimization',
      desc: 'Monitor equipment health, schedule preventive maintenance, reduce downtime, track breakdowns, and extend asset life through continuous telemetry.',
      image: machineImg,
      icon: Settings,
      badge: 'Asset Life Cycle',
      points: [
        'Predictive failure alerts and health index scoring',
        'Preventive maintenance calendar with automated work orders',
        'Comprehensive breakdown logs and Mean-Time-To-Repair (MTTR) analytics'
      ]
    },
    {
      title: 'Method',
      subtitle: 'Standardized SOPs & Compliance',
      desc: 'Standardize maintenance procedures, work orders, inspection checklists, SOPs, and compliance processes for consistent zero-error operations.',
      image: methodImg,
      icon: ClipboardList,
      badge: 'Process Consistency',
      points: [
        'Digital interactive inspection checklists with step-by-step verification',
        'Strict regulatory compliance and safety SOP adherence',
        'Root cause analysis (RCA) and continuous improvement workflows'
      ]
    },
    {
      title: 'Material',
      subtitle: 'Spare Parts & Inventory Precision',
      desc: 'Track spare parts inventory, material consumption, stock levels, procurement, and availability to prevent costly maintenance delays.',
      image: materialImg,
      icon: Package,
      badge: 'Inventory Control',
      points: [
        'Automated low-stock threshold triggers and purchase requisitions',
        'Traceable parts consumption per asset and work order',
        'Zero stockout delays for mission-critical industrial components'
      ]
    }
  ];

  const cmmsBenefits = [
    { name: 'Reduced Equipment Downtime', icon: Activity, desc: 'Cut unplanned downtime by up to 42% through automated preventive cycles.' },
    { name: 'Improved Asset Reliability', icon: ShieldCheck, desc: 'Extend machine lifespan with continuous condition monitoring.' },
    { name: 'Workforce Productivity', icon: Users, desc: 'Streamline team assignments and eliminate idle maintenance delays.' },
    { name: 'Optimized Inventory Control', icon: Package, desc: 'Maintain ideal spares inventory and eliminate stockouts.' },
    { name: 'Preventive Maintenance Planning', icon: Calendar, desc: 'Automated recurring maintenance schedules and calendar sync.' },
    { name: 'Real-Time Telemetry & Reports', icon: BarChart3, desc: 'Live operational KPIs, MTBF/MTTR analytics, and executive reports.' }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] selection:bg-black selection:text-white">
      {/* =========================================================================
          TOP NAVIGATION BAR (Clean Monochrome)
         ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={handleBackAction}
              className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black transition-colors px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-neutral-100 cursor-pointer"
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

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-neutral-100 border border-neutral-300 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-neutral-800 uppercase tracking-wider sm:tracking-widest">
              <img src={logo4MImg} alt="4M" className="h-3.5 sm:h-4 w-auto object-contain" />
              <span>4M CMMS</span>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Request Demo
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          HERO SECTION (No Red Color)
         ========================================================================= */}
      <section className="relative py-12 sm:py-20 lg:py-24 border-b border-neutral-200 overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-[11px] sm:text-xs font-bold text-neutral-900 uppercase tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5 text-neutral-700" />
                <span>Smart Maintenance Architecture</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                Intelligent Enterprise Maintenance Powered by <span className="underline decoration-neutral-400 decoration-2 underline-offset-6">4M Philosophy</span>
              </h1>

              <p className="text-sm sm:text-lg text-neutral-600 leading-relaxed font-normal">
                4M CMMS is an industrial-grade maintenance operations platform that synchronizes <strong>Man</strong>, <strong>Machine</strong>, <strong>Method</strong>, and <strong>Material</strong> into one unified digital command center.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('four-m-breakdown');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all text-center cursor-pointer"
                >
                  Explore The 4M Pillars
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all text-center cursor-pointer"
                >
                  Schedule Consultation
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
              <div className="relative rounded-2xl sm:rounded-3xl bg-neutral-950 p-2 shadow-2xl border border-neutral-300 overflow-hidden group">
                <img
                  src={cmmsImg}
                  alt="4M CMMS Dashboard Showcase"
                  className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 rounded-xl sm:rounded-2xl pointer-events-none" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-300 font-bold">
                    Telemetry Connected
                  </span>
                  <p className="text-xs sm:text-sm font-bold">Real-Time Factory Maintenance Telemetry</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 4M PILLARS DEEP DIVE SECTION
         ========================================================================= */}
      <section id="four-m-breakdown" className="py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-neutral-900 uppercase tracking-[0.25em]">
              The Core Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              The Four Critical Elements of Operations
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              A comprehensive system designed to cover every touchpoint of industrial facility operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fourMData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border-2 border-neutral-200/90 rounded-3xl p-6 flex flex-col justify-between hover:border-neutral-900 hover:shadow-2xl hover:shadow-neutral-300/70 shadow-lg transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden"
                >
                  {/* Top Edge Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-200 group-hover:bg-neutral-900 transition-all duration-300" />

                  <div>
                    {/* Pillar Image Preview */}
                    <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-5 border-2 border-neutral-200/90 bg-neutral-100 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-neutral-900 border border-neutral-300 shadow-md">
                        {item.badge}
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-sm">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-950 group-hover:text-black transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-600 font-semibold">{item.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13.5px] text-neutral-700 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>

                    {/* Key Feature Points */}
                    <div className="space-y-2.5 border-t border-neutral-200 pt-4">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-800 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-neutral-900 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY BENEFITS & VALUE DRIVERS
         ========================================================================= */}
      <section className="py-20 border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-neutral-900 uppercase tracking-[0.25em]">
              Measurable Business Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Why Global Enterprises Choose 4M CMMS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cmmsBenefits.map((benefit, bIdx) => {
              const BIcon = benefit.icon;
              return (
                <div
                  key={bIdx}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-neutral-400 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <BIcon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-950 mb-2">{benefit.name}</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onSelectTab={onNavigate} />
    </div>
  );
}
