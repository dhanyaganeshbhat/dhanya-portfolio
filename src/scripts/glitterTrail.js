/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY GLITTER TRAIL ENGINE (JavaScript)
 * Real-time canvas particle simulation: white & champagne golden stardust
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const LUXURY_COLORS = [
  "#FFFFFF",
  "#F1E4C8",
  "#D6C29A",
  "#E8D5B0",
  "#FFF9F0",
  "#C4AE82",
];

/**
 * Draws a 4-point sparkling star on HTML5 2D Canvas context
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} size
 * @param {number} angle
 */
export function drawSparkleStar(ctx, x, y, size, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    ctx.lineTo(Math.cos(a) * size * 2.4, Math.sin(a) * size * 2.4);
    ctx.lineTo(
      Math.cos(a + Math.PI / 4) * size * 0.55,
      Math.sin(a + Math.PI / 4) * size * 0.55
    );
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/**
 * Factory for creating a single glitter particle with physics vectors
 * @param {number} originX
 * @param {number} originY
 * @returns {object} Particle state
 */
export function createGlitterParticle(originX, originY) {
  const angle = Math.random() * Math.PI * 2;
  const speed = Math.random() * 2.2 + 0.6;
  const colorIndex = Math.floor(Math.random() * LUXURY_COLORS.length);

  return {
    x: originX + (Math.random() - 0.5) * 12,
    y: originY + (Math.random() - 0.5) * 12,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 0.6,
    life: 1.0,
    maxLife: Math.random() * 32 + 28,
    size: Math.random() * 2.6 + 1.2,
    color: LUXURY_COLORS[colorIndex],
    isStar: Math.random() > 0.35,
    angle: Math.random() * Math.PI,
    spin: (Math.random() - 0.5) * 0.18,
  };
}

/**
 * Updates particle physics, friction and alpha decay
 * @param {object} p Particle
 * @returns {boolean} Whether particle remains alive
 */
export function updateGlitterParticle(p) {
  p.x += p.vx;
  p.y += p.vy;
  p.vx *= 0.94;
  p.vy *= 0.94;
  p.angle += p.spin;
  p.life -= 1.0 / p.maxLife;
  return p.life > 0;
}

/**
 * Initializes and manages a complete glitter cursor canvas instance
 * @param {HTMLCanvasElement} canvas
 * @returns {function} Cleanup function
 */
export function initGlitterTrail(canvas) {
  if (!canvas) return () => {};

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let particles = [];
  let mouse = { x: -300, y: -300 };
  let lastEmit = { x: -300, y: -300 };
  let animId = null;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const emit = (x, y, count = 3) => {
    for (let i = 0; i < count; i++) {
      particles.push(createGlitterParticle(x, y));
      if (particles.length > 140) particles.shift();
    }
  };

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    const dx = mouse.x - lastEmit.x;
    const dy = mouse.y - lastEmit.y;
    if (Math.hypot(dx, dy) > 7) {
      emit(mouse.x, mouse.y, 3);
      lastEmit.x = mouse.x;
      lastEmit.y = mouse.y;
    }
  };

  const handleMouseDown = (e) => emit(e.clientX, e.clientY, 12);

  const handleTouchMove = (e) => {
    for (const t of Array.from(e.touches)) {
      emit(t.clientX, t.clientY, 2);
    }
  };

  window.addEventListener("mousemove", handleMouseMove, { passive: true });
  window.addEventListener("mousedown", handleMouseDown, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: true });

  const renderLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter((p) => {
      const alive = updateGlitterParticle(p);
      if (!alive) return false;

      const alpha = Math.sin(p.life * Math.PI);
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fillStyle = p.color;
      ctx.shadowColor = "#D6C29A";
      ctx.shadowBlur = p.size * 4;

      if (p.isStar) {
        drawSparkleStar(ctx, p.x, p.y, p.size, p.angle);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.85, 0, Math.PI * 2);
        ctx.fill();
      }

      return true;
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    animId = requestAnimationFrame(renderLoop);
  };

  animId = requestAnimationFrame(renderLoop);

  return () => {
    if (animId) cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mousedown", handleMouseDown);
    window.removeEventListener("touchmove", handleTouchMove);
  };
}
