import { createFileRoute, notFound } from "@tanstack/react-router";

import { LocalizedServiceDetail } from "@/components/LocalizedServiceDetail";
import { getService } from "@/data/services";
import { serviceDetailHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/zh/services/$slug")({
  loader: ({ params }) => {
    const service = getService("zh", params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? serviceDetailHead("zh", loaderData.service)
      : { meta: [{ title: "Not found | CLAMOA" }, { name: "robots", content: "noindex" }] },
  component: ServiceDetailRoute,
});

function ServiceDetailRoute() {
  const { service } = Route.useLoaderData();
  return <LocalizedServiceDetail locale="zh" service={service} />;
}
