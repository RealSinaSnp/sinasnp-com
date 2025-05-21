// app/blog/[slug]/generateStaticParams.ts
import Post from "@/models/post.model";
import { connectToDB } from "@/lib/mongodb";

export async function generateStaticParams() {
  await connectToDB();
  const posts = await Post.find({}, "slug");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
