/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY 3D PERSPECTIVE & TILT ENGINE (JavaScript)
 * High-performance mouse perspective interpolation for luxury cards
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Calculates 3D rotation matrix values from client cursor coordinates
 * @param {MouseEvent} event
 * @param {HTMLElement} element
 * @param {number} maxAngle
 * @returns {{rotateX: number, rotateY: number, glareX: number, glareY: number}}
 */
export function calculateTiltMatrix(event, element, maxAngle = 7) {
  const rect = element.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const width = rect.width;
  const height = rect.height;

  const percentX = (mouseX / width) * 2 - 1;
  const percentY = (mouseY / height) * 2 - 1;

  const rotateX = -percentY * maxAngle;
  const rotateY = percentX * maxAngle;

  const glareX = (mouseX / width) * 100;
  const glareY = (mouseY / height) * 100;

  return {
    rotateX: Number(rotateX.toFixed(2)),
    rotateY: Number(rotateY.toFixed(2)),
    glareX: Number(glareX.toFixed(1)),
    glareY: Number(glareY.toFixed(1)),
  };
}

/**
 * Applies smooth lerp transition to 3D tilt styles
 * @param {HTMLElement} element
 * @param {number} rotateX
 * @param {number} rotateY
 * @param {number} scale
 */
export function applyTiltTransform(element, rotateX, rotateY, scale = 1.02) {
  element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
}

/**
 * Resets 3D tilt state with smooth deceleration
 * @param {HTMLElement} element
 */
export function resetTiltTransform(element) {
  element.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
}

/**
 * Binds tilt listeners to a node list or container
 * @param {string} selector
 * @param {number} maxAngle
 * @returns {function} Cleanup listener
 */
export function initBatchTilt(selector = "[data-tilt]", maxAngle = 6) {
  if (typeof window === "undefined") return () => {};

  const elements = document.querySelectorAll(selector);
  const cleanups = [];

  elements.forEach((el) => {
    const handleMove = (e) => {
      const { rotateX, rotateY } = calculateTiltMatrix(e, el, maxAngle);
      applyTiltTransform(el, rotateX, rotateY);
    };

    const handleLeave = () => {
      resetTiltTransform(el);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    cleanups.push(() => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    });
  });

  return () => {
    cleanups.forEach((c) => c());
  };
}
