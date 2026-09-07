import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/BlogPostPage";
import { getPost } from "@/data/blog";
import { blogPostHead } from "@/i18n/blogHead";

export const Route = createFileRoute("/ja/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost("ja", params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => blogPostHead("ja", params.slug, loaderData?.post),
  component: PostRoute,
});

function PostRoute() {
  const { post } = Route.useLoaderData();
  return <BlogPostPage locale="ja" post={post} />;
}
