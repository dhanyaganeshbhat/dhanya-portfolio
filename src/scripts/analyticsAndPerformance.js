/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY PERFORMANCE & ANIMATION FPS PROFILER (JavaScript)
 * Client-side animation frame rate guardian and vitals monitor
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Initializes a lightweight FPS monitor to detect animation drops
 * @param {function} onFpsDrop Callback when FPS drops below threshold
 * @param {number} threshold Default 45 FPS
 * @returns {function} Cleanup function
 */
export function initFpsGuardian(onFpsDrop, threshold = 45) {
  if (typeof window === "undefined") return () => {};

  let lastTime = performance.now();
  let frameCount = 0;
  let rafId = null;
  let isMonitoring = true;

  const checkLoop = (now) => {
    if (!isMonitoring) return;

    frameCount++;
    const elapsed = now - lastTime;

    if (elapsed >= 1000) {
      const fps = Math.round((frameCount * 1000) / elapsed);
      if (fps < threshold && typeof onFpsDrop === "function") {
        onFpsDrop(fps);
      }
      frameCount = 0;
      lastTime = now;
    }

    rafId = requestAnimationFrame(checkLoop);
  };

  rafId = requestAnimationFrame(checkLoop);

  return () => {
    isMonitoring = false;
    if (rafId) cancelAnimationFrame(rafId);
  };
}

/**
 * Measures layout shift and rendering performance metrics
 * @returns {object} Performance snapshot
 */
export function captureRenderMetrics() {
  if (typeof window === "undefined" || !window.performance) {
    return { loadTime: 0, memory: null };
  }

  const timing = window.performance.timing;
  const loadTime = timing ? timing.loadEventEnd - timing.navigationStart : 0;

  // @ts-ignore Chrome memory extension
  const memory = window.performance.memory
    ? {
        // @ts-ignore
        usedJSHeapSize: Math.round(window.performance.memory.usedJSHeapSize / 1048576),
        // @ts-ignore
        totalJSHeapSize: Math.round(window.performance.memory.totalJSHeapSize / 1048576),
      }
    : null;

  return { loadTime, memory };
}
