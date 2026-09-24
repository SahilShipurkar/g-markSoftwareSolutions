import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import logoBlackImg from '../assets/G Mark-black.png';

export default function Footer({ onSelectTab }) {
  const handleNav = (tabId, sectionId) => {
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onSelectTab && tabId) {
      onSelectTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#dbe0e6]/90 backdrop-blur-2xl text-neutral-900 border-t border-[#c5cdd6] pt-14 pb-8 overflow-hidden font-['Inter',sans-serif] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)]">
      {/* Frosted Deeper Grey Glass Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e5e9ee]/70 via-[#dbe0e6]/85 to-[#cfd6de]/90 pointer-events-none" />
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#c2cbda]/70">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={logoBlackImg}
                alt="G-Mark Software Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-sm font-normal">
              Delivering high-performance industrial telemetry, 4M maintenance solutions, and intelligent IoT architectures to empower modern manufacturing.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-neutral-800 shrink-0 mt-0.5" />
                <span>G Mark Software Pvt. Ltd., Moshi, Pune, Maharashtra, India - 412105</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-neutral-800 shrink-0" />
                <a href="tel:+919657363967" className="hover:text-black transition-colors font-medium">
                  +91-9657363967
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-neutral-800 shrink-0" />
                <a href="mailto:gmarksoftware@gmail.com" className="hover:text-black transition-colors font-medium">
                  gmarksoftware@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-[0.2em]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', 'industrial-solutions')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  4M Maintenance CMMS
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', 'industrial-solutions')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Industrial IoT Telemetry
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', 'industrial-solutions')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  GramUnnati Smart Agri-Tech
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', 'projects-case-studies')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Cloud Edge Ecosystem
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Navigation */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-[0.2em]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  About G-Mark
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', 'workflow-blueprint')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Workflow Blueprint
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home', 'projects-case-studies')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('support')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Support
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="hover:text-black hover:translate-x-0.5 transition-all text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action & Standards */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-[0.2em]">
              Connect
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Partner with us to build robust industrial IoT & automation architectures.
            </p>
            <div>
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} G Mark Software Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="hover:text-neutral-950 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-neutral-400">•</span>
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="hover:text-neutral-950 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-neutral-400">•</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Telemetry Systems Live</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
