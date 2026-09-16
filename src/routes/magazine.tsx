import { createFileRoute } from "@tanstack/react-router";

import { MagazineArchive } from "@/components/archive/MagazineArchive";
import { archiveHead } from "@/i18n/archiveHead";

export const Route = createFileRoute("/magazine")({
  head: () => archiveHead("ko", "magazine"),
  component: () => <MagazineArchive locale="ko" />,
});
