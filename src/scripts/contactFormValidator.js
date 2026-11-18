/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY CONTACT FORM VALIDATOR & MAILING PROTOCOL (JavaScript)
 * Input sanitization, email verification, and RFC-compliant mailto protocol
 * ═══════════════════════════════════════════════════════════════════════════
 */

/**
 * Validates email address format with strict RFC regex
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmailAddress(email) {
  if (!email || typeof email !== "string") return false;
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email.trim());
}

/**
 * Sanitizes user input string against HTML injection
 * @param {string} str
 * @returns {string}
 */
export function sanitizeInputString(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Formats and generates a direct mailto URI for Dhanya Ganesh Bhat
 * @param {{name: string, email: string, subject: string, message: string}} payload
 * @returns {string}
 */
export function constructDirectMailtoUri(payload) {
  const recipient = "dhanyabhaz@gmail.com";
  const subjectText = payload.subject
    ? `[Portfolio Inquiry] ${payload.subject}`
    : `Inquiry from ${payload.name || "Portfolio Visitor"}`;

  const bodyContent = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    "Message:",
    payload.message,
    "",
    "—",
    "Sent via dhanyaganeshbhat portfolio contact portal",
  ].join("\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(
    subjectText
  )}&body=${encodeURIComponent(bodyContent)}`;
}

/**
 * Copies a string to clipboard with status feedback
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export async function copyTextToClipboard(text) {
  if (!navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return false;
  }
}
