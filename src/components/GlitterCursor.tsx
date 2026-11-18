"use client";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number; color: string;
  isStar: boolean; angle: number; spin: number;
}

const COLORS = ["#FFFFFF", "#F1E4C8", "#D6C29A", "#E8D5B0", "#FFF8F0"];

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, angle: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    ctx.lineTo(Math.cos(a) * size * 2.2, Math.sin(a) * size * 2.2);
    ctx.lineTo(Math.cos(a + Math.PI / 4) * size * 0.5, Math.sin(a + Math.PI / 4) * size * 0.5);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function GlitterCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -200, y: -200 });
  const smoothMouse = useRef({ x: -200, y: -200 });
  const lastEmit = useRef({ x: -200, y: -200 });
  const [isPointer, setIsPointer] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsPointer(fine.matches);

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const emit = (x: number, y: number, count = 3) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;
        particles.current.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          life: 1, maxLife: Math.random() * 30 + 25,
          size: Math.random() * 2.5 + 1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          isStar: Math.random() > 0.4,
          angle: Math.random() * Math.PI,
          spin: (Math.random() - 0.5) * 0.15,
        });
        if (particles.current.length > 120) particles.current.splice(0, 1);
      }
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cursorRef.current && (cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`);
      glowRef.current && (glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`);
      const dx = e.clientX - lastEmit.current.x, dy = e.clientY - lastEmit.current.y;
      if (Math.sqrt(dx * dx + dy * dy) > 8) {
        emit(e.clientX, e.clientY);
        lastEmit.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onDown = (e: MouseEvent) => emit(e.clientX, e.clientY, 10);

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setHovered(!!el.closest("a,button,[data-hover]"));
    };

    const onTouch = (e: TouchEvent) => {
      for (const t of Array.from(e.touches)) emit(t.clientX, t.clientY, 2);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("touchmove", onTouch, { passive: true });

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth ring follow
      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.12;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.12;
      if (ringRef.current) {
        const r = hovered ? 20 : 14;
        ringRef.current.style.transform = `translate(${smoothMouse.current.x - r}px, ${smoothMouse.current.y - r}px)`;
        ringRef.current.style.width = ringRef.current.style.height = `${r * 2}px`;
      }

      // Draw particles
      particles.current = particles.current.filter(p => {
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.95; p.vy *= 0.95;
        p.angle += p.spin;
        p.life -= 1 / p.maxLife;
        if (p.life <= 0) return false;

        const alpha = Math.sin(p.life * Math.PI);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = "#D6C29A";
        ctx.shadowBlur = p.size * 4;

        if (p.isStar) drawStar(ctx, p.x, p.y, p.size, p.angle);
        else { ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2); ctx.fill(); }
        return true;
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("touchmove", onTouch);
    };
  }, [hovered]);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9990]" style={{ mixBlendMode: "screen" }} />
      {/* Ambient glow */}
      <div ref={glowRef} className="pointer-events-none fixed z-[5] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(214,194,154,0.07) 0%, transparent 70%)", willChange: "transform" }} />
      {isPointer && (
        <>
          {/* Dot */}
          <div ref={cursorRef} className="pointer-events-none fixed z-[9999] w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#D6C29A]"
            style={{ willChange: "transform", top: 0, left: 0 }} />
          {/* Ring */}
          <div ref={ringRef} className={`pointer-events-none fixed z-[9998] rounded-full border transition-all duration-200 ${hovered ? "border-[#D6C29A] bg-[#D6C29A]/10" : "border-[#D6C29A]/40"}`}
            style={{ top: 0, left: 0, willChange: "transform, width, height" }} />
        </>
      )}
    </>
  );
}
