import React from 'react';
import {
  Sparkle,
  ArrowUpRight,
  Cpu,
  Radio,
  Sprout,
  Activity,
  Zap,
  ShieldCheck,
  Server,
  Database,
  CloudRain,
  Sun,
  Flame
} from 'lucide-react';
import CinematicSlowMotionBg from './CinematicSlowMotionBg';
import smartAgriBg from '../assets/smart-agri-bg.jpg';
import smartIotBg from '../assets/smart-iot-bg.jpg';
import smartMaintenanceBg from '../assets/smart-maintenance-bg.jpg';
import logo4M from '../assets/4M.png';
import gramUnnatiLogo from '../assets/Final Logo-09.jpg.jpeg';

// Custom SVG IoT Logo in Dark Theme matching the system aesthetic
function IndustrialIoTLogo({ className = 'w-16 h-16' }) {
  return (
    <div className="liquid-glass p-2.5 rounded-2xl flex items-center justify-center shadow-2xl border border-sky-400/30 backdrop-blur-md bg-black/40">
      <svg className="w-12 h-12 text-sky-400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="iotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
        <g transform="translate(0, -5)">
          <circle cx="100" cy="100" r="75" stroke="#38BDF8" strokeWidth="4" strokeDasharray="16 12" opacity="0.4" />
          <circle cx="100" cy="100" r="55" stroke="#0EA5E9" strokeWidth="3" strokeDasharray="8 6" opacity="0.8" />
          <circle cx="100" cy="100" r="22" fill="url(#iotGrad)" />
          <path d="M 85,90 C 90,85 110,85 115,90" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <path d="M 77,82 C 87,72 113,72 123,82" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <path d="M 69,74 C 84,59 116,59 131,74" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="65" r="10" fill="#05070D" stroke="url(#iotGrad)" strokeWidth="3" />
          <line x1="100" y1="100" x2="50" y2="65" stroke="url(#iotGrad)" strokeWidth="3" opacity="0.9" />
          <circle cx="150" cy="65" r="10" fill="#05070D" stroke="url(#iotGrad)" strokeWidth="3" />
          <line x1="100" y1="100" x2="150" y2="65" stroke="url(#iotGrad)" strokeWidth="3" opacity="0.9" />
          <circle cx="100" cy="155" r="10" fill="#05070D" stroke="url(#iotGrad)" strokeWidth="3" />
          <line x1="100" y1="100" x2="100" y2="155" stroke="url(#iotGrad)" strokeWidth="3" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

// Smart Agriculture & IoT Marquee Icons
const agriRow1 = [
  { name: 'Precision Crop AI', icon: Sprout },
  { name: 'Telemetry Radio', icon: Radio },
  { name: 'IoT Edge Core', icon: Cpu },
  { name: 'Satellite Rain', icon: CloudRain },
  { name: 'Solar Sensor', icon: Sun },
  { name: 'Diagnostic Pulse', icon: Activity },
  { name: 'Cloud Database', icon: Database },
  { name: 'Secure Telemetry', icon: ShieldCheck },
];

const agriRow2 = [
  { name: 'Edge Gateway', icon: Server },
  { name: 'Power Telemetry', icon: Zap },
  { name: 'Thermal Imaging', icon: Flame },
  { name: 'Bio Growth Node', icon: Sprout },
  { name: 'Network Mesh', icon: Radio },
  { name: 'Telemetry Micro', icon: Cpu },
  { name: 'Cloud DB', icon: Database },
  { name: 'Security Core', icon: ShieldCheck },
];

export default function PortfolioFeatures({ onNavigate }) {
  return (
    <section id="industrial-solutions" className="relative w-full min-h-screen lg:h-screen bg-white text-neutral-900 font-['Inter',sans-serif] antialiased px-3.5 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-10 lg:py-10 flex flex-col justify-between overflow-visible lg:overflow-hidden z-20 border-t border-neutral-200 shadow-sm">
      {/* Top Header Row (Clean White Background Theme) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-bold tracking-tight text-neutral-950">
            G-Mark <span className="text-[#FF5A5F]">Industrial Solutions</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] leading-[1.6] text-neutral-600 max-w-3xl font-normal">
            Precision intelligence platforms engineered for Smart Agriculture, Industrial IoT telemetry networks, and 4M intelligent enterprise maintenance.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate && onNavigate('contact')}
          className="bg-neutral-950 text-white hover:bg-neutral-800 rounded-full px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 shrink-0 cursor-pointer border border-neutral-900 active:scale-95"
        >
          Request Enterprise Demo
        </button>
      </div>

      {/* Grid: 3 columns on lg, 2 on md, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 flex-1 min-h-0 pt-2 pb-1">
        {/* =========================================================================
            COLUMN 1: Smart Maintenance Management System (with 4M Logo)
           ========================================================================= */}
        <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[380px] lg:min-h-0 shadow-2xl border border-neutral-300/40 group">
          {/* Photorealistic Slow-Motion Background (Bright & Clear) */}
          <CinematicSlowMotionBg
            imageSrc={smartMaintenanceBg}
            overlayOpacity={0.15}
          />

          {/* Top: Section Label */}
          <div className="relative z-10 flex items-center justify-center gap-1.5 text-white/95 uppercase tracking-[0.22em] text-[11px] font-semibold drop-shadow-md">
            <Sparkle className="h-3 w-3" strokeWidth={1.5} />
            <span>SMART MAINTENANCE</span>
            <Sparkle className="h-3 w-3" strokeWidth={1.5} />
          </div>

          {/* Center: 4M Logo & Title */}
          <div className="relative z-10 my-auto py-2 text-center flex flex-col items-center">
            {/* 4M Official Logo */}
            <div className="liquid-glass p-3 rounded-2xl flex items-center justify-center mb-3.5 shadow-2xl border border-white/30 backdrop-blur-md bg-black/40 hover:scale-105 transition-transform">
              <img
                src={logo4M}
                alt="4M Maintenance System Logo"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_4px_16px_rgba(255,90,95,0.35)]"
              />
            </div>

            <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest font-semibold uppercase bg-black/60 text-[#FF8A8E] border border-[#FF5A5F]/40 mb-2 backdrop-blur-md shadow-md">
              CMMS PLATFORM
            </span>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Smart Maintenance<br />
              <span className="text-[#FF5A5F] drop-shadow-[0_0_12px_rgba(255,90,95,0.6)]">Management System</span>
            </h3>

            <p className="mt-2 text-xs sm:text-[13px] text-white/95 font-medium max-w-xs mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
              4M is a comprehensive CMMS software that streamlines maintenance operations and provides unified connectivity for all industrial equipment.
            </p>
          </div>

          {/* Bottom: Learn More Button */}
          <div className="relative z-10 w-full pt-2">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('cmms')}
              className="liquid-glass w-full rounded-full py-2.5 sm:py-3 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/30 hover:border-white/60 shadow-xl bg-black/40 backdrop-blur-md"
            >
              <span>Learn More</span>
              <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* =========================================================================
            COLUMN 2: Client Voice / Industry Impact & Smart Industrial IoT
           ========================================================================= */}
        <div className="grid grid-rows-1 md:grid-rows-[auto_1fr] gap-3 md:gap-4 min-h-0 flex-1">
          {/* Top - Industry Impact card (Minimized & Sleek) */}
          <div className="relative rounded-2xl bg-[#283838] p-3.5 sm:p-4 noise-overlay flex flex-col justify-center gap-1.5 overflow-hidden border border-neutral-300/40 shadow-md text-white">
            <div className="relative z-10 flex items-center justify-start gap-1.5 text-white/80 uppercase tracking-[0.2em] text-[10px] sm:text-[10.5px] font-semibold">
              <Sparkle className="h-3 w-3" strokeWidth={1.5} />
              <span>INDUSTRY IMPACT</span>
              <Sparkle className="h-3 w-3" strokeWidth={1.5} />
            </div>

            <p className="relative z-10 text-xs sm:text-[12.5px] leading-relaxed text-white/90 italic drop-shadow-sm">
              "G-Mark revolutionized our enterprise infrastructure with 24/7 telemetry and proactive maintenance that reduced plant downtime by 42%."
            </p>
          </div>

          {/* Bottom - Smart Industrial IoT Telemetry & Networks card (Expanded) */}
          <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[300px] flex-1 border border-neutral-300/40 shadow-2xl group">
            {/* Photorealistic Slow-Motion Background (Bright & Clear) */}
            <CinematicSlowMotionBg
              imageSrc={smartIotBg}
              overlayOpacity={0.18}
            />

            {/* Top Label */}
            <div className="relative z-10 flex items-center justify-center gap-1.5 text-white/95 uppercase tracking-[0.22em] text-[11px] font-semibold drop-shadow-md">
              <Sparkle className="h-3 w-3" strokeWidth={1.5} />
              <span>INDUSTRIAL IOT & TELEMETRY</span>
              <Sparkle className="h-3 w-3" strokeWidth={1.5} />
            </div>

            {/* Center Content with IoT Logo & Clean Title */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-xs mx-auto my-auto py-2">
              <IndustrialIoTLogo className="mb-2.5" />

              <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest font-semibold uppercase bg-black/60 text-sky-300 border border-sky-400/40 mb-2 backdrop-blur-md shadow-md">
                EDGE PLATFORM
              </span>

              <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Smart Industrial IoT<br />
                <span className="text-[#FF5A5F] drop-shadow-[0_0_10px_rgba(255,90,95,0.5)]">Telemetry & Networks</span>
              </h4>

              <p className="mt-2 text-xs sm:text-[13px] text-white/95 font-medium leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
                High-frequency telemetry networks connecting factory sensors, PLC nodes, and live operations dashboards.
              </p>
            </div>

            {/* Bottom: Learn More Button */}
            <div className="relative z-10 w-full pt-2">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('iot')}
                className="liquid-glass w-full rounded-full py-2.5 sm:py-3 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/30 hover:border-white/60 shadow-xl bg-black/40 backdrop-blur-md"
              >
                <span>Learn More</span>
                <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            COLUMN 3: Smart Agricultural Management System (Full Height like 4M)
           ========================================================================= */}
        <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[380px] lg:min-h-0 shadow-2xl border border-neutral-300/40 group">
          {/* Photorealistic Slow-Motion Background (Bright & Clear) */}
          <CinematicSlowMotionBg
            imageSrc={smartAgriBg}
            overlayOpacity={0.15}
          />

          {/* Top: Section Label */}
          <div className="relative z-10 flex items-center justify-center gap-1.5 text-white/95 uppercase tracking-[0.22em] text-[11px] font-semibold drop-shadow-md">
            <Sparkle className="h-3 w-3" strokeWidth={1.5} />
            <span>SMART AGRICULTURE</span>
            <Sparkle className="h-3 w-3" strokeWidth={1.5} />
          </div>

          {/* Center: GramUnnati Logo & Title */}
          <div className="relative z-10 my-auto py-2 text-center flex flex-col items-center">
            {/* GramUnnati Official Logo */}
            <div className="liquid-glass p-2.5 rounded-2xl flex items-center justify-center mb-3 shadow-2xl border border-white/30 backdrop-blur-md bg-white hover:scale-105 transition-transform">
              <img
                src={gramUnnatiLogo}
                alt="GramUnnati Agricultural Logo"
                className="h-11 sm:h-13 w-auto object-contain"
              />
            </div>

            <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest font-semibold uppercase bg-black/60 text-emerald-300 border border-emerald-400/40 mb-2 backdrop-blur-md shadow-md">
              PRECISION AGRICULTURE
            </span>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Smart Agricultural<br />
              <span className="text-[#FF5A5F] drop-shadow-[0_0_12px_rgba(255,90,95,0.6)]">Management System</span>
            </h3>

            <p className="mt-2 text-xs sm:text-[13px] text-white/95 font-medium max-w-xs mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)]">
              GramUnnati empowers precision crop tracking, automated soil moisture analytics, and real-time agricultural telemetry.
            </p>

            {/* Scrolling Marquee Rows */}
            <div className="w-full relative flex flex-col gap-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-1 mt-3">
              {/* Row 1: Scrolls Left */}
              <div className="flex gap-2 w-max animate-marquee-left">
                {[...agriRow1, ...agriRow1].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`agri-r1-${idx}`}
                      className="liquid-glass h-10 w-10 md:h-11 md:w-11 rounded-xl flex items-center justify-center shrink-0 hover:bg-white/20 transition-colors bg-black/40 backdrop-blur-md border border-white/20"
                      title={item.name}
                    >
                      <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                    </div>
                  );
                })}
              </div>

              {/* Row 2: Scrolls Right */}
              <div className="flex gap-2 w-max animate-marquee-right">
                {[...agriRow2, ...agriRow2].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`agri-r2-${idx}`}
                      className="liquid-glass h-10 w-10 md:h-11 md:w-11 rounded-xl flex items-center justify-center shrink-0 hover:bg-white/20 transition-colors bg-black/40 backdrop-blur-md border border-white/20"
                      title={item.name}
                    >
                      <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom: Learn More Button */}
          <div className="relative z-10 w-full pt-2">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('gramunnati')}
              className="liquid-glass w-full rounded-full py-2.5 sm:py-3 px-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/30 hover:border-white/60 shadow-xl bg-black/40 backdrop-blur-md"
            >
              <span>Learn More</span>
              <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
