import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { blogIndexHead } from "@/i18n/blogHead";

export const Route = createFileRoute("/ja/journal/")({
  head: () => blogIndexHead("ja"),
  component: () => <BlogIndexPage locale="ja" />,
});
