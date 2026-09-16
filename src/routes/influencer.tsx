import { createFileRoute } from "@tanstack/react-router";

import { InfluencerArchive } from "@/components/archive/InfluencerArchive";
import { archiveHead } from "@/i18n/archiveHead";

export const Route = createFileRoute("/influencer")({
  head: () => archiveHead("ko", "influencer"),
  component: () => <InfluencerArchive locale="ko" />,
});
