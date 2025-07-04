'use client';
import { useState } from "react";
import Image from "next/image";
import { Hash } from 'lucide-react';


type Post = {
  title: string;
  slug: string;
  createdAt: string | Date;
  imageUrl?: string;
  content?: string;
  tags?: string[];
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
    <div className="group flex flex-col md:flex-row gap-5 border-b-2 border-[rgba(255,255,255,0.1)] py-10 last-of-type:border-b-0">
      <div className="flex flex-col gap-6 md:gap-2 md:flex-row flex-1 order-2 md:order-1">
        {/* Date and tags section */}
        <div className="flex flex-col w-full md:w-26 shrink-0">
          <p className="text-xs font-mono">{formattedDate}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-auto hidden md:flex md:flex-col gap-1 overflow-hidden">
              {post.tags.map((tags, index) => (
                <a key={index}
                  href={`/blog?tag=${encodeURIComponent(tags)}`} 
                  className="inline-flex items-center text-left w-fit text-xs font-mono cursor-default hover:text-indigo-200 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <Hash className="w-3 h-3 mr-1"/>
                  <span>{tags}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Post title and content section */}
        <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col space-y-6">
          <div className="space-y-4 flex-1">
            <h3 className="text-xl font-semibold leading-snug group-hover:underline">
              {post.title}
            </h3>
            {post.content && (
              <p className="text-gray-400 text-sm  leading-relaxed">
                {post.content.slice(0, 110) + "..."}
              </p>
            )}
          </div>

          <div className="relative items-center justify-between gap-3">
              <button className="absolute transform right-1 bottom-1 items-center px-4 py-1.5 border text-xs uppercase font-mono tracking-widest rounded-full bg-transparent text-teal-400 border-teal-500 hover:hover:shadow-[0_0_10px_rgba(20,184,166,0.7)] transition-all duration-300">
                Read
              </button>
          </div>

        </a>
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
