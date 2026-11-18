/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY SMOOTH SCROLL & ACTIVE LINK CONTROLLER (JavaScript)
 * Native performance scroll easing and viewport active state manager
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Smoothly scrolls to a specific DOM element by ID
 * @param {string} targetId
 * @param {number} offsetTop
 */
export function smoothScrollToTarget(targetId, offsetTop = 80) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = el.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offsetTop;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

/**
 * Initializes active scroll link highlighting
 * @param {Array<string>} sectionIds
 * @param {function} onActiveChange
 * @returns {function} Cleanup function
 */
export function initScrollSpy(sectionIds, onActiveChange) {
  if (typeof window === "undefined") return () => {};

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 120;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          onActiveChange(sectionIds[i]);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
