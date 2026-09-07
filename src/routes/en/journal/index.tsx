import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { blogIndexHead } from "@/i18n/blogHead";

export const Route = createFileRoute("/en/journal/")({
  head: () => blogIndexHead("en"),
  component: () => <BlogIndexPage locale="en" />,
});
