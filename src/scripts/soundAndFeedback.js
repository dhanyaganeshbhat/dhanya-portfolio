/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY MICRO-INTERACTION SOUND & HAPTIC SYNTHESIZER (JavaScript)
 * Web Audio API procedural synthesis for gentle champagne clicks and hover tones
 * ═══════════════════════════════════════════════════════════════════════════
 */

let audioCtx = null;
let soundEnabled = false;

/**
 * Initializes or resumes the web audio context
 * @returns {AudioContext|null}
 */
export function getAudioContext() {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Toggles audio feedback state
 * @param {boolean} enable
 */
export function setSoundFeedbackEnabled(enable) {
  soundEnabled = enable;
  if (enable) getAudioContext();
}

/**
 * Generates an ethereal champagne chime frequency (e.g. on navigation or button hover)
 * @param {number} freq Frequency in Hz
 * @param {number} duration Duration in seconds
 */
export function playChampagneChime(freq = 880, duration = 0.12) {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (err) {
    // Audio contexts may be blocked by browser policy without user gesture
  }
}

/**
 * Generates a subtle tactile tick click on button presses
 */
export function playTactileClick() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (err) {}
}

/**
 * Triggers native haptic vibration if supported on mobile
 * @param {number} patternMs
 */
export function triggerHapticFeedback(patternMs = 12) {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(patternMs);
    } catch (e) {}
  }
}
