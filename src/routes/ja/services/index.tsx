import { createFileRoute } from "@tanstack/react-router";

import { LocalizedServicesHub } from "@/components/LocalizedServicesHub";
import { servicesHubHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/ja/services/")({
  head: () => servicesHubHead("ja"),
  component: () => <LocalizedServicesHub locale="ja" />,
});
