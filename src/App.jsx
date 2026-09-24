import React, { useState, useRef, useCallback, useEffect } from 'react';
import techCityBg from './assets/tech-city-bg.jpg';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import SupportView from './components/views/SupportView';
import AboutView from './components/views/AboutView';
import ContactView from './components/views/ContactView';
import Preloader from './components/Preloader';
import TechCityCanvas from './components/TechCityCanvas';
import CustomCursor from './components/CustomCursor';
import PortfolioFeatures from './components/PortfolioFeatures';
import ProjectsCaseStudies from './components/ProjectsCaseStudies';
import WorkflowBlueprint from './components/WorkflowBlueprint';
import StatsBanner from './components/StatsBanner';
import AccelerateCTA from './components/AccelerateCTA';
import Footer from './components/Footer';
import CmmsPageView from './components/views/CmmsPageView';
import IotPageView from './components/views/IotPageView';
import GramUnnatiPageView from './components/views/GramUnnatiPageView';

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const experienceRef = useRef(null);
  const historyStackRef = useRef([]);

  // Guarantee resetting to top / 1st home page ONLY upon initial page refresh / reload
  useEffect(() => {
    document.body.classList.remove('intro-ready', 'preload-complete');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 60);

    const handleBeforeUnload = () => {
      document.body.classList.remove('intro-ready', 'preload-complete');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Reveal Animation when Preloader completes
  const handlePreloadComplete = useCallback(() => {
    setIsPreloading(false);
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.classList.add('intro-ready');
    if (experienceRef.current) {
      experienceRef.current.classList.remove('content-revealing');
      void experienceRef.current.offsetWidth;
      experienceRef.current.classList.add('content-revealing');
    }
  }, []);

  const handleSelectTab = (tab) => {
    if (tab === 'back') {
      handleBack();
      return;
    }

    if (tab === activeTab) {
      return;
    }

    // Save previous page and its current scroll position into the navigation history stack
    historyStackRef.current.push({
      tab: activeTab,
      scrollY: window.scrollY
    });

    setActiveTab(tab);

    // Scroll to top for newly opened view
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (experienceRef.current) {
      experienceRef.current.classList.remove('content-revealing');
      void experienceRef.current.offsetWidth;
      experienceRef.current.classList.add('content-revealing');
    }
  };

  const handleBack = () => {
    if (historyStackRef.current.length > 0) {
      const prev = historyStackRef.current.pop();
      setActiveTab(prev.tab);

      // Restore the previous view's exact scroll position
      setTimeout(() => {
        if (prev.scrollY !== undefined && prev.scrollY > 0) {
          window.scrollTo({ top: prev.scrollY, left: 0, behavior: 'instant' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      }, 30);
    } else {
      setActiveTab('home');
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 30);
    }
  };

  const isDetailPage = activeTab === 'cmms' || activeTab === 'iot' || activeTab === 'gramunnati';

  return (
    <>
      {/* SECTION: Standalone Dedicated White-Theme Detail Pages */}
      {activeTab === 'cmms' && (
        <div className="relative w-full min-h-screen bg-white">
          <CmmsPageView onNavigate={handleSelectTab} onBack={handleBack} />
          <CustomCursor />
        </div>
      )}

      {activeTab === 'iot' && (
        <div className="relative w-full min-h-screen bg-white">
          <IotPageView onNavigate={handleSelectTab} onBack={handleBack} />
          <CustomCursor />
        </div>
      )}

      {activeTab === 'gramunnati' && (
        <div className="relative w-full min-h-screen bg-white">
          <GramUnnatiPageView onNavigate={handleSelectTab} onBack={handleBack} />
          <CustomCursor />
        </div>
      )}

      {/* SECTION: Main Platform Experience (DOM preserved when viewing detail pages) */}
      <div
        className="relative w-full min-h-screen bg-[#06080d] selection:bg-white selection:text-black"
        style={{ display: isDetailPage ? 'none' : 'block' }}
      >
      {/* SECTION 1: G-Mark Software Solutions Landing Experience */}
      <main ref={experienceRef} className="experience" data-theme="software" data-view={activeTab}>
        {/* High-Tech Software Digital City Background */}
        <div className="backgrounds" aria-hidden="true">
          <div
            className="background is-visible tech-city-backdrop"
            style={{
              backgroundImage: `url(${techCityBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: activeTab === 'home' ? 'brightness(0.92) contrast(1.05)' : 'brightness(0.6) blur(2px) contrast(1.1)'
            }}
          />
        </div>

        {/* 3D Cyber Buildings and Data Highway Canvas (only during preloader) */}
        <TechCityCanvas isPreloading={isPreloading} />

        {/* Preloader Sequence (snappy telemetry counter + logo docking) */}
        <Preloader onComplete={handlePreloadComplete} />

        {/* Gradient Shade for Contrast */}
        <div className="shade" aria-hidden="true" />

        {/* Navigation Header */}
        <Header activeTab={activeTab} onSelectTab={handleSelectTab} />

        {/* Dynamic Content Views */}
        <div className="view-container">
          {activeTab === 'home' && <HeroContent onNavigate={handleSelectTab} />}
          {activeTab === 'support' && <SupportView onContactClick={handleSelectTab} />}
          {activeTab === 'about' && <AboutView onExploreClick={handleSelectTab} />}
          {activeTab === 'contact' && <ContactView />}
        </div>
      </main>

      {/* SECTION 2: G-Mark Industrial Solutions Section */}
      <PortfolioFeatures onNavigate={handleSelectTab} />

      {/* SECTION 3: Projects / Case Studies Section (White Background, DM Sans, Framer Motion) */}
      <ProjectsCaseStudies />

      {/* SECTION 4: Workflow Blueprint / Mastery in Every Phase (White Background, Interactive Accordion) */}
      <WorkflowBlueprint />

      {/* SECTION 5: Metrics Banner / We Take Pride In Our Numbers (White Theme) */}
      <StatsBanner />

      {/* SECTION 6: Accelerate Business CTA (White Theme) */}
      <AccelerateCTA onGetStarted={handleSelectTab} />

      {/* SECTION 7: White Theme Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Custom Interactive Cursor */}
      <CustomCursor />
    </div>
    </>
  );
}


