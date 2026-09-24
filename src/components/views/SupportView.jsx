import React from 'react';

export default function SupportView({ onContactClick }) {
  return (
    <section className="page-view chrome support-view" aria-label="Support">
      <div className="view-header">
        <h1 className="view-title">Support & Assistance</h1>
        <p className="view-subtitle">
          At <strong>G Mark Software Pvt. Ltd.</strong>, we are committed to providing reliable support for our software products and services.
        </p>
      </div>

      <div className="support-cards-grid">
        <div className="info-glass-card">
          <div className="card-icon-wrap">📍</div>
          <h3>Headquarters</h3>
          <p>G Mark Software Private Limited</p>
          <span className="card-meta">Moshi, Pune, Maharashtra – 412105, India</span>
        </div>

        <div className="info-glass-card">
          <div className="card-icon-wrap">📞</div>
          <h3>Direct Helpline</h3>
          <p>Mon - Sat (9am - 7pm IST)</p>
          <a href="tel:+919657363967" className="card-link">+91-9657363967</a>
        </div>

        <div className="info-glass-card">
          <div className="card-icon-wrap">✉️</div>
          <h3>Email Support</h3>
          <p>Technical & General Queries</p>
          <a href="mailto:gmarksoftware@gmail.com" className="card-link">gmarksoftware@gmail.com</a>
        </div>
      </div>

      <div className="support-cta-panel">
        <div>
          <h3>Need customized enterprise support?</h3>
          <p>Speak directly with our solutions team for bespoke maintenance and SLAs.</p>
        </div>
        <button
          type="button"
          className="btn-learn-more"
          onClick={() => onContactClick?.('contact')}
        >
          Submit Request
        </button>
      </div>
    </section>
  );
}
