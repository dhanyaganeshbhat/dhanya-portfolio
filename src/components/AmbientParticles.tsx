"use client";

import { useEffect, useRef } from "react";
import { initAmbientParticles } from "@/scripts/ambientMotes";

export default function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = initAmbientParticles(canvasRef.current);
    return () => cleanup();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] opacity-75"
      aria-hidden
    />
  );
}
