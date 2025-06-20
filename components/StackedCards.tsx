// @/components/StackedCards.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Hash } from "lucide-react";
import { Post } from "@/lib/types";
import { useTheme } from "next-themes";

export default function StackedCards() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3]);
  const [imgErrors, setImgErrors] = useState<{ [key: number]: boolean }>({});
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

  const handleImageError = (index: number) => {
    setImgErrors((prev) => ({ ...prev, [index]: true }));
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
            const formattedDate = new Date(post.createdAt).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );
            const imageSrc =
              !imgErrors[postIndex] && post.imageUrl
                ? post.imageUrl
                : "/img/placeholder1.png";

            return (
              <div
                key={post._id}
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-neutral-900 border-neutral-800 text-white"
                    : "bg-neutral-100 border-neutral-300 text-black"
                } border border-[1px] cursor-pointer overflow-hidden`}
                style={getCardStyle(position)}
                onClick={handleCardClick}
              >
                <div className="h-full flex flex-col p-4">
                  {/* Row 1: Date/Tags (Column 1) + Image (Column 2) */}
                  <div className=" grid-cols-2 flex flex-row gap-4 mb-4 ">
                    {/* Column 1: Date and Tags */}
                    <div className="flex-[1.5] flex flex-col justify-start">
                      <p
                        className={`text-xs font-mono mb-2 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formattedDate}
                      </p>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-col gap-1">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className={`inline-flex items-center text-xs font-mono px-2 py-1 rounded ${
                                isDark 
                                  ? "bg-black/20 text-gray-300" 
                                  : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              <Hash className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span
                              className={`text-xs font-mono ${
                                isDark ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Column 2: Image */}
                    <div className={`flex-[3.8] w-full h-35 overflow-hidden ${isDark ? "bg-neutral-800/10" : "bg-neutral-200/30"} rounded`}>
                      <Image
                        src={imageSrc}
                        onError={() => handleImageError(postIndex)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        width={300}
                        height={96}
                      />
                    </div>
                  </div>

                  {/* Row 2: Rest of content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title and Content */}
                    <div className="space-y-2 flex-1">
                      <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      {post.content && (
                        <p
                          className={`text-xs leading-relaxed line-clamp-2 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {post.content.slice(0, 160)}...
                        </p>
                      )}
                    </div>

                    {/* Footer with Read Button */}
                    <div className="pt-3 mt-auto">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-teal-500">
                          Click to cycle through posts
                        </span>
                        <button
                          className="px-2 py-1 border text-xs uppercase font-mono tracking-widest rounded-full bg-transparent text-teal-500 border-teal-600 hover:shadow-[0_0_10px_rgba(20,184,166,0.7)] transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (post.slug !== "#") {
                              window.open(`/blog/${post.slug}`, "_blank");
                            }
                          }}
                        >
                          read post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}