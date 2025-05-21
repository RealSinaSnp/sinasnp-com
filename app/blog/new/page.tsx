// app/blog/new/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import NewPostForm from "@/components/NewPostForm";

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <NewPostForm />
    </div>
  );
}
