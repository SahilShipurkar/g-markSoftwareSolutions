import React from 'react';

export default function Header() {
  return (
    <header className="header chrome">
      <div className="header-actions">
        <nav className="nav" aria-label="Primary navigation">
          <a className="active" href="#about">About</a>
          <a href="#explore">Explore</a>
          <a href="#planets">Planets</a>
        </nav>
        <button className="menu" type="button">Menu</button>
      </div>
    </header>
  );
}
