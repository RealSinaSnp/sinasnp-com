// @/models/post.model.ts
import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: false },
    image: { type: String, required: false },
    excerpt: { type: String, required: false },
    tag: { type: String, required: false },
    
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

const Post = models.Post || model("Post", PostSchema);
export default Post;


