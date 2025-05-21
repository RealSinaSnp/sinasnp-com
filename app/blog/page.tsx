// @/app/blog/page.tsx
import PostCard from "@/components/PostCard";
import Starfield from '@/components/Starfield';
import { Post } from "@/lib/types";



const BlogPage = async () => {
  let posts: Post[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch posts");
    posts = await res.json();
  } catch (error) {
    console.error("Error loading posts:", error);
  }

  return (
    <main className="px-6 md:px-20 py-10 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto ">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.03}
        backgroundColor="black"
      />
        {posts.length === 0 ? (
          <p className="text-gray-500">No blog posts provided.</p>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogPage;