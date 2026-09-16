import { createFileRoute, notFound } from "@tanstack/react-router";

import { LocalizedArchive, isArchiveSlug } from "@/components/archive/LocalizedArchive";
import { archiveHead } from "@/i18n/archiveHead";

export const Route = createFileRoute("/ja/archive/$slug")({
  loader: ({ params }) => {
    if (!isArchiveSlug(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) =>
    loaderData
      ? archiveHead("ja", loaderData.slug)
      : { meta: [{ title: "Not found | CLAMOA" }, { name: "robots", content: "noindex" }] },
  component: ArchiveRoute,
});

function ArchiveRoute() {
  const { slug } = Route.useLoaderData();
  return <LocalizedArchive locale="ja" slug={slug} />;
}
