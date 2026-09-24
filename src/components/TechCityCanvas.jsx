import React, { useEffect, useRef } from 'react';

export default function TechCityCanvas({ isPreloading }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // Only animate while preloading; when 100% is reached, stop the loop completely
    if (!isPreloading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function onResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function onMouseMove(e) {
      mouseRef.current.targetX = (e.clientX / width - 0.5) * 60;
      mouseRef.current.targetY = (e.clientY / height - 0.5) * 40;
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    // 3D Cyber Skyscrapers
    const buildings = [];
    const numBuildings = 65;
    for (let i = 0; i < numBuildings; i++) {
      const isLeft = Math.random() > 0.5;
      const xOffset = isLeft
        ? -(Math.random() * 800 + 120)
        : (Math.random() * 800 + 120);

      buildings.push({
        x: xOffset,
        z: Math.random() * 2600 + 100,
        w: Math.random() * 90 + 50,
        h: Math.random() * 450 + 200,
        colorType: Math.random() > 0.3 ? 'cyan' : 'red',
        windowRows: Math.floor(Math.random() * 12) + 6,
        windowCols: Math.floor(Math.random() * 4) + 2,
        beacon: Math.random() > 0.5
      });
    }

    // High Speed Data Highways & Particles
    const dataStreams = [];
    const numStreams = 120;
    for (let i = 0; i < numStreams; i++) {
      dataStreams.push({
        x: (Math.random() - 0.5) * 1800,
        y: Math.random() * 550 - 50,
        z: Math.random() * 2600,
        speed: Math.random() * 24 + 14,
        length: Math.random() * 60 + 30,
        color: Math.random() > 0.25 ? '#00f0ff' : '#ff5a5f',
        size: Math.random() * 2.5 + 1.2
      });
    }

    let zOffset = 0;

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Lerp mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      const fov = 500;
      const flySpeed = 28;
      zOffset += flySpeed;

      const cx = width / 2 + mouseRef.current.x;
      const cy = height * 0.62 + mouseRef.current.y;

      // Draw Horizon Neon Glow
      const horizonGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.6);
      horizonGrad.addColorStop(0, 'rgba(0, 240, 255, 0.22)');
      horizonGrad.addColorStop(0.5, 'rgba(255, 90, 95, 0.08)');
      horizonGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, 0, width, height);

      // Perspective Ground Highways
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 1.5;
      for (let i = -8; i <= 8; i++) {
        ctx.beginPath();
        const gx1 = cx + i * 140;
        const gy1 = cy;
        const gx2 = cx + i * 1100;
        const gy2 = height;
        ctx.moveTo(gx1, gy1);
        ctx.lineTo(gx2, gy2);
        ctx.stroke();
      }

      // Ground Scanlines
      for (let z = 100; z < 2200; z += 140) {
        const adjustedZ = ((z - (zOffset % 140)) || 1);
        const scale = fov / adjustedZ;
        const screenY = cy + 130 * scale;
        if (screenY < height && screenY > cy) {
          const alpha = Math.min(0.4, (1 - adjustedZ / 2200) * 0.45);
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(0, screenY);
          ctx.lineTo(width, screenY);
          ctx.stroke();
        }
      }

      // Render 3D Digital Buildings
      buildings.forEach((b) => {
        let curZ = (b.z - (zOffset % 2600));
        if (curZ < 50) curZ += 2600;

        const scale = fov / curZ;
        const screenX = cx + b.x * scale;
        const screenY = cy;
        const screenW = b.w * scale;
        const screenH = b.h * scale;

        const depthFade = Math.min(1, Math.max(0, 1 - curZ / 2700));
        const baseColor = b.colorType === 'cyan' ? '0, 240, 255' : '255, 90, 95';

        // Building Solid Base / Face
        ctx.fillStyle = `rgba(6, 12, 22, ${depthFade * 0.85})`;
        ctx.fillRect(screenX - screenW / 2, screenY - screenH, screenW, screenH);

        // Building Neon Wireframe
        ctx.strokeStyle = `rgba(${baseColor}, ${depthFade * 0.8})`;
        ctx.lineWidth = Math.max(1, 1.4 * scale);
        ctx.strokeRect(screenX - screenW / 2, screenY - screenH, screenW, screenH);

        // Glowing Windows Grid
        if (scale > 0.28) {
          const rowH = screenH / b.windowRows;
          const colW = screenW / (b.windowCols + 1);

          for (let r = 1; r < b.windowRows; r += 2) {
            for (let c = 1; c <= b.windowCols; c++) {
              ctx.fillStyle = `rgba(${baseColor}, ${depthFade * 0.6})`;
              const wx = screenX - screenW / 2 + c * colW - 1.5;
              const wy = screenY - screenH + r * rowH;
              ctx.fillRect(wx, wy, 3 * scale, 3 * scale);
            }
          }
        }

        // Top Roof Beacon
        if (b.beacon) {
          ctx.fillStyle = b.colorType === 'cyan' ? '#00f0ff' : '#ff5a5f';
          ctx.beginPath();
          ctx.arc(screenX, screenY - screenH, Math.max(2, 3.5 * scale), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Render High Speed Data Highway Streams
      dataStreams.forEach((p) => {
        p.z -= p.speed * 2.2;
        if (p.z < 20) {
          p.z = 2600;
          p.x = (Math.random() - 0.5) * 1800;
        }

        const scale = fov / p.z;
        const sx = cx + p.x * scale;
        const sy = cy - p.y * scale;

        if (sx > -50 && sx < width + 50 && sy > -50 && sy < height + 50) {
          const depthAlpha = Math.min(1, 1 - p.z / 2600);
          ctx.globalAlpha = depthAlpha;

          // Light Beam / Trail
          ctx.strokeStyle = p.color;
          ctx.lineWidth = Math.max(1, p.size * scale * 1.6);
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx, sy + p.length * scale);
          ctx.stroke();

          // Core Head
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(sx, sy, p.size * scale * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isPreloading]);

  if (!isPreloading) return null;

  return (
    <canvas
      ref={canvasRef}
      className="tech-city-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3
      }}
    />
  );
}
