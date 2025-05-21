import { connectToDB } from "@/lib/mongodb";
import Post from "@/models/post.model";
import { NextResponse } from "next/server";



// TO DO: Add authentication middleware to protect these routes
// TO DO: add tag and excerpt to GET and POST?
export async function GET() {
  try {
    await connectToDB();
    const posts = await Post.find().sort({ createdAt: -1 });
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
      imageUrl: body.imageUrl || "",  // Explicitly save it
    });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("POST /api/posts failed:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
