import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/event")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/offline-event-pr",
      statusCode: 301,
      throw: true,
    });
  },
});
