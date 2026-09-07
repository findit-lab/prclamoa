import { createFileRoute, notFound } from "@tanstack/react-router";

import { LocalizedServiceDetail } from "@/components/LocalizedServiceDetail";
import { getService } from "@/data/services";
import { serviceDetailHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/ja/services/$slug")({
  loader: ({ params }) => {
    const service = getService("ja", params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? serviceDetailHead("ja", loaderData.service)
      : { meta: [{ title: "Not found | CLAMOA" }, { name: "robots", content: "noindex" }] },
  component: ServiceDetailRoute,
});

function ServiceDetailRoute() {
  const { service } = Route.useLoaderData();
  return <LocalizedServiceDetail locale="ja" service={service} />;
}
