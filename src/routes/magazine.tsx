import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/magazine")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/editorial-viral-pr",
      statusCode: 301,
      throw: true,
    });
  },
});
