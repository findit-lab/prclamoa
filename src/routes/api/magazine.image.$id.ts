import { createFileRoute } from "@tanstack/react-router";
import magazineImages from "@/data/magazine-images.json";

const allowedIds = new Set((magazineImages as Array<{ id: string }>).map((f) => f.id));

export const Route = createFileRoute("/api/magazine/image/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = params.id;
        if (!allowedIds.has(id)) {
          return new Response("Not found", { status: 404 });
        }
        const lovableKey = process.env.LOVABLE_API_KEY;
        const driveKey = process.env.GOOGLE_DRIVE_API_KEY;
        if (!lovableKey || !driveKey) {
          return new Response("Server misconfigured", { status: 500 });
        }
        const upstream = await fetch(
          `https://connector-gateway.lovable.dev/google_drive/drive/v3/files/${id}?alt=media`,
          {
            headers: {
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": driveKey,
            },
          },
        );
        if (!upstream.ok) {
          return new Response(`Upstream error: ${upstream.status}`, { status: 502 });
        }
        const contentType = upstream.headers.get("content-type") ?? "image/jpeg";
        return new Response(upstream.body, {
          status: 200,
          headers: {
            "content-type": contentType,
            "cache-control": "public, max-age=86400, s-maxage=604800, immutable",
          },
        });
      },
    },
  },
});
