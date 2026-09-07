import { createFileRoute } from "@tanstack/react-router";

import { LocalizedServicesHub } from "@/components/LocalizedServicesHub";
import { servicesHubHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/en/services/")({
  head: () => servicesHubHead("en"),
  component: () => <LocalizedServicesHub locale="en" />,
});
