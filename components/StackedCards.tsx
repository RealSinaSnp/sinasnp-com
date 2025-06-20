// @/components/StackedCards.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Hash } from 'lucide-react';
import { Post } from "@/lib/types";

export default function StackedCards() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3]);
  const [imgErrors, setImgErrors] = useState<{[key: number]: boolean}>({});

  // Fetch posts on client side
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts?limit=4');
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
            tags: ["coming-soon"]
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
            tags: ["error"]
          },
          {
            _id: "error-2",
            title: "Coming Soon...",
            slug: "#",
            description: "More content coming soon",
            content: "Stay tuned for more blog posts!",
            createdAt: new Date(),
            tags: ["coming-soon"]
          },
          {
            _id: "error-3",
            title: "Coming Soon...",
            slug: "#",
            description: "More content coming soon", 
            content: "Stay tuned for more blog posts!",
            createdAt: new Date(),
            tags: ["coming-soon"]
          },
          {
            _id: "error-4",
            title: "Coming Soon...",
            slug: "#",
            description: "More content coming soon",
            content: "Stay tuned for more blog posts!",
            createdAt: new Date(),
            tags: ["coming-soon"]
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const handleCardClick = () => {
    setCardOrder(prev => {
      const newOrder = [...prev];
      const frontCard = newOrder.shift();
      newOrder.push(frontCard!);
      return newOrder;
    });
  };

  const handleImageError = (index: number) => {
    setImgErrors(prev => ({ ...prev, [index]: true }));
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
      transition: 'all 0.3s ease-in-out',
    };
  };

  const cardColors = [
      { bg: "bg-gradient-to-br from-gray-700 to-gray-500", border: "border-neutral-800" },
      { bg: "bg-gradient-to-bl from-gray-700 to-gray-500", border: "border-neutral-800" },
      { bg: "bg-gradient-to-br from-gray-700 to-gray-500", border: "border-neutral-800" },
      { bg: "bg-gradient-to-bl from-gray-700 to-gray-500", border: "border-neutral-800" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-500">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <section  id="blog-showcase">

      <div className="flex justify-center">
        <div className="relative w-140 min-h-[320px] left-2 md:left-6">
          {cardOrder.map((postIndex, position) => {
            const post = posts[postIndex];
            const colors = cardColors[postIndex];
            const formattedDate = new Date(post.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const imageSrc = !imgErrors[postIndex] && post.imageUrl ? post.imageUrl : "/img/placeholder1.png";

            return (
              <div
                key={post._id}
                className={`absolute inset-0 bg-[#161616]  border ${colors.border} cursor-pointer overflow-hidden px-2`}
                style={getCardStyle(position)}
                onClick={handleCardClick}
              >
                <div className="h-full flex flex-col text-white relative">
                  {/* Header with Date */}
                  <div className="p-4 pb-3">
                    <p className="text-xs font-mono text-gray-300">{formattedDate}</p>
                    
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="inline-flex items-center text-xs font-mono bg-black/20 pr-2 py-1">
                            <Hash className="w-3 h-3"/>
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs font-mono text-gray-300">+{post.tags.length - 2}</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Image Section */}
                  <div className="flex-1 px-4">
                    <div className="w-full h-35 overflow-hidden bg-black/20  mb-3">
                      <Image
                        src={imageSrc}
                        onError={() => handleImageError(postIndex)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        width={300}
                        height={96}
                      />
                    </div>

                    {/* Title and Content */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      {post.content && (
                        <p className="text-gray-200 text-xs leading-relaxed line-clamp-2">
                          {post.content.slice(0, 80)}...
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer with Read Button */}
                  <div className="p-4 pt-3 mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-gray-400">Click to cycle</span>
                      <button 
                        className="px-2 py-1 border text-xs uppercase font-mono tracking-widest rounded-full bg-transparent text-teal-400 border-teal-500 hover:shadow-[0_0_10px_rgba(20,184,166,0.7)] transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (post.slug !== "#") {
                            window.open(`/blog/${post.slug}`, '_blank');
                          }
                        }}
                      >
                        Read
                      </button>
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