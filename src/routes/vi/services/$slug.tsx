import { createFileRoute, notFound } from "@tanstack/react-router";

import { LocalizedServiceDetail } from "@/components/LocalizedServiceDetail";
import { getService } from "@/data/services";
import { serviceDetailHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/vi/services/$slug")({
  loader: ({ params }) => {
    const service = getService("vi", params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? serviceDetailHead("vi", loaderData.service)
      : { meta: [{ title: "Not found | CLAMOA" }, { name: "robots", content: "noindex" }] },
  component: ServiceDetailRoute,
});

function ServiceDetailRoute() {
  const { service } = Route.useLoaderData();
  return <LocalizedServiceDetail locale="vi" service={service} />;
}
