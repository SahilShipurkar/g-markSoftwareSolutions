import React, { useState } from 'react';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="page-view chrome contact-view" aria-label="Contact">
      <div className="view-header">
        <h1 className="view-title">Contact Us</h1>
        <p className="view-subtitle">
          Connect with our engineering or sales team. We typically respond within 24 hours.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Contact Form Glass Panel */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="form-success-state">
              <span className="success-icon">✓</span>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. A G-Mark specialist will get in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="c-name">Full Name *</label>
                  <input
                    type="text"
                    id="c-name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email Address *</label>
                  <input
                    type="email"
                    id="c-email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-phone">Contact Number</label>
                <input
                  type="tel"
                  id="c-phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-msg">Your Message *</label>
                <textarea
                  id="c-msg"
                  rows={3}
                  required
                  placeholder="How can we assist your business?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" disabled={submitting} className="btn-learn-more btn-submit">
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Information Cards */}
        <div className="contact-sidebar-info">
          <div className="info-glass-card">
            <h3>📍 Office HQ</h3>
            <p><strong>G Mark Software Pvt. Ltd.</strong></p>
            <p className="card-meta">Moshi, Pune, Maharashtra – 412105, India</p>
          </div>

          <div className="info-glass-card">
            <h3>📞 Direct Contact</h3>
            <p><strong>Phone:</strong> <a href="tel:+919657363967" className="card-link">+91-9657363967</a></p>
            <p><strong>Email:</strong> <a href="mailto:gmarksoftware@gmail.com" className="card-link">gmarksoftware@gmail.com</a></p>
          </div>

          <div className="info-glass-card highlight-card">
            <span className="card-tag">ENTERPRISE INQUIRIES</span>
            <p>Looking for a custom CMMS demo or IoT telemetry deployment? We provide bespoke integrations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
