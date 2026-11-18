/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY TYPEWRITER & CHARACTER MORPH ENGINE (JavaScript)
 * Smooth character reveal and subtitle cycling with natural pauses
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Creates a typewriter controller for dynamic phrases
 * @param {HTMLElement} targetElement
 * @param {Array<string>} phrases
 * @param {object} options
 * @returns {function} Cleanup function
 */
export function initLuxuryTypewriter(
  targetElement,
  phrases,
  options = {
    typeSpeed: 60,
    backSpeed: 35,
    pauseDelay: 2200,
    loop: true,
  }
) {
  if (!targetElement || !phrases || !phrases.length) return () => {};

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId = null;
  let isRunning = true;

  const tick = () => {
    if (!isRunning) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      targetElement.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      targetElement.textContent = currentPhrase.substring(0, charIndex);
    }

    let delta = isDeleting ? options.backSpeed : options.typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delta = options.pauseDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delta = 500;
    }

    timeoutId = setTimeout(tick, delta);
  };

  tick();

  return () => {
    isRunning = false;
    if (timeoutId) clearTimeout(timeoutId);
  };
}
