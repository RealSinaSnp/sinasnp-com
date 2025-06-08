export interface Post {
    _id: string;
    title: string;
    slug: string;
    description: string;
    imageUrl?: string; // Optional image URL
    content?: string;
    createdAt: Date | string;
    updatedAt?: Date | string;
    tags?: string[];
  }
