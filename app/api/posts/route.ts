// @/app/api/posts/route.ts
import { connectToDB } from "@/lib/mongodb";
import Post from "@/models/post.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tag = searchParams.get("tag");

    await connectToDB();
    const posts = tag
      ? await Post.find({ tags: tag }).sort({ createdAt: -1 }) // Filter by tag
      : await Post.find().sort({ createdAt: -1 });             // Return all
    return NextResponse.json(posts);
  } catch (error) {
    console.error("GET /api/posts failed:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.content || !body.slug) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectToDB();

    const existingPost = await Post.findOne({ slug: body.slug });
    if (existingPost) {
      return NextResponse.json({ error: "Post with this slug already exists" }, { status: 409 });
    }

    console.log("Creating post with:", body);

    const newPost = await Post.create({
      title: body.title,
      content: body.content,
      slug: body.slug,
      imageUrl: body.imageUrl || "",
      excerpt: body.excerpt || "",
      tags: Array.isArray(body.tags) ? body.tags : [],
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("POST /api/posts failed:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
