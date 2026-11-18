"use client";
import { useEffect, useRef } from "react";

interface Mote { x: number; y: number; vy: number; vx: number; size: number; opacity: number; phase: number; pulseSpeed: number; sway: number; swaySpeed: number; }

export default function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let w = canvas.width = innerWidth;
    let h = canvas.height = innerHeight;
    const count = Math.min(Math.floor(w / 28), 60);
    const motes: Mote[] = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vy: Math.random() * 0.3 + 0.08,
      vx: 0,
      size: Math.random() * 1.8 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      sway: Math.random() * 30 + 10,
      swaySpeed: Math.random() * 0.008 + 0.003,
    }));
    const initX = motes.map(m => m.x);
    let t = 0;

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, w, h);
      motes.forEach((m, i) => {
        m.y -= m.vy;
        if (m.y < -5) { m.y = h + 5; m.x = Math.random() * w; initX[i] = m.x; }
        m.x = initX[i] + Math.sin(t * m.swaySpeed + m.phase) * m.sway;
        const alpha = m.opacity * (0.6 + 0.4 * Math.sin(t * m.pulseSpeed + m.phase));
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214,194,154,${alpha})`;
        ctx.shadowColor = "rgba(241,228,200,0.6)";
        ctx.shadowBlur = m.size * 3;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onResize = () => { w = canvas.width = innerWidth; h = canvas.height = innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[1] opacity-70" aria-hidden />;
}
