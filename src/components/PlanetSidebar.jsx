import React, { useEffect, useRef } from 'react';
import { PLANETS } from '../constants/planetsData';

export default function PlanetSidebar({ currentPlanet, isFirstRender }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (!isFirstRender && sidebarRef.current) {
      sidebarRef.current.classList.remove('is-switching');
      void sidebarRef.current.offsetWidth; // force reflow
      sidebarRef.current.classList.add('is-switching');
    }
  }, [currentPlanet, isFirstRender]);

  return (
    <aside ref={sidebarRef} className="planet-list chrome" aria-label="Planets">
      {PLANETS.map((planet) => {
        const isActive = planet.toLowerCase() === currentPlanet.toLowerCase();
        return (
          <span
            key={planet}
            className={`planet-item ${isActive ? 'active' : ''}`}
          >
            {planet}
          </span>
        );
      })}
    </aside>
  );
}
