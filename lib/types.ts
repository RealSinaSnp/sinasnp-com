export interface Post {
    _id: string;
    title: string;
    slug: string;
    description: string;
    image?: string; // Optional image URL
    content?: string;
    createdAt: Date | string;
    updatedAt?: Date | string;
    excerpt?: string;
    tag?: string;
  }
