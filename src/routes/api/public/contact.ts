import { createFileRoute } from "@tanstack/react-router";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const TO_EMAIL = "dannjo@clamoa.com";
// Requires clamoa.com (or a subdomain) to be verified in Resend with SPF/DKIM.
const FROM_EMAIL = "CLAMOA Inquiry <dannjo@clamoa.com>";

const MAX_LEN = 2000;
const clean = (v: unknown) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, "").slice(0, MAX_LEN).trim() : "";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          return Response.json(
            { ok: false, error: "email_not_configured" },
            { status: 500 },
          );
        }

        let payload: Record<string, unknown>;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
        }

        const f = {
          name: clean(payload.name),
          brand: clean(payload.brand),
          email: clean(payload.email),
          phone: clean(payload.phone),
          category: clean(payload.category),
          timing: clean(payload.timing),
          service: clean(payload.service),
          budget: clean(payload.budget),
          website: clean(payload.website),
          instagram: clean(payload.instagram),
          message: clean(payload.message),
        };

        if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
          return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
        }
        if (!f.name && !f.brand) {
          return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
        }

        const subject = `[CLAMOA 문의] ${f.brand || f.name || "New Inquiry"}`;

        const row = (k: string, v: string) =>
          `<tr><td style="padding:6px 12px;color:#666;white-space:nowrap;">${escapeHtml(k)}</td><td style="padding:6px 12px;">${escapeHtml(v) || "-"}</td></tr>`;

        const html = `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Arial,sans-serif;color:#111;">
<h2 style="margin:0 0 16px;">New Inquiry — CLAMOA</h2>
<table style="border-collapse:collapse;font-size:14px;">
${row("Name", f.name)}
${row("Brand", f.brand)}
${row("Email", f.email)}
${row("Phone", f.phone)}
${row("Product Category", f.category)}
${row("Campaign Timing", f.timing)}
${row("Service Interest", f.service)}
${row("Budget Range", f.budget)}
${row("Website", f.website)}
${row("Instagram", f.instagram)}
</table>
<h3 style="margin:24px 0 8px;">Message</h3>
<pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;margin:0;">${escapeHtml(f.message) || "-"}</pre>
</body></html>`;

        const text = [
          `Name: ${f.name}`,
          `Brand: ${f.brand}`,
          `Email: ${f.email}`,
          `Phone: ${f.phone}`,
          `Product Category: ${f.category}`,
          `Campaign Timing: ${f.timing}`,
          `Service Interest: ${f.service}`,
          `Budget Range: ${f.budget}`,
          `Website: ${f.website}`,
          `Instagram: ${f.instagram}`,
          "",
          "── Message ──",
          f.message,
        ].join("\n");

        const res = await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            reply_to: f.email,
            subject,
            html,
            text,
          }),
        });

        if (!res.ok) {
          const body = await res.text();
          console.error("resend_send_failed", res.status, body);
          return Response.json(
            { ok: false, error: "send_failed", status: res.status },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
