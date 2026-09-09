import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";
import { homeHead } from "@/i18n/head";

export const Route = createFileRoute("/zh/")({
  head: () => homeHead("zh"),
  component: () => <HomePage locale="zh" />,
});
