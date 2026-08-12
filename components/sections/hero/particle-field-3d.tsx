"use client";

import { useEffect, useRef } from "react";

export function ParticleField3D({ reduced = false }: { reduced?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking for 3D parallax tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.0008;
      targetMouseY = (e.clientY - height / 2) * 0.0008;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3D Particle Cloud Generation
    const particleCount = width < 768 ? 90 : 180;
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      size: number;
      speed: number;
      phase: number;
      hue: number;
    }

    const particles: Particle3D[] = [];
    const spreadX = width * 1.2;
    const spreadY = height * 1.1;
    const spreadZ = 900;

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * spreadX;
      const y = (Math.random() - 0.5) * spreadY;
      const z = Math.random() * spreadZ;
      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2 + 1,
        speed: 0.0015 + Math.random() * 0.002,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.4 ? 245 : 190, // Indigo / Cyan accents
      });
    }

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.012;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Dark background gradient
      ctx.fillStyle = "rgba(7, 7, 10, 0.25)";
      ctx.fillRect(0, 0, width, height);

      const fov = 400;
      const cx = width * 0.55;
      const cy = height * 0.5;

      // Sort by depth (Z)
      particles.sort((a, b) => b.z - a.z);

      // Render connecting lines for nearby 3D points
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        // 3D Wave Motion simulation
        p1.z -= 0.8;
        if (p1.z < 10) p1.z = spreadZ;

        const waveY = Math.sin(time + p1.phase) * 35;
        const waveX = Math.cos(time * 0.8 + p1.phase) * 25;

        // 3D rotation with mouse parallax
        const rotX = p1.baseX + waveX;
        const rotY = p1.baseY + waveY;
        const cosY = Math.cos(mouseX);
        const sinY = Math.sin(mouseX);
        const cosX = Math.cos(mouseY);
        const sinX = Math.sin(mouseY);

        const x1 = rotX * cosY - p1.z * sinY;
        const z1 = rotX * sinY + p1.z * cosY;
        const y1 = rotY * cosX - z1 * sinX;
        const z2 = rotY * sinX + z1 * cosX;

        const scale = fov / (fov + z2);
        const screenX = cx + x1 * scale;
        const screenY = cy + y1 * scale;

        if (scale > 0 && screenX > -50 && screenX < width + 50 && screenY > -50 && screenY < height + 50) {
          const alpha = Math.min(1, Math.max(0.1, (1 - z2 / spreadZ) * 0.9));

          // Draw node
          ctx.beginPath();
          ctx.arc(screenX, screenY, p1.size * scale * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p1.hue}, 85%, 68%, ${alpha})`;
          ctx.shadowBlur = 12 * scale;
          ctx.shadowColor = `hsla(${p1.hue}, 85%, 60%, ${alpha * 0.8})`;
          ctx.fill();

          // Connect nearby nodes with subtle glowing strands
          for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
            const p2 = particles[j];
            const p2Scale = fov / (fov + p2.z);
            const p2ScreenX = cx + p2.x * p2Scale;
            const p2ScreenY = cy + p2.y * p2Scale;

            const dx = screenX - p2ScreenX;
            const dy = screenY - p2ScreenY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110 * scale) {
              ctx.beginPath();
              ctx.moveTo(screenX, screenY);
              ctx.lineTo(p2ScreenX, p2ScreenY);
              ctx.strokeStyle = `hsla(245, 80%, 65%, ${alpha * (1 - dist / (110 * scale)) * 0.25})`;
              ctx.lineWidth = 0.8 * scale;
              ctx.shadowBlur = 0;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reduced]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#070709_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070709]/20 to-[#070709]" />
    </div>
  );
}
