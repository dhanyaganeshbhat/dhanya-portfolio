/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY THEME & REDUCED MOTION PREFERENCES CONTROLLER (JavaScript)
 * Client accessibility preferences, particle density adjustments & animation tuning
 * ═══════════════════════════════════════════════════════════════════════════
 */

const PREF_KEY_MOTION = "dgb_reduced_motion";
const PREF_KEY_SOUND = "dgb_sound_feedback";
const PREF_KEY_THEME_VARIANT = "dgb_theme_variant";

/**
 * Checks system preferences for prefers-reduced-motion
 * @returns {boolean} Whether system prefers reduced motion
 */
export function getSystemReducedMotionPreference() {
  if (typeof window === "undefined") return false;
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  return mediaQuery.matches;
}

/**
 * Retrieves saved reduced motion preference or system default
 * @returns {boolean} Active reduced motion flag
 */
export function getReducedMotionSetting() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem(PREF_KEY_MOTION);
  if (saved !== null) {
    return saved === "true";
  }
  return getSystemReducedMotionPreference();
}

/**
 * Stores reduced motion preference and toggles html classes
 * @param {boolean} enabled
 */
export function setReducedMotionSetting(enabled) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PREF_KEY_MOTION, String(enabled));
  document.documentElement.classList.toggle("reduced-motion", enabled);
}

/**
 * Checks if sound effects are enabled in user storage
 * @returns {boolean}
 */
export function getSoundSetting() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem(PREF_KEY_SOUND);
  return saved === "true";
}

/**
 * Stores sound effects preference in localStorage
 * @param {boolean} enabled
 */
export function setSoundSetting(enabled) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PREF_KEY_SOUND, String(enabled));
}

/**
 * Gets particle count multiplier based on device performance capability
 * @returns {number} Multiplier factor between 0.5 and 1.0
 */
export function getOptimalParticleDensity() {
  if (typeof window === "undefined") return 1.0;
  // If low memory or mobile device detected, gently scale particle budget
  const isMobile = window.innerWidth < 768;
  const prefersReduced = getReducedMotionSetting();

  if (prefersReduced) return 0;
  if (isMobile) return 0.5;
  return 1.0;
}

/**
 * Listens for system media query changes regarding animations
 * @param {function} callback
 * @returns {function} Cleanup listener
 */
export function watchSystemMotionPreferences(callback) {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handler = (e) => {
    if (typeof callback === "function") {
      callback(e.matches);
    }
  };

  mediaQuery.addEventListener("change", handler);
  return () => mediaQuery.removeEventListener("change", handler);
}
