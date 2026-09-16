import { createFileRoute } from "@tanstack/react-router";

import { ViralArchive } from "@/components/archive/ViralArchive";
import { archiveHead } from "@/i18n/archiveHead";

export const Route = createFileRoute("/viral")({
  head: () => archiveHead("ko", "viral"),
  component: () => <ViralArchive locale="ko" />,
});
