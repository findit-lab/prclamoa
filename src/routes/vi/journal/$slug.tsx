import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/BlogPostPage";
import { getPost } from "@/data/blog";
import { blogPostHead } from "@/i18n/blogHead";

export const Route = createFileRoute("/vi/journal/$slug")({
  loader: ({ params }) => {
    const post = getPost("vi", params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => blogPostHead("vi", params.slug, loaderData?.post),
  component: PostRoute,
});

function PostRoute() {
  const { post } = Route.useLoaderData();
  return <BlogPostPage locale="vi" post={post} />;
}
