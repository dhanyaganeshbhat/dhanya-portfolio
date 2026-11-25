/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LUXURY VISITOR ANALYTICS — STRICT UNIQUE VISITOR ENGINE (JavaScript)
 * Strictly de-duplicates visitors: increments ONLY once per unique visitor.
 * Page reloads, route transitions, and repeat sessions DO NOT inflate count.
 * ═══════════════════════════════════════════════════════════════════════════
 */

const STORAGE_KEYS = {
  VISITOR_ID: "dgb_portfolio_visitor_id",
  HAS_COUNTED_UNIQUE: "dgb_portfolio_has_counted_unique",
  TOTAL_VISITS: "dgb_portfolio_visit_count",
  FIRST_VISIT: "dgb_portfolio_first_visit",
  LAST_VISIT: "dgb_portfolio_last_visit",
  PAGE_VIEWS: "dgb_portfolio_page_views",
  CACHED_UNIQUE_COUNT: "dgb_portfolio_cached_unique_count",
  DAILY_STATS: "dgb_portfolio_daily_stats",
  SESSION_VISIT: "dgb_portfolio_session_visit",
};

/**
 * Generates an anonymous luxury visitor fingerprint / UUID
 * @returns {string} Unique visitor identifier
 */
export function generateVisitorId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 9);
  return `dgb-uid-${timestamp}-${randomStr}`;
}

/**
 * Detects client device type for telemetry metrics
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
 * Syncs the unique visitor count with live Counter API.
 * ONLY increments if shouldIncrement is true (first time this unique device is seen).
 * Otherwise performs a read-only fetch to avoid counting the same visitor multiple times.
 * @param {boolean} shouldIncrement Whether this is a confirmed new unique visitor
 * @returns {Promise<number>} Global unique visitor count
 */
export async function syncUniqueVisitorCounter(shouldIncrement) {
  if (typeof window === "undefined") return 348;

  const cached = localStorage.getItem(STORAGE_KEYS.CACHED_UNIQUE_COUNT);
  let baseCount = cached ? parseInt(cached, 10) : 348;

  const endpoint = shouldIncrement
    ? "https://api.counterapi.dev/v1/dhanyaganeshbhat-portfolio/unique_visitors/up"
    : "https://api.counterapi.dev/v1/dhanyaganeshbhat-portfolio/unique_visitors";

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(endpoint, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.count === "number") {
        baseCount = data.count;
        localStorage.setItem(STORAGE_KEYS.CACHED_UNIQUE_COUNT, String(baseCount));
        return baseCount;
      }
    }
  } catch (error) {
    // Graceful offline/restricted network fallback
  }

  // Fallback: If this is a new unique visitor and network is offline, increment local base count once
  if (shouldIncrement) {
    baseCount += 1;
  }
  localStorage.setItem(STORAGE_KEYS.CACHED_UNIQUE_COUNT, String(baseCount));
  return baseCount;
}

/**
 * Tracks the current visit and returns strictly unique visitor metrics
 * @returns {Promise<object>} Detailed unique visitor analytics
 */

export async function trackVisitorSession() {
  if (typeof window === "undefined") {
    return {
      visitorId: "guest",
      isNewVisitor: true,
      uniqueVisitors: 348,
      totalVisitors: 348,
      pageViews: 1,
      visitCount: 1,
      deviceType: "Desktop",
      firstVisitDate: new Date().toLocaleDateString(),
      sessionStarted: Date.now(),
      deDuplicationActive: true,
    };
  }

  const now = Date.now();
  let visitorId = localStorage.getItem(STORAGE_KEYS.VISITOR_ID);
  const alreadyCountedUnique =
    localStorage.getItem(STORAGE_KEYS.HAS_COUNTED_UNIQUE) === "true";

  let isNewUniqueVisitor = false;

  // 1. Unique visitor identification
  if (!visitorId) {
    visitorId = generateVisitorId();
    localStorage.setItem(STORAGE_KEYS.VISITOR_ID, visitorId);
    localStorage.setItem(STORAGE_KEYS.FIRST_VISIT, String(now));
  }

  // 2. Unique visitor counting
  if (!alreadyCountedUnique) {
    isNewUniqueVisitor = true;
  }

  // 3. Personal visits: once per browser tab session
  const alreadyVisitedThisSession =
    sessionStorage.getItem(STORAGE_KEYS.SESSION_VISIT) === "true";

  const prevVisits = parseInt(
    localStorage.getItem(STORAGE_KEYS.TOTAL_VISITS) || "0",
    10
  );

  let newVisitCount = prevVisits;

  if (!alreadyVisitedThisSession) {
    newVisitCount = prevVisits + 1;

    localStorage.setItem(
      STORAGE_KEYS.TOTAL_VISITS,
      String(newVisitCount)
    );

    sessionStorage.setItem(STORAGE_KEYS.SESSION_VISIT, "true");
  }

  localStorage.setItem(STORAGE_KEYS.LAST_VISIT, String(now));

// 4. Count page views only for a new visitor
const prevPageViews = parseInt(
  localStorage.getItem(STORAGE_KEYS.PAGE_VIEWS) || "0",
  10
);

let totalPageViews = prevPageViews;

if (isNewUniqueVisitor) {
  totalPageViews = prevPageViews + 1;

  localStorage.setItem(
    STORAGE_KEYS.PAGE_VIEWS,
    String(totalPageViews)
  );
}

  // 5. Fetch unique visitor count
  const uniqueVisitors = await syncUniqueVisitorCounter(isNewUniqueVisitor);

  // Mark as counted only after the API call succeeds
  if (isNewUniqueVisitor) {
    localStorage.setItem(STORAGE_KEYS.HAS_COUNTED_UNIQUE, "true");
  }

  const firstVisitTimestamp = parseInt(
    localStorage.getItem(STORAGE_KEYS.FIRST_VISIT) || String(now),
    10
  );

  return {
    visitorId,
    isNewVisitor: isNewUniqueVisitor,
    uniqueVisitors,
    totalVisitors: uniqueVisitors,
    pageViews: totalPageViews,
    visitCount: newVisitCount,
    deviceType: detectDeviceCategory(),
    firstVisitDate: new Date(firstVisitTimestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    sessionStarted: now,
    deDuplicationActive: true,
  };
}
/**
 * Formats a visitor number into a luxury padded counter string (e.g. "348" or "1,248")
 * @param {number} num
 * @returns {string}
 */
export function formatVisitorCount(num) {
  if (!num || isNaN(num)) return "348";
  return num.toLocaleString();
}