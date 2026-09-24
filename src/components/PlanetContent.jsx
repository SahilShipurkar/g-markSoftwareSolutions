import React from 'react';

export default function PlanetContent({ state }) {
  return (
    <section className="planet-content chrome" aria-live="polite">
      <h1 id="planet-title">{state.name.toUpperCase()}</h1>
    </section>
  );
}
