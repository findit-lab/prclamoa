import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/influencer")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/influencer-pr",
      statusCode: 301,
      throw: true,
    });
  },
});
