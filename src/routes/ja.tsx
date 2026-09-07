import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { homeHead } from "@/i18n/head";

export const Route = createFileRoute("/ja")({
  head: () => homeHead("ja"),
  component: () => <HomePage locale="ja" />,
});
