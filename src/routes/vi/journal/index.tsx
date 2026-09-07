import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { blogIndexHead } from "@/i18n/blogHead";

export const Route = createFileRoute("/vi/journal/")({
  head: () => blogIndexHead("vi"),
  component: () => <BlogIndexPage locale="vi" />,
});
