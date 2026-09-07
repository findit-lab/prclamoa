import { createFileRoute } from "@tanstack/react-router";

import { LocalizedServicesHub } from "@/components/LocalizedServicesHub";
import { servicesHubHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/vi/services/")({
  head: () => servicesHubHead("vi"),
  component: () => <LocalizedServicesHub locale="vi" />,
});
