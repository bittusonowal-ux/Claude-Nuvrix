"use client";

import { useEffect, useRef } from "react";

interface SoothingWaveCanvasProps {
  reduced?: boolean;
}

export function SoothingWaveCanvas({ reduced = false }: SoothingWaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive resize handler with device pixel ratio handling
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Smooth mouse position with damping
    const mouse = { x: width * 0.5, y: height * 0.5, targetX: width * 0.5, targetY: height * 0.5 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // TCS-Style Layered Wave & Ribbon Nodes Parameters
    const waves = [
      {
        baseY: 0.52,
        amplitude: 48,
        frequency: 0.0018,
        speed: 0.004,
        colorStart: "rgba(99, 102, 241, 0.45)",
        colorEnd: "rgba(6, 182, 212, 0.2)",
        lineWidth: 1.8,
        phase: 0,
      },
      {
        baseY: 0.58,
        amplitude: 62,
        frequency: 0.0014,
        speed: 0.0032,
        colorStart: "rgba(168, 85, 247, 0.35)",
        colorEnd: "rgba(99, 102, 241, 0.15)",
        lineWidth: 1.5,
        phase: 1.8,
      },
      {
        baseY: 0.65,
        amplitude: 75,
        frequency: 0.0011,
        speed: 0.0025,
        colorStart: "rgba(6, 182, 212, 0.4)",
        colorEnd: "rgba(16, 185, 129, 0.15)",
        lineWidth: 1.2,
        phase: 3.4,
      },
      {
        baseY: 0.72,
        amplitude: 55,
        frequency: 0.0016,
        speed: 0.002,
        colorStart: "rgba(99, 102, 241, 0.3)",
        colorEnd: "rgba(147, 51, 234, 0.1)",
        lineWidth: 1.0,
        phase: 4.9,
      },
    ];

    // Gentle ambient floating particles
    const particleCount = width < 768 ? 25 : 55;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.2,
      baseAlpha: Math.random() * 0.4 + 0.15,
      pulseSpeed: Math.random() * 0.01 + 0.005,
      pulsePhase: Math.random() * Math.PI * 2,
      color:
        Math.random() > 0.6
          ? "rgba(6, 182, 212,"
          : Math.random() > 0.3
          ? "rgba(99, 102, 241,"
          : "rgba(168, 85, 247,",
    }));

    let time = 0;

    const render = () => {
      time += 1;
      // Damped mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.035;
      mouse.y += (mouse.targetY - mouse.y) * 0.035;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient glowing orbs behind waves
      const orbGrad = ctx.createRadialGradient(
        width * 0.65 + Math.sin(time * 0.005) * 40,
        height * 0.45 + Math.cos(time * 0.004) * 30,
        20,
        width * 0.65,
        height * 0.45,
        width * 0.45
      );
      orbGrad.addColorStop(0, "rgba(99, 102, 241, 0.08)");
      orbGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.04)");
      orbGrad.addColorStop(1, "rgba(7, 7, 9, 0)");
      ctx.fillStyle = orbGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw TCS-style soothing wave ribbons
      const step = 8;
      const numPoints = Math.ceil(width / step) + 2;

      waves.forEach((wave, waveIdx) => {
        const waveBaseY = height * wave.baseY;
        const currentPoints: { x: number; y: number }[] = [];

        ctx.beginPath();
        for (let i = 0; i <= numPoints; i++) {
          const x = i * step;
          // Smooth sine harmonics
          const sin1 = Math.sin(x * wave.frequency + time * wave.speed + wave.phase);
          const sin2 = Math.cos(x * wave.frequency * 0.5 - time * wave.speed * 0.7 + wave.phase * 0.5);
          const sin3 = Math.sin(x * 0.0005 + time * 0.001);

          // Subtle interaction with mouse
          const dx = x - mouse.x;
          const dy = waveBaseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / 350) * 28 * Math.sin(dist * 0.02 - time * 0.02);

          const y = waveBaseY + (sin1 * 0.65 + sin2 * 0.35 + sin3 * 0.2) * wave.amplitude + mouseInfluence;
          currentPoints.push({ x, y });

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            const prev = currentPoints[i - 1];
            const cx = (prev.x + x) / 2;
            const cy = (prev.y + y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
          }
        }

        // Create elegant gradient stroke
        const lineGrad = ctx.createLinearGradient(0, 0, width, 0);
        lineGrad.addColorStop(0, "rgba(99, 102, 241, 0)");
        lineGrad.addColorStop(0.2, wave.colorStart);
        lineGrad.addColorStop(0.7, wave.colorEnd);
        lineGrad.addColorStop(1, "rgba(6, 182, 212, 0)");

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = wave.lineWidth;
        ctx.stroke();

        // Add soft fill ribbon underneath the upper waves
        if (waveIdx < 2) {
          ctx.lineTo(width, height);
          ctx.lineTo(0, height);
          ctx.closePath();

          const fillGrad = ctx.createLinearGradient(0, waveBaseY - wave.amplitude, 0, height);
          fillGrad.addColorStop(0, waveIdx === 0 ? "rgba(99, 102, 241, 0.035)" : "rgba(6, 182, 212, 0.02)");
          fillGrad.addColorStop(1, "rgba(7, 7, 9, 0)");

          ctx.fillStyle = fillGrad;
          ctx.fill();
        }

        // Draw sparse glowing nodes along the primary wave
        if (waveIdx === 0 || waveIdx === 1) {
          const sampleInterval = 12;
          for (let p = 0; p < currentPoints.length; p += sampleInterval) {
            const pt = currentPoints[p];
            const nodeAlpha = (Math.sin(time * 0.02 + p) * 0.3 + 0.7) * 0.5;

            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(129, 140, 248, ${nodeAlpha})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(99, 102, 241, 0.6)";
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });

      // 3. Render ambient gentle floating micro-particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase);
        const currentAlpha = Math.max(0.05, p.baseAlpha + pulse * 0.15);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.fill();
      });

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
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Soft gradient masks for seamless visual integration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070709]/10 to-[#070709]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#070709_95%)]" />
    </div>
  );
}
