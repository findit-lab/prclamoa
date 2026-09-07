import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { homeHead } from "@/i18n/head";

export const Route = createFileRoute("/en/")({
  head: () => homeHead("en"),
  component: () => <HomePage locale="en" />,
});
