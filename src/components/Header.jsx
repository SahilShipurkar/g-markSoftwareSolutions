import React from 'react';

export default function Header({ activeTab, onSelectTab }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'support', label: 'Support' },
    { id: 'about', label: 'About Gmark' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header chrome">
      <div className="header-actions">
        <nav className="nav" aria-label="Primary navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onSelectTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <button
          className="menu"
          type="button"
          onClick={() => onSelectTab('contact')}
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
