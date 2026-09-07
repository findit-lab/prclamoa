import { createFileRoute } from "@tanstack/react-router";

import { LocalizedServicesHub } from "@/components/LocalizedServicesHub";
import { servicesHubHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/th/services/")({
  head: () => servicesHubHead("th"),
  component: () => <LocalizedServicesHub locale="th" />,
});
