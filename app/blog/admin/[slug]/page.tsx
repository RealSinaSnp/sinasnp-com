// app/blog/admin/[slug]/page.tsx
import { connectToDB } from "@/lib/mongodb";
import Post from "@/models/post.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { Post as PostType } from "@/lib/types";

interface Props {
  params: Promise<{ slug: string }>;
}

async function updatePostAction(formData: FormData, slug: string) {
  "use server";

  await connectToDB();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  try {
    const result = await Post.updateOne({ slug }, { title, content });
    if (result.matchedCount === 0) {
      return { success: false, error: "Post not found" };
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating post:", error);
    return { success: false, error: "Failed to update post" };
  }
}

export default async function AdminEditPage({ params }: Props) {
  const { slug } = await params; // Await the Promise to get the slug
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  await connectToDB();
  const post = await Post.findOne({ slug }).lean() as PostType | null;

  if (!post) {
    return <div className="p-4 text-red-500">Post not found</div>;
  }

  return (
    <form
      className="flex flex-col gap-4 p-8"
      action={async (formData: FormData) => {
        "use server";
        const result = await updatePostAction(formData, post.slug);
        if (result.success) {
          redirect("/blog");
        } else {
          // Handle error (e.g., display error message)
          console.error(result.error);
        }
      }}
      method="POST"
    >
      <input
        name="title"
        defaultValue={post.title}
        className="input input-bordered p-2.5 bg-[#0f0f0f] border border-neutral-900 rounded-sm"
      />
      <textarea
        name="content"
        defaultValue={post.content}
        className="block p-2.5 w-full text-sm bg-[#0f0f0f] rounded-sm border border-neutral-700 h-96"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
        Save Changes
      </button>
    </form>
  );
}