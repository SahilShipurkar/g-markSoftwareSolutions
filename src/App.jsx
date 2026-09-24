import React, { useState, useRef, useCallback } from 'react';
import techCityBg from './assets/tech-city-bg.jpg';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import Preloader from './components/Preloader';
import TechCityCanvas from './components/TechCityCanvas';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const experienceRef = useRef(null);

  // Reveal Animation when Preloader completes
  const handlePreloadComplete = useCallback(() => {
    setIsPreloading(false);
    document.body.classList.add('intro-ready');
    if (experienceRef.current) {
      experienceRef.current.classList.remove('content-revealing');
      void experienceRef.current.offsetWidth;
      experienceRef.current.classList.add('content-revealing');
    }
  }, []);

  return (
    <main ref={experienceRef} className="experience" data-theme="software">
      {/* High-Tech Software Digital City Background */}
      <div className="backgrounds" aria-hidden="true">
        <div
          className="background is-visible tech-city-backdrop"
          style={{
            backgroundImage: `url(${techCityBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.92) contrast(1.05)'
          }}
        />
      </div>

      {/* 3D Cyber Buildings and Data Highway Canvas */}
      <TechCityCanvas isPreloading={isPreloading} />

      {/* Preloader Sequence (3s telemetry counter + logo docking) */}
      <Preloader onComplete={handlePreloadComplete} />

      {/* Gradient Shade for Contrast */}
      <div className="shade" aria-hidden="true" />

      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <HeroContent />

      {/* Custom Interactive Cursor */}
      <CustomCursor />
    </main>
  );
}
