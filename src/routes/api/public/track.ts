import { createFileRoute } from "@tanstack/react-router";

const TYPES = new Set([
  "page_view",
  "language_select",
  "service_click",
  "journal_click",
]);

const clean = (v: unknown, max = 300) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, "").slice(0, max).trim() : "";

export const Route = createFileRoute("/api/public/track")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: Record<string, unknown>;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ ok: false }, { status: 400 });
        }

        const eventType = clean(payload.event_type, 40);
        if (!TYPES.has(eventType)) {
          return Response.json({ ok: false, error: "invalid_event" }, { status: 400 });
        }

        const row = {
          event_type: eventType,
          locale: clean(payload.locale, 10) || "ko",
          label: clean(payload.label, 120),
          path: clean(payload.path, 300),
          session_id: clean(payload.session_id, 80),
          referrer: clean(payload.referrer, 300),
        };

        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { error } = await supabaseAdmin.from("site_events").insert(row);
          if (error) {
            console.error("track_insert_failed", error.message);
            return Response.json({ ok: false }, { status: 500 });
          }
        } catch (err) {
          console.error("track_exception", err);
          return Response.json({ ok: false }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
