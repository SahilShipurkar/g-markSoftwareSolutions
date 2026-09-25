import React, { useEffect, useRef } from 'react';

export default function CustomCursor({ isEnter }) {
  const cursorRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isCoarse || (hasTouch && window.innerWidth < 1024)) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return;
    }

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let orbitX = pointerX;
    let orbitY = pointerY;
    let isVisible = false;
    let animationFrameId;

    function updateCursorColor(x, y) {
      if (!cursorRef.current) return;
      const el = document.elementFromPoint(x, y);
      if (el) {
        const isDarkSection = el.closest('.experience') || el.closest('.shade');
        if (!isDarkSection) {
          cursorRef.current.classList.add('is-dark-cursor');
        } else {
          cursorRef.current.classList.remove('is-dark-cursor');
        }
      }
    }

    function onPointerMove(e) {
      if (e.pointerType === 'touch') return;
      pointerX = e.clientX;
      pointerY = e.clientY;
      if (!isVisible && cursorRef.current) {
        isVisible = true;
        cursorRef.current.classList.add('is-visible');
      }
      updateCursorColor(pointerX, pointerY);
    }

    function onScroll() {
      updateCursorColor(pointerX, pointerY);
    }

    function onMouseLeave() {
      isVisible = false;
      if (cursorRef.current) {
        cursorRef.current.classList.remove('is-visible');
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    function loop() {
      orbitX += (pointerX - orbitX) * 0.2;
      orbitY += (pointerY - orbitY) * 0.2;

      if (cursorRef.current && orbitRef.current) {
        cursorRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
        const offsetX = orbitX - pointerX;
        const offsetY = orbitY - pointerY;
        orbitRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) translate(-50%, -50%) ${
          isEnter ? 'scale(1.16)' : 'scale(1)'
        }`;
      }

      animationFrameId = requestAnimationFrame(loop);
    }

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isEnter]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isEnter ? 'is-enter' : ''}`}
      aria-hidden="true"
    >
      <span ref={orbitRef} className="cursor-orbit" />
      <span className="cursor-dot" />
      <span className="cursor-label">Enter</span>
    </div>
  );
}
