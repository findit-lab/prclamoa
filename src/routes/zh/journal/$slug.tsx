import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/BlogPostPage";
import { getPost } from "@/data/blog";
import { blogPostHead } from "@/i18n/blogHead";

export const Route = createFileRoute("/zh/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost("zh", params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => blogPostHead("zh", params.slug, loaderData?.post),
  component: PostRoute,
});

function PostRoute() {
  const { post } = Route.useLoaderData();
  return <BlogPostPage locale="zh" post={post} />;
}
