'use client';
import { useState } from "react";
import Image from "next/image";


type Post = {
  title: string;
  slug: string;
  createdAt: string | Date;
  imageUrl?: string;
  excerpt?: string;
  tag?: string;
};

export default function PostCard({ post }: { post: Post }) {
  const [imgError, setImgError] = useState(false);
  const formattedDate = new Date(post.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageSrc = !imgError && post.imageUrl ? post.imageUrl : "/img/placeholder1.png";

  return (
    <div className="group relative flex flex-col md:flex-row gap-5 border-b-2 border-[rgba(255,255,255,0.1)] py-10 last-of-type:border-b-0 first-of-type:border-t-0">
      <div className="flex flex-col gap-6 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
        <div>
          <p className="text-xs text-muted-foreground font-mono">{formattedDate}</p>
        </div>
        <div className="flex-1 flex flex-col space-y-6">
          <div className="space-y-4 flex-1">
            <a href={`/blog/${post.slug}`} className="relative block group">
              <div className="absolute inset-0" />
              <h3 className="text-xl font-semibold leading-snug group-hover:underline">
                {post.title}
              </h3>
            </a>
            {post.excerpt && (
              <p className="text-gray-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>

          <div className="mt-auto ml-auto flex items-center justify-between gap-3">
            {post.tag && (
              <span className="px-2 py-1 bg-gray-800 text-xs font-mono rounded-full">
                {post.tag}
              </span>
            )}
            <a href={`/blog/${post.slug}`} className="relative block group" target="_blank" rel="noopener noreferrer">
              <button className="relative inline-flex items-center px-4 py-1.5 border text-xs uppercase font-mono tracking-widest rounded-full bg-transparent text-teal-400 border-teal-500 hover: hover:shadow-[0_0_10px_rgba(20,184,166,0.7)] transition-all duration-300">
                Read
              </button>
            </a>
          </div>
        </div>
      </div>
      

      {/* Image section */}
      <div className="flex-1 xl:max-w-[500px] order-1 md:order-2">
        <div className="w-full h-64  overflow-hidden bg-[#0c0c0c]">
          <Image
            src={imageSrc}
            onError={() => setImgError(true)}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
