// @/components/StackedCards.tsx (Server Component)
import StackedCardsClient from '@/components/StackedCardsClient';
import { Post } from "@/lib/types";

async function getLatestPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?limit=4`, 
      { 
        cache: "no-store",
        next: { revalidate: 300 } // Revalidate every 5 minutes
      }
    );
    
    if (!res.ok) throw new Error("Failed to fetch posts");
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error("Error loading latest posts:", error);
    return [];
  }
}

export default async function StackedCards() {
  const posts = await getLatestPosts();
  
  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">No blog posts found</p>
      </div>
    );
  }

  // Pad with placeholder if less than 4 posts
  const paddedPosts = [...posts];
  while (paddedPosts.length < 4) {
    paddedPosts.push({
      _id: `placeholder-${paddedPosts.length}`,
      title: "Coming Soon...",
      slug: "#",
      description: "More content coming soon",
      content: "Stay tuned for more blog posts!",
      createdAt: new Date(),
      tags: ["coming-soon"]
    });
  }

  return <StackedCardsClient posts={paddedPosts.slice(0, 4)} />;
}