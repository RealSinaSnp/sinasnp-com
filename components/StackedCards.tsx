// @/components/StackedCards.tsx
"use client";

import { useState, useEffect } from "react";
import { Post } from "@/lib/types";
import { useTheme } from "next-themes";
import StackedCardsContent from "@/components/StackedCardsContent";

export default function StackedCards() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Fetch posts on client side
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts?limit=4");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const fetchedPosts = await res.json();

        // Pad with placeholder if less than 4 posts
        const paddedPosts = [...fetchedPosts];
        while (paddedPosts.length < 4) {
          paddedPosts.push({
            _id: `placeholder-${paddedPosts.length}`,
            title: "Coming Soon...",
            slug: "#",
            description: "More content coming soon",
            content: "Stay tuned for more blog posts!",
            createdAt: new Date(),
            tags: ["coming-soon"],
          });
        }

        setPosts(paddedPosts.slice(0, 4));
      } catch (error) {
        console.error("Error loading posts:", error);
        // Set placeholder posts on error
        setPosts([
          {
            _id: "error-1",
            title: "Unable to load posts",
            slug: "#",
            description: "Please try again later",
            content: "There was an error loading the blog posts.",
            createdAt: new Date(),
            tags: ["error"],
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const handleCardClick = () => {
    setCardOrder((prev) => {
      const newOrder = [...prev];
      const frontCard = newOrder.shift();
      newOrder.push(frontCard!);
      return newOrder;
    });
  };

  

  const getCardStyle = (position: number) => {
    const transforms = [
      { x: 0, scale: 1, zIndex: 4 },
      { x: -40, scale: 0.9, zIndex: 3 },
      { x: -80, scale: 0.8, zIndex: 2 },
      { x: -120, scale: 0.7, zIndex: 1 },
    ];

    return {
      transform: `translateX(${transforms[position].x}px) scale(${transforms[position].scale})`,
      zIndex: transforms[position].zIndex,
      transition: "all 0.3s ease-in-out",
    };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-500">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <section id="blog-showcase">
      <div className="flex justify-center">
        <div className="relative w-140 min-h-[320px] md:left-6">
          {cardOrder.map((postIndex, position) => {
            const post = posts[postIndex];
            const positionStyle = getCardStyle(position);

            return (
              <StackedCardsContent
                key={post._id}
                post={post}
                positionStyle={positionStyle}
                isDark={isDark}
                handleCardClick={handleCardClick}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}