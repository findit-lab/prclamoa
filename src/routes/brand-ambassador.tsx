import { createFileRoute } from "@tanstack/react-router";

import { AmbassadorArchive } from "@/components/archive/AmbassadorArchive";
import { archiveHead } from "@/i18n/archiveHead";

export const Route = createFileRoute("/brand-ambassador")({
  head: () => archiveHead("ko", "brand-ambassador"),
  component: () => <AmbassadorArchive locale="ko" />,
});
