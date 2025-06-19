// @/components/NewPostForm.tsx
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const router = useRouter();
  const [tags, setTags] = useState<string>("");

  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    const tagArray = tags.split(",").map(tag => tag.trim()).filter(tag => tag);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, slug, imageUrl, tags: tagArray }),
    });
    if (res.ok) router.push("/blog");
    else alert("Failed to create post.");
  };

  return (
    <form onSubmit={createPost} className="max-w-4xl my-8 mx-auto p-6 bg-gray-900 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 ">Create New Post</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        required
      />

      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL (optional)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
        className="w-full p-3 border border-gray-300 rounded-lg h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        required
      />

      <input
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma separated: tech, ai, blog)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
      >
        Publish Post
      </button>
    </form>
  );
}