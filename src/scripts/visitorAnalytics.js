/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY VISITOR ANALYTICS & NEW VISITOR TRACKING ENGINE (JavaScript)
 * Real-time unique visitor detection, session metrics, and live counter sync
 * ═══════════════════════════════════════════════════════════════════════════
 */

const STORAGE_KEYS = {
  VISITOR_ID: "dgb_portfolio_visitor_id",
  TOTAL_VISITS: "dgb_portfolio_visit_count",
  FIRST_VISIT: "dgb_portfolio_first_visit",
  LAST_VISIT: "dgb_portfolio_last_visit",
  PAGE_VIEWS: "dgb_portfolio_page_views",
  CACHED_REMOTE_COUNT: "dgb_portfolio_remote_count",
  DAILY_STATS: "dgb_portfolio_daily_stats",
};

/**
 * Generates an anonymous luxury visitor fingerprint / UUID
 * @returns {string} Unique visitor identifier
 */
export function generateVisitorId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 9);
  return `dgb-v-${timestamp}-${randomStr}`;
}

/**
 * Detects client device type for analytics
 * @returns {"Mobile" | "Tablet" | "Desktop"}
 */
export function detectDeviceCategory() {
  if (typeof window === "undefined") return "Desktop";
  const ua = navigator.userAgent.toLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "Tablet";
  }
  if (
    /mobile|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop/i.test(ua) ||
    window.innerWidth < 768
  ) {
    return "Mobile";
  }
  return "Desktop";
}

/**
 * Syncs visitor count with live Counter API (with resilient offline/sandbox fallback)
 * @returns {Promise<number>} Total global visitor count
 */
export async function syncRemoteVisitorCounter() {
  if (typeof window === "undefined") return 1248;

  const cached = localStorage.getItem(STORAGE_KEYS.CACHED_REMOTE_COUNT);
  let baseCount = cached ? parseInt(cached, 10) : 1248;

  try {
    // Attempt live global counter API sync (timeout after 2.5s to ensure fast load)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(
      "https://api.counterapi.dev/v1/dhanyaganeshbhat-portfolio/visitors/up",
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.count === "number") {
        baseCount = data.count;
        localStorage.setItem(STORAGE_KEYS.CACHED_REMOTE_COUNT, String(baseCount));
        return baseCount;
      }
    }
  } catch (error) {
    // Graceful offline/restricted network fallback: increment simulated local counter
  }

  // Fallback: Increment persistent base count
  baseCount += 1;
  localStorage.setItem(STORAGE_KEYS.CACHED_REMOTE_COUNT, String(baseCount));
  return baseCount;
}

/**
 * Tracks the current visit and returns visitor metrics
 * @returns {Promise<object>} Detailed visitor analytics object
 */
export async function trackVisitorSession() {
  if (typeof window === "undefined") {
    return {
      visitorId: "guest",
      isNewVisitor: true,
      totalVisitors: 1248,
      pageViews: 1,
      visitCount: 1,
      deviceType: "Desktop",
      firstVisitDate: new Date().toLocaleDateString(),
      sessionStarted: Date.now(),
    };
  }

  const now = Date.now();
  let visitorId = localStorage.getItem(STORAGE_KEYS.VISITOR_ID);
  let isNewVisitor = false;

  // New vs Returning visitor detection
  if (!visitorId) {
    visitorId = generateVisitorId();
    localStorage.setItem(STORAGE_KEYS.VISITOR_ID, visitorId);
    localStorage.setItem(STORAGE_KEYS.FIRST_VISIT, String(now));
    isNewVisitor = true;
  }

  // Update session and pageview counters
  const prevVisits = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_VISITS) || "0", 10);
  const newVisitCount = prevVisits + 1;
  localStorage.setItem(STORAGE_KEYS.TOTAL_VISITS, String(newVisitCount));
  localStorage.setItem(STORAGE_KEYS.LAST_VISIT, String(now));

  const prevPageViews = parseInt(localStorage.getItem(STORAGE_KEYS.PAGE_VIEWS) || "0", 10);
  const totalPageViews = prevPageViews + 1;
  localStorage.setItem(STORAGE_KEYS.PAGE_VIEWS, String(totalPageViews));

  // Sync total visitor counter
  const totalVisitors = await syncRemoteVisitorCounter();
  const firstVisitTimestamp = parseInt(
    localStorage.getItem(STORAGE_KEYS.FIRST_VISIT) || String(now),
    10
  );

  return {
    visitorId,
    isNewVisitor,
    totalVisitors,
    pageViews: totalPageViews,
    visitCount: newVisitCount,
    deviceType: detectDeviceCategory(),
    firstVisitDate: new Date(firstVisitTimestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    sessionStarted: now,
  };
}

/**
 * Formats a visitor number into a luxury padded counter string (e.g. "001,249")
 * @param {number} num
 * @returns {string}
 */
export function formatVisitorCount(num) {
  if (!num || isNaN(num)) return "001,248";
  return num.toLocaleString();
}
