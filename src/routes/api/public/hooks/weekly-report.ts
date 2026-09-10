import { createFileRoute } from "@tanstack/react-router";

const TO_EMAIL = "dannjo@clamoa.com";

const LOCALE_NAME: Record<string, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "简体中文",
  vi: "Tiếng Việt",
  th: "ไทย",
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

type Row = Record<string, unknown>;

function table(title: string, headers: string[], rows: string[][]) {
  if (!rows.length) {
    return `<h3 style="margin:24px 0 8px;">${esc(title)}</h3><p style="color:#888;font-size:13px;margin:0;">기록 없음</p>`;
  }
  return `<h3 style="margin:24px 0 8px;">${esc(title)}</h3>
<table style="border-collapse:collapse;font-size:14px;width:100%;max-width:640px;">
<tr>${headers.map((h) => `<th align="left" style="padding:6px 12px;border-bottom:1px solid #ddd;color:#666;">${esc(h)}</th>`).join("")}</tr>
${rows
  .map(
    (r) =>
      `<tr>${r.map((c) => `<td style="padding:6px 12px;border-bottom:1px solid #f0f0f0;">${esc(c)}</td>`).join("")}</tr>`,
  )
  .join("")}
</table>`;
}

const str = (v: unknown) => (v === null || v === undefined || v === "" ? "-" : String(v));

export const Route = createFileRoute("/api/public/hooks/weekly-report")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const provided = request.headers.get("x-report-key") ?? "";
        if (!provided) return new Response("Unauthorized", { status: 401 });

        const GAS_CONTACT_URL = process.env.GAS_CONTACT_URL;

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const envSecret = process.env.REPORT_CRON_SECRET ?? "";
        let allowed = envSecret !== "" && provided === envSecret;
        if (!allowed) {
          const { data: keyRow } = await supabaseAdmin
            .from("app_secrets")
            .select("value")
            .eq("key", "report_cron_token")
            .maybeSingle();
          allowed = !!keyRow?.value && keyRow.value === provided;
        }
        if (!allowed) return new Response("Unauthorized", { status: 401 });
        const { data, error } = await supabaseAdmin.rpc("weekly_event_report", { _days: 7 });
        if (error) {
          console.error("weekly_report_query_failed", error.message);
          return Response.json({ ok: false, error: error.message }, { status: 500 });
        }

        const r = (data ?? {}) as Record<string, unknown>;
        const byLocale = (r.by_locale ?? []) as Row[];
        const langSwitch = (r.language_switch ?? []) as Row[];
        const serviceClicks = (r.service_clicks ?? []) as Row[];
        const journalClicks = (r.journal_clicks ?? []) as Row[];
        const topPages = (r.top_pages ?? []) as Row[];

        const today = new Date();
        const from = new Date(today.getTime() - 7 * 86400000);
        const d = (x: Date) => x.toISOString().slice(0, 10);

        const html = `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Arial,sans-serif;color:#111;">
<h2 style="margin:0 0 4px;">CLAMOA 주간 리포트</h2>
<p style="color:#666;font-size:13px;margin:0 0 16px;">${d(from)} ~ ${d(today)} · 총 이벤트 ${str(r.total_events)}건 · 방문 세션 ${str(r.sessions)}개</p>
${table(
  "언어별 유입",
  ["언어", "페이지 조회", "세션", "클릭"],
  byLocale.map((x) => [
    LOCALE_NAME[String(x.locale)] ?? String(x.locale),
    str(x.views),
    str(x.sessions),
    str(x.clicks),
  ]),
)}
${table(
  "언어 메뉴 클릭",
  ["선택한 언어", "클릭 수"],
  langSwitch.map((x) => [LOCALE_NAME[String(x.target)] ?? String(x.target), str(x.clicks)]),
)}
${table(
  "서비스 클릭",
  ["서비스", "언어", "클릭 수"],
  serviceClicks.map((x) => [str(x.item), LOCALE_NAME[String(x.locale)] ?? str(x.locale), str(x.clicks)]),
)}
${table(
  "저널 클릭",
  ["기사", "언어", "클릭 수"],
  journalClicks.map((x) => [str(x.item), LOCALE_NAME[String(x.locale)] ?? str(x.locale), str(x.clicks)]),
)}
${table(
  "인기 페이지",
  ["페이지", "조회"],
  topPages.map((x) => [str(x.path), str(x.views)]),
)}
</body></html>`;

        const text = [
          `CLAMOA 주간 리포트 (${d(from)} ~ ${d(today)})`,
          `총 이벤트 ${str(r.total_events)} / 세션 ${str(r.sessions)}`,
          "",
          "[언어별 유입]",
          ...byLocale.map(
            (x) =>
              `${LOCALE_NAME[String(x.locale)] ?? x.locale}: 조회 ${str(x.views)}, 세션 ${str(x.sessions)}, 클릭 ${str(x.clicks)}`,
          ),
          "",
          "[서비스 클릭]",
          ...serviceClicks.map((x) => `${x.item} (${x.locale}): ${str(x.clicks)}`),
          "",
          "[저널 클릭]",
          ...journalClicks.map((x) => `${x.item} (${x.locale}): ${str(x.clicks)}`),
        ].join("\n");

        if (!GAS_CONTACT_URL) {
          return Response.json({ ok: false, error: "email_not_configured" }, { status: 500 });
        }

        try {
          const res = await fetch(GAS_CONTACT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: TO_EMAIL,
              subject: `[CLAMOA] 주간 리포트 ${d(from)} ~ ${d(today)}`,
              html,
              text,
            }),
          });
          if (!res.ok) {
            const body = await res.text();
            console.error("weekly_report_send_failed", res.status, body);
            return Response.json({ ok: false, status: res.status }, { status: 502 });
          }
        } catch (err) {
          console.error("weekly_report_send_exception", err);
          return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
