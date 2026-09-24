import React from 'react';

export default function HeroContent() {
  return (
    <section className="hero-content chrome" aria-live="polite">
      <div className="hero-badge">
        <span className="badge-dot" />
        <span>G-MARK SOLUTIONS</span>
      </div>
      
      <h1 className="hero-title">
        The New Standard<br />
        of Digital<br />
        Industry
      </h1>

      <p className="hero-description">
        Use Accurate Data to Get a <span className="highlight-red">360-Degree</span> View of Your Business.<br />
        Accelerate decisions with industrial-grade intelligence.
      </p>

      <div className="hero-actions">
        <button type="button" className="btn-learn-more">
          Learn More
        </button>
      </div>
    </section>
  );
}
