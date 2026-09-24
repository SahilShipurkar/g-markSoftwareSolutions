import React from 'react';

/**
 * CinematicSlowMotionBg
 * Creates a subtle, realistic slow-motion cinematic camera drift (slow push-in & pan)
 * keeping photorealistic imagery bright, crisp, and clearly visible.
 */
export default function CinematicSlowMotionBg({
  imageSrc,
  overlayOpacity = 0.2,
  className = ''
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Slow-motion Ken Burns realistic photographic camera pan */}
      <div
        className="absolute inset-[-3%] w-[106%] h-[106%] bg-cover bg-center transition-transform duration-[20000ms] ease-out animate-slow-motion-pan"
        style={{
          backgroundImage: `url(${imageSrc})`,
          filter: 'brightness(1.0) contrast(1.04)',
        }}
      />

      {/* Gentle Vignette for Text Contrast without darkening the background */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/30 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
