/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY AMBIENT PARTICLES ENGINE (JavaScript)
 * Autonomous floating champagne dust and motes with harmonic sine wave sway
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Creates an array of floating ambient motes
 * @param {number} width
 * @param {number} height
 * @param {number} count
 * @returns {Array<object>}
 */
export function generateAmbientMotes(width, height, count) {
  const motes = [];
  for (let i = 0; i < count; i++) {
    motes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      initX: 0,
      vy: Math.random() * 0.32 + 0.08,
      size: Math.random() * 2.0 + 0.6,
      opacity: Math.random() * 0.42 + 0.12,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.018 + 0.006,
      sway: Math.random() * 32 + 12,
      swaySpeed: Math.random() * 0.009 + 0.003,
    });
  }
  motes.forEach((m) => (m.initX = m.x));
  return motes;
}

/**
 * Initializes and loops the ambient champagne motes background on a canvas
 * @param {HTMLCanvasElement} canvas
 * @returns {function} Cleanup function
 */
export function initAmbientParticles(canvas) {
  if (!canvas) return () => {};

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let animId = null;
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  const particleCount = Math.min(Math.floor(w / 26), 65);
  const motes = generateAmbientMotes(w, h, particleCount);
  let timeStep = 0;

  const render = () => {
    timeStep++;
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < motes.length; i++) {
      const m = motes[i];
      m.y -= m.vy;

      if (m.y < -8) {
        m.y = h + 8;
        m.x = Math.random() * w;
        m.initX = m.x;
      }

      m.x = m.initX + Math.sin(timeStep * m.swaySpeed + m.phase) * m.sway;
      const alpha =
        m.opacity * (0.65 + 0.35 * Math.sin(timeStep * m.pulseSpeed + m.phase));

      ctx.beginPath();
      ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(214, 194, 154, ${alpha})`;
      ctx.shadowColor = "rgba(241, 228, 200, 0.65)";
      ctx.shadowBlur = m.size * 3.5;
      ctx.fill();
    }

    animId = requestAnimationFrame(render);
  };

  animId = requestAnimationFrame(render);

  const handleResize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", handleResize);

  return () => {
    if (animId) cancelAnimationFrame(animId);
    window.removeEventListener("resize", handleResize);
  };
}
