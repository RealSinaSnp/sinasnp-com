// app/blog/[slug]/page.tsx
import { connectToDB } from "@/lib/mongodb";
import Post from "@/models/post.model";
import MarkdownViewer from "./MarkdownViewer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Post as PostType } from "@/lib/types";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // ISR, revalidate every 60 seconds

export default async function PostPage({ params }: Props) {
  const { slug } = await params; // Await the Promise to get the slug
  await connectToDB();
  const post = await Post.findOne({ slug }).lean() as PostType | null;
  const session = await getServerSession(authOptions);

  if (!post) {
    return (
      <div className="p-4 text-red-500">
        Post not found
      </div>);
  }

  return (
    <main className="px-6 md:px-20 py-10 bg-[#202020] bg-gradient-noise min-h-screen">
      <div className="prose prose-invert prose-sm max-w-7xl mx-auto p-2 ">
        <h1>{post.title}</h1>
        <p className="text-gray-400 text-sm">{new Date(post.createdAt).toLocaleString()}</p>

        {post.content ? (
          <MarkdownViewer content={post.content} />
        ) : (
          <p>No content available.</p>
        )}

        {session?.user && (
          <div className="mt-4">
            <Link
              href={`/blog/admin/${post.slug}`}
              aria-label="Edit Post"
              className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              ✏️ Edit Post
            </Link>
            <LogoutButton />
          </div>
        )}
      </div>
    </main>
  );
}