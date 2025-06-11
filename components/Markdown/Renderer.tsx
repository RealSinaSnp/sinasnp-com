"use client";

import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./mdxComponents";

export default function Renderer({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={mdxComponents}>
      {children}
    </MDXProvider>
  );
}
