"use client";

import { useEffect, useRef, useState } from "react";
import { initGlitterTrail } from "@/scripts/glitterTrail";

export default function GlitterCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsPointer(fine.matches);

    // Initialize JavaScript canvas glitter engine
    const cleanupCanvas = canvasRef.current
      ? initGlitterTrail(canvasRef.current)
      : () => {};

    const mouse = { x: -200, y: -200 };
    const smoothMouse = { x: -200, y: -200 };
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setHovered(!!el.closest("a,button,[data-hover],input,textarea"));
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);

    const loop = () => {
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.15;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.15;

      if (ringRef.current) {
        const r = hovered ? 22 : 14;
        ringRef.current.style.transform = `translate(${smoothMouse.x - r}px, ${smoothMouse.y - r}px)`;
        ringRef.current.style.width = ringRef.current.style.height = `${r * 2}px`;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cleanupCanvas();
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [hovered]);

  return (
    <>
      {/* Canvas for JavaScript stardust simulation */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9990]"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Subtle ambient golden reflection following cursor */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[5] w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(214,194,154,0.08) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {isPointer && (
        <>
          {/* Custom white/champagne center dot */}
          <div
            ref={cursorRef}
            className="pointer-events-none fixed z-[9999] w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#D6C29A]"
            style={{ willChange: "transform", top: 0, left: 0 }}
          />

          {/* Luxury trailing champagne ring */}
          <div
            ref={ringRef}
            className={`pointer-events-none fixed z-[9998] rounded-full border transition-all duration-200 ${
              hovered
                ? "border-[#D6C29A] bg-[#D6C29A]/15 shadow-[0_0_15px_rgba(214,194,154,0.4)]"
                : "border-[#D6C29A]/40"
            }`}
            style={{ top: 0, left: 0, willChange: "transform, width, height" }}
          />
        </>
      )}
    </>
  );
}
