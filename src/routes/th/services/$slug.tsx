import { createFileRoute, notFound } from "@tanstack/react-router";

import { LocalizedServiceDetail } from "@/components/LocalizedServiceDetail";
import { getService } from "@/data/services";
import { serviceDetailHead } from "@/i18n/serviceHead";

export const Route = createFileRoute("/th/services/$slug")({
  loader: ({ params }) => {
    const service = getService("th", params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    loaderData
      ? serviceDetailHead("th", loaderData.service)
      : { meta: [{ title: "Not found | CLAMOA" }, { name: "robots", content: "noindex" }] },
  component: ServiceDetailRoute,
});

function ServiceDetailRoute() {
  const { service } = Route.useLoaderData();
  return <LocalizedServiceDetail locale="th" service={service} />;
}
