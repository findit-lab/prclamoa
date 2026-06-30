type LandingEventName = "PageView" | "ViewContent" | "Lead";

const LANDING_KEY = "clamoa";
const SESSION_KEY = "clamoa_session_id";
const ATTRIBUTION_KEY = "clamoa_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

let initialVisitTracked = false;

type UtmValues = Record<(typeof UTM_KEYS)[number], string>;

export function trackInitialLandingVisit() {
  if (initialVisitTracked) return;
  initialVisitTracked = true;
  trackLandingEvent("PageView", { content_name: "clamoa_landing" });
  trackLandingEvent("ViewContent", { content_name: "clamoa_landing" });
}

export function trackLandingEvent(
  eventName: LandingEventName,
  customData: Record<string, string> = {},
) {
  if (typeof window === "undefined") return;
  const endpoint = getEndpoint();
  if (!endpoint) return;

  const payload = {
    event_name: eventName,
    event_id: eventId(eventName),
    event_source_url: window.location.href,
    referrer: document.referrer,
    session_id: getSessionId(),
    landing_key: LANDING_KEY,
    utm: readAttribution(),
    custom_data: customData,
  };
  postJson(endpoint, payload);
}

function getEndpoint() {
  const fromEnv = import.meta.env.VITE_CLAMOA_UTM_EVENT_ENDPOINT || "";
  const fromMeta =
    document.querySelector<HTMLMetaElement>('meta[name="utm-event-endpoint"]')?.content || "";
  return (fromEnv || fromMeta).trim();
}

function getSessionId() {
  let value = storageGet(SESSION_KEY);
  if (!value) {
    value = `clamoa.${Date.now()}.${Math.random().toString(36).slice(2, 10)}`;
    storageSet(SESSION_KEY, value);
  }
  return value;
}

function readAttribution(): UtmValues {
  const stored = parseStoredAttribution();
  const params = new URLSearchParams(window.location.search);
  const current = UTM_KEYS.reduce((acc, key) => {
    acc[key] = params.get(key) || "";
    return acc;
  }, {} as UtmValues);

  if (!current.utm_source) {
    current.utm_source = inferSource(params, document.referrer);
  }
  if (!current.utm_medium && current.utm_source) {
    current.utm_medium = current.utm_source === "direct" ? "none" : "referral";
  }

  const hasCurrent = Object.values(current).some(Boolean);
  const merged = hasCurrent ? { ...stored, ...current } : stored;
  if (hasCurrent) storageSet(ATTRIBUTION_KEY, JSON.stringify(merged));
  return merged;
}

function inferSource(params: URLSearchParams, referrer: string) {
  if (params.get("gclid") || params.get("gad_source")) return "google";
  if (params.get("fbclid")) return "meta";
  if ([...params.keys()].some((key) => key.startsWith("n_"))) return "naver";

  let host = "";
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    return "";
  }
  if (host.includes("google.")) return "google";
  if (host.includes("naver.")) return "naver";
  if (host.includes("facebook.") || host.includes("instagram.")) return "meta";
  return "";
}

function parseStoredAttribution(): UtmValues {
  try {
    const raw = JSON.parse(storageGet(ATTRIBUTION_KEY) || "{}");
    return UTM_KEYS.reduce((acc, key) => {
      acc[key] = typeof raw[key] === "string" ? raw[key] : "";
      return acc;
    }, {} as UtmValues);
  } catch {
    return emptyUtm();
  }
}

function emptyUtm(): UtmValues {
  return UTM_KEYS.reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {} as UtmValues);
}

function eventId(eventName: LandingEventName) {
  return `clamoa.${eventName}.${Date.now()}.${Math.random().toString(36).slice(2, 10)}`;
}

function postJson(endpoint: string, payload: unknown) {
  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    if (navigator.sendBeacon(endpoint, blob)) return;
  }
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body,
  }).catch(() => {});
}

function storageGet(key: string) {
  try {
    return sessionStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

function storageSet(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // Storage may be disabled; tracking should never block the page.
  }
}
