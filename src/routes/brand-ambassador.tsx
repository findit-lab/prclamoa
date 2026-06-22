import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/brand-ambassador")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/brand-ambassador",
      statusCode: 301,
      throw: true,
    });
  },
});
