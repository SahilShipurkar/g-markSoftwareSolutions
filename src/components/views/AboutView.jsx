import React from 'react';

export default function AboutView() {
  const coreValues = [
    {
      title: 'Innovation',
      desc: 'Designing state-of-the-art software systems.',
      icon: '⚡'
    },
    {
      title: 'Reliability',
      desc: 'High-availability platforms engineered for mission-critical resilience.',
      icon: '🛡️'
    },
    {
      title: 'Velocity',
      desc: 'Rapid deployment cycles and real-time streaming analytics.',
      icon: '🚀'
    }
  ];

  const solutions = [
    {
      badge: 'CMMS PLATFORM',
      title: '4M Smart Maintenance',
      desc: 'Streamlines maintenance operations with real-time asset telemetry & work-order tracking.'
    },
    {
      badge: 'AGRITECH PLATFORM',
      title: 'GramUnnati Agriculture',
      desc: 'Empowers agricultural operations to track, manage, and optimize crop health with field IoT.'
    },
    {
      badge: 'TELEMETRY LAB',
      title: 'Industrial IoT Networks',
      desc: 'End-to-end sensor connectivity, industrial edge gateways, and telemetry data cloud.'
    }
  ];

  return (
    <section className="page-view chrome about-view" aria-label="About Gmark">
      <div className="view-header">
        <h1 className="view-title">About G Mark Software</h1>
        <p className="view-subtitle">
          <strong>G Mark Software Private Limited</strong> is a premium enterprise IT and industrial software provider, specializing in digital platforms, 4M CMMS, smart agriculture, and IoT networks.
        </p>
      </div>

      <div className="values-grid">
        {coreValues.map((v, i) => (
          <div key={i} className="info-glass-card value-card">
            <span className="value-icon">{v.icon}</span>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="solutions-overview-section">
        <h2 className="section-mini-heading">Flagship Enterprise Platforms</h2>
        <div className="solutions-cards-grid">
          {solutions.map((s, i) => (
            <div key={i} className="solution-mini-card">
              <span className="solution-tag">{s.badge}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
