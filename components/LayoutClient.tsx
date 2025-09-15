"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import BlogHeader from "@/components/HeaderBlog";
import Footer from "@/components/Footer";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlogRoute = pathname.startsWith("/blog");

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>
        {isBlogRoute && <BlogHeader />}
      </SessionProvider>
      <main className="flex-grow">{children}</main>
      {isBlogRoute && <Footer />}
    </ThemeProvider>
  );
}
