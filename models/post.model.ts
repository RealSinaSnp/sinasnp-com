// @/models/post.model.ts
import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: false },
    imageUrl: { type: String, required: false },
    tags: { type: [String], required: false },
    
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

const Post = models.Post || model("Post", PostSchema);
export default Post;


