/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY DOM INTERACTIONS & 3D TILT ENGINE (JavaScript)
 * Interactive card physics, magnetic button response, and dynamic lighting
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Attaches a subtle 3D tilt and glare reflection to an element
 * @param {HTMLElement} element
 * @param {number} maxTiltDegrees
 */
export function attachCardTilt(element, maxTiltDegrees = 6) {
  if (!element) return () => {};

  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTiltDegrees;
    const tiltY = ((x - centerX) / centerX) * maxTiltDegrees;

    element.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(
      2
    )}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    element.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
}

/**
 * Magnetic button pull effect for luxury call-to-actions
 * @param {HTMLElement} buttonElement
 * @param {number} magneticRadius
 */
export function attachMagneticEffect(buttonElement, magneticRadius = 40) {
  if (!buttonElement) return () => {};

  const handleMouseMove = (e) => {
    const rect = buttonElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance < magneticRadius) {
      const pullX = deltaX * 0.25;
      const pullY = deltaY * 0.25;
      buttonElement.style.transform = `translate(${pullX}px, ${pullY}px)`;
    } else {
      buttonElement.style.transform = "translate(0px, 0px)";
    }
  };

  const handleMouseLeave = () => {
    buttonElement.style.transform = "translate(0px, 0px)";
  };

  window.addEventListener("mousemove", handleMouseMove);
  buttonElement.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    buttonElement.removeEventListener("mouseleave", handleMouseLeave);
  };
}

/**
 * Initializes intersection observers for elegant section fades
 * @param {string} selector
 * @param {string} visibleClass
 */
export function initScrollRevealObserver(selector = ".observe-reveal", visibleClass = "is-revealed") {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return () => {};

  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
  };
}
