import React, { useEffect, useRef } from 'react';

export default function CustomCursor({ isEnter }) {
  const cursorRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let orbitX = pointerX;
    let orbitY = pointerY;
    let isVisible = false;
    let animationFrameId;

    function onPointerMove(e) {
      pointerX = e.clientX;
      pointerY = e.clientY;
      if (!isVisible && cursorRef.current) {
        isVisible = true;
        cursorRef.current.classList.add('is-visible');
      }
    }

    function onMouseLeave() {
      isVisible = false;
      if (cursorRef.current) {
        cursorRef.current.classList.remove('is-visible');
      }
    }

    window.addEventListener('pointermove', onPointerMove);
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
