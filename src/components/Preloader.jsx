import React, { useEffect, useState } from 'react';
import gMarkLogo from '../assets/G Mark.png';

let globalHasPreloaded = false;

export default function Preloader({ onComplete, skipAnimation = false }) {
  const shouldSkip = skipAnimation || globalHasPreloaded;
  const [progress, setProgress] = useState(shouldSkip ? 100 : 0);
  const [isLeaving, setIsLeaving] = useState(shouldSkip);
  const [isDocked, setIsDocked] = useState(shouldSkip);
  const [isSettled, setIsSettled] = useState(shouldSkip);
  const [isBackground, setIsBackground] = useState(shouldSkip);
  const [hideCount, setHideCount] = useState(shouldSkip);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (shouldSkip) {
      document.body.classList.add('intro-ready', 'preload-complete');
      onComplete?.();
      return;
    }

    let animId;
    let isCancelled = false;
    const duration = 1400; // Snappy 1.4s countdown sequence
    const startTime = performance.now();

    function finish() {
      if (isCancelled) return;
      globalHasPreloaded = true;
      setProgress(100);
      setIsLeaving(true);
      setIsDocked(true);
      setIsBackground(true);
      document.body.classList.add('intro-ready', 'preload-complete');

      onComplete?.();

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

      <div
        className={`floating-logo-card ${isDocked ? 'is-docked' : ''} ${isSettled ? 'is-settled' : ''} ${isScrolled ? 'is-scrolled' : ''}`}
        id="floating-logo"
      >
        <img
          className="floating-logo-img"
          src={gMarkLogo}
          alt="G-Mark Software Solutions"
        />
      </div>

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
