import React from 'react';

export default function PortalSection({
  state,
  portalRef,
  portalVideoRef,
  portalImageRef,
  onTravel,
  onPointerEnter,
  onPointerLeave
}) {
  return (
    <section className="portal-wrap chrome" aria-label="Next destination">
      <div className="portal-heading">
        <span>Next:</span>
        <span>
          <span id="next-number">{state.number}</span>{' '}
          <strong id="next-name">{state.next}</strong>
        </span>
      </div>
      <button
        ref={portalRef}
        className="portal"
        id="portal"
        type="button"
        aria-label={`Travel to ${state.next}`}
        onClick={onTravel}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        <video
          ref={portalVideoRef}
          id="portal-video"
          src={state.portal || ''}
          muted
          playsInline
          preload="auto"
          style={{ display: state.image ? 'none' : 'block' }}
        />
        <img
          ref={portalImageRef}
          id="portal-image"
          src={state.image || ''}
          alt={state.next}
          style={{ display: state.image ? 'block' : 'none' }}
        />
      </button>
    </section>
  );
}
