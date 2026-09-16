import { createFileRoute } from "@tanstack/react-router";

import { EventArchive } from "@/components/archive/EventArchive";
import { archiveHead } from "@/i18n/archiveHead";

export const Route = createFileRoute("/event")({
  head: () => archiveHead("ko", "event"),
  component: () => <EventArchive locale="ko" />,
});
