/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY MODAL & NAVIGATION DRAWER CONTROLLER (JavaScript)
 * Accessible focus trapping, smooth drawer transitions, and backdrop locks
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Locks background window scrolling when mobile menu or modal is active
 * @param {boolean} locked
 */
export function lockScroll(locked) {
  if (typeof document === "undefined") return;
  if (locked) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "6px"; // prevent layout shift on scrollbar hide
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
}

/**
 * Binds Escape key to close open dialogs or navigation drawers
 * @param {function} onClose
 * @returns {function} Cleanup listener
 */
export function bindEscapeKey(onClose) {
  if (typeof window === "undefined") return () => {};

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && typeof onClose === "function") {
      onClose();
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}

/**
 * Traps tab focus inside a container element for accessibility
 * @param {HTMLElement} container
 * @returns {function} Cleanup
 */
export function trapFocus(container) {
  if (!container) return () => {};

  const focusableElements = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );

  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];

  const handleTab = (e) => {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener("keydown", handleTab);
  first?.focus();

  return () => {
    container.removeEventListener("keydown", handleTab);
  };
}
