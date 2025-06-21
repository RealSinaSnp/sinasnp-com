// @/components/StackedCardsContent.tsx
"use client";

import Image from "next/image";
import { Hash } from "lucide-react";
import { Post } from "@/lib/types";

interface StackedCardsContentProps {
  post: Post;
  positionStyle: React.CSSProperties;
  isDark: boolean;
  handleImageError: () => void;
  handleCardClick: () => void;
}

export default function StackedCardsContent({
  post,
  positionStyle,
  isDark,
  handleImageError,
  handleCardClick,
}: StackedCardsContentProps) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageSrc = post.imageUrl || "/img/placeholder1.png";

  return (
    <div
      className={`absolute inset-0 ${
        isDark
          ? "bg-neutral-900 border-neutral-800 text-white"
          : "bg-neutral-100 border-neutral-300 text-black"
      } border cursor-pointer overflow-hidden`}
      style={positionStyle}
      onClick={handleCardClick}
    >
      <div className="h-full flex flex-col p-4">
        {/* Row 1: Date/Tags (Column 1) + Image (Column 2) */}
        <div className="grid-cols-2 flex flex-row gap-4 mb-4">
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
          <div
            className={`flex-[3.8] w-full h-35 overflow-hidden ${
              isDark ? "bg-neutral-800/10" : "bg-neutral-200/30"
            } rounded`}
          >
            <Image
              src={imageSrc}
              onError={handleImageError}
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
}