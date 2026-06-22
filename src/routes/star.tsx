import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/star")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/celebrity-seeding",
      statusCode: 301,
      throw: true,
    });
  },
});
