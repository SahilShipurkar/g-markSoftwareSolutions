import React, { useEffect, useState } from 'react';
import gMarkLogo from '../assets/G Mark.png';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isDocked, setIsDocked] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const [isBackground, setIsBackground] = useState(false);
  const [hideCount, setHideCount] = useState(false);

  useEffect(() => {
    let animId;
    let isCancelled = false;
    const duration = 1400; // Snappy 1.4s countdown sequence
    const startTime = performance.now();

    function finish() {
      if (isCancelled) return;
      setProgress(100);
      setIsLeaving(true);
      setIsDocked(true);
      setIsBackground(true);
      document.body.classList.add('preload-complete');

      onComplete();

      setTimeout(() => {
        if (!isCancelled) setHideCount(true);
      }, 750);

      setTimeout(() => {
        if (!isCancelled) setIsSettled(true);
      }, 2000);
    }

    function tick(now) {
      if (isCancelled) return;
      const elapsed = now - startTime;
      const currentPct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentPct);

      if (elapsed < duration) {
        animId = requestAnimationFrame(tick);
      } else {
        finish();
      }
    }

    animId = requestAnimationFrame(tick);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animId);
    };
  }, [onComplete]);

  return (
    <>
      <div
        className={`preloader ${isBackground ? 'is-background' : ''}`}
        id="preloader"
        aria-label="Initializing System"
      >
        <div className="preloader-cyber-grid" />
        <div className="preloader-glow-core" />
        <div className="preloader-shade" />
      </div>

      <img
        className={`floating-logo ${isDocked ? 'is-docked' : ''} ${isSettled ? 'is-settled' : ''}`}
        id="floating-logo"
        src={gMarkLogo}
        alt="G-Mark Software Solutions"
      />

      {!hideCount && (
        <div
          className={`preloader-count ${isLeaving ? 'is-leaving' : ''}`}
          id="preloader-count"
          aria-live="polite"
        >
          <span id="preloader-value">{progress}</span>
          <span className="percent">%</span>
        </div>
      )}
    </>
  );
}
