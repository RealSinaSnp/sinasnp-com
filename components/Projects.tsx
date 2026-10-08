"use client";

// app/(main)/projects/page.tsx
import Link from "next/link";
import { projectsData } from "@/app/data";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full px-8 py-25 xl:max-w-7xl space-y-16 sm:space-y-15">
      {/* Header Section */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between max-w-xl space-y-12">
        <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
          <span>[</span>
          <span>Projects</span>
          <span>]</span>
        </h2>
      </div>

      {/* Project Cards Grid */}
      {/* gap-y-16 restores the original massive gap between rows! */}
      <div className="grid gap-x-0 gap-y-16 lg:grid-cols-3 lg:-space-x-px">
        {projectsData.map((project, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
          <motion.div
            layout
            transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
            key={index}
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
            className={`group relative cursor-pointer px-0 py-13 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent lg:border-l-[0.5px] border-t-[0.5px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] overflow-hidden border-r-0 lg:border-r-[0.5px] lg:border-t-0
            ${isExpanded ? "lg:col-span-3 order-first z-20 shadow-2xl bg-white/5 dark:bg-black/40" : "lg:col-span-1 z-10"}
            `}
          >
            {/* Border Hover Corners */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block isolate z-10">
              <div className="absolute inset-0 border border-primary/10 opacity-0 group-hover:opacity-10 "></div>
              <div className="absolute -left-1 -top-1 size-2 bg-gray-500 dark:bg-white opacity-0 group-hover:opacity-100 z-20"></div>
              <div className="absolute -right-1 -top-1 size-2 bg-gray-500 dark:bg-white opacity-0 group-hover:opacity-100 z-20"></div>
              <div className="absolute -left-1 -bottom-1 size-2 bg-gray-500 dark:bg-white opacity-0 group-hover:opacity-100 z-20"></div>
              <div className="absolute -right-1 -bottom-1 size-2 bg-gray-500 dark:bg-white opacity-0 group-hover:opacity-100 z-20"></div>
            </div>

            {/* Project Content */}
            <motion.div layout="position" className="max-w-sm relative z-30">
              {/* Removed absolute inset-0 so only the title is clickable for the link */}
              <Link href={project.link} target="_blank" className="inline-block hover:underline" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl">{project.title}</h3>
              </Link>
              <p
                className="mt-4 text-secondary"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
            </motion.div>

            {/* Invisible spacer to maintain exact card height. Uses aspect ratio when collapsed to perfectly match original, and fixed height when expanded so it doesn't stretch vertically. */}
            <motion.div layout="position" className={`flex-1 w-full -mt-4 ${isExpanded ? "min-h-[220px] md:min-h-[250px]" : "aspect-[555/384]"}`}></motion.div>

            {/* Illustration Area */}
            <motion.div layout="position" className="relative flex-1 pointer-events-none">
              <div
                className={`absolute md:left-1/2 translate-x-[10%] lg:translate-x-[-50%] md:translate-x-[-75%] transition-all duration-300 ease-in-out opacity-40 group-hover:scale-110 origin-bottom ${project.imageWrapperClass}`}
              >
                <svg className={project.svgClass} viewBox="0 0 555 384" fill="none">
                  <rect width="555" height="384" fill="url(#gradient)" />
                  <image href={project.image} width="555" height="384" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        )})}
      </div>
    </div>
  );
}
