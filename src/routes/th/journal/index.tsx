import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { blogIndexHead } from "@/i18n/blogHead";

export const Route = createFileRoute("/th/journal/")({
  head: () => blogIndexHead("th"),
  component: () => <BlogIndexPage locale="th" />,
});
