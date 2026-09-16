import { createFileRoute } from "@tanstack/react-router";

import { StarArchive } from "@/components/archive/StarArchive";
import { archiveHead } from "@/i18n/archiveHead";

export const Route = createFileRoute("/star")({
  head: () => archiveHead("ko", "star"),
  component: () => <StarArchive locale="ko" />,
});
