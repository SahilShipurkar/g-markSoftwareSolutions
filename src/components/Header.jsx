import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ChevronRight, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Header({ activeTab, onSelectTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'support', label: 'Support' },
    { id: 'about', label: 'About Gmark' },
    { id: 'contact', label: 'Contact' }
  ];

  const solutions = [
    { id: 'cmms', label: '4M Maintenance CMMS', badge: 'CMMS Platform', isDetailPage: true },
    { id: 'iot', label: 'Industrial IoT Telemetry', badge: 'Edge IoT', isDetailPage: true },
    { id: 'gramunnati', label: 'GramUnnati Smart Agri-Tech', badge: 'Agri-Tech', isDetailPage: true },
  ];

  // Close mobile menu on ESC or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (tabId, sectionId) => {
    setIsMobileMenuOpen(false);
    if (sectionId) {
      if (activeTab !== 'home') {
        onSelectTab('home');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (onSelectTab) {
      onSelectTab(tabId);
    }
  };

  return (
    <>
      <header className="header chrome" aria-label="Main Navigation">
        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex header-actions">
          <nav className="nav" aria-label="Primary navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleNavClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <button
            className="menu"
            type="button"
            onClick={() => handleNavClick('contact')}
          >
            Get Started
          </button>
        </div>

        {/* MOBILE COMPACT HEADER (Dual Row / Floating Pill matching Navbharat Agro) */}
        <div className="flex md:hidden w-full items-center justify-between gap-2">
          {/* Left placeholder to allow the docked logo to sit cleanly */}
          <div className="w-28 sm:w-36 h-9" />

          {/* Right Mobile Actions: Compact Tabs + Hamburger Menu */}
          <div className="flex items-center gap-1.5 ml-auto">
            {/* Quick-Action Pills */}
            <div className="flex items-center bg-[#0a101a]/85 backdrop-blur-xl border border-white/25 rounded-full p-1 shadow-lg">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-colors cursor-pointer ${
                  activeTab === 'home'
                    ? 'bg-white text-black font-bold shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-colors cursor-pointer ${
                  activeTab === 'about'
                    ? 'bg-white text-black font-bold shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                About
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              className="w-9 h-9 rounded-full bg-white/95 border border-white/40 text-black flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer hover:bg-white"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-FEATURED SLIDE-DOWN DRAWER / SHEET */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-md flex flex-col justify-start pt-16 px-4 pb-6 overflow-y-auto animate-fade-in md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm mx-auto bg-[#0d131f]/95 border border-white/20 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-4 text-white animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5A5F] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  G-Mark Navigation
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Primary Tab Navigation Links */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 px-2 block mb-1">
                Main Views
              </span>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleNavClick(tab.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-black' : 'text-white/40'}`} />
                  </button>
                );
              })}
            </div>

            {/* Flagship Industrial Solutions Links */}
            <div className="space-y-1.5 pt-1 border-t border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 px-2 block mb-1">
                Flagship Platforms
              </span>
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  type="button"
                  onClick={() => handleNavClick(sol.id)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all cursor-pointer group"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white group-hover:text-[#FF8A8E] transition-colors">
                      {sol.label}
                    </span>
                    <span className="text-[10px] text-white/50 font-medium">{sol.badge}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {/* Quick Section Anchors */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
              <button
                type="button"
                onClick={() => handleNavClick('home', 'workflow-blueprint')}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-white/80 text-center transition-colors cursor-pointer"
              >
                Workflow Blueprint
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('home', 'projects-case-studies')}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-white/80 text-center transition-colors cursor-pointer"
              >
                Case Studies
              </button>
            </div>

            {/* Direct Contact & CTA Button */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 px-4 rounded-xl bg-[#FF5A5F] hover:bg-[#ff4348] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Started / Request Demo</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-white/60 pt-1">
                <a
                  href="tel:+919657363967"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#FF8A8E]" />
                  <span>+91-9657363967</span>
                </a>
                <span>•</span>
                <a
                  href="mailto:gmarksoftware@gmail.com"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3 h-3 text-[#FF8A8E]" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
