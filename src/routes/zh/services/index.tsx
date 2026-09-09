import { createFileRoute } from "@tanstack/react-router";

import { LocalizedServicesHub } from "@/components/LocalizedServicesHub";
import { servicesHubHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/zh/services/")({
  head: () => servicesHubHead("zh"),
  component: () => <LocalizedServicesHub locale="zh" />,
});
