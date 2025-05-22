// app/layout.tsx
"use client"; // Make layout a Client Component for usePathname

//import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import PortfolioHeader from "@/components/HeaderPortfolio";
import BlogHeader from "@/components/HeaderBlog";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const isBlogRoute = pathname.startsWith("/blog");

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {isMainPage && <PortfolioHeader />}
          <SessionProvider>
          {isBlogRoute && <BlogHeader />}
          </SessionProvider>
          <main className="flex-grow">{children}</main>
          {isBlogRoute && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
