import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { blogIndexHead } from "@/i18n/blogHead";

export const Route = createFileRoute("/zh/journal/")({
  head: () => blogIndexHead("zh"),
  component: () => <BlogIndexPage locale="zh" />,
});
