import { useEffect } from "react";

const SESSION_KEY = "clamoa_session_id";
const ENDPOINT = "/api/public/track";

export type SiteEventType =
  | "page_view"
  | "language_select"
  | "service_click"
  | "journal_click";

function sessionId() {
  try {
    let v = sessionStorage.getItem(SESSION_KEY);
    if (!v) {
      v = `clamoa.${Date.now()}.${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem(SESSION_KEY, v);
    }
    return v;
  } catch {
    return "";
  }
}

/** Fire-and-forget click/pageview tracking. Never blocks navigation. */
export function trackSiteEvent(
  eventType: SiteEventType,
  data: { locale: string; label?: string; path?: string },
) {
  if (typeof window === "undefined") return;
  const body = JSON.stringify({
    event_type: eventType,
    locale: data.locale,
    label: data.label ?? "",
    path: data.path ?? window.location.pathname,
    session_id: sessionId(),
    referrer: document.referrer,
  });

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon(ENDPOINT, blob)) return;
    }
  } catch {
    // fall through to fetch
  }

  fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body,
  }).catch(() => {});
}

/** Records one page view per mounted page. */
export function usePageView(locale: string, label?: string) {
  useEffect(() => {
    trackSiteEvent("page_view", { locale, label: label ?? "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, label]);
}
