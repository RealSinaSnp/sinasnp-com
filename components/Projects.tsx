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
            onClick={() => !isExpanded && setExpandedIndex(index)}
            className={`group relative  px-0 py-13 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent lg:border-l-[0.5px] border-t-[0.5px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] overflow-hidden border-r-0 lg:border-r-[0.5px] lg:border-t-0
            ${isExpanded ? "lg:col-span-3 order-first z-20 shadow-sm bg-white dark:bg-neutral-900" : "lg:col-span-1 z-10"}
            `}
          >
            {/* Mobile Link Overlay: Intercepts taps on small screens to navigate directly instead of expanding */}
            <Link
              href={project.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="md:hidden absolute inset-0 z-50"
              aria-hidden="true"
              tabIndex={-1}
            />

            {/* Border Hover Corners */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block isolate z-10">
              <div className="absolute inset-0 border border-primary/10 opacity-0 group-hover:opacity-10 "></div>
              <div className="absolute -left-1 -top-1 size-2 bg-gray-500 dark:bg-white opacity-0 group-hover:opacity-100 z-20"></div>
              <div className="absolute -right-1 -top-1 size-2 bg-gray-500 dark:bg-white opacity-0 group-hover:opacity-100 z-20"></div>
              <div className="absolute -left-1 -bottom-1 size-2 bg-gray-500 dark:bg-white opacity-0 group-hover:opacity-100 z-20"></div>
              <div className="absolute -right-1 -bottom-1 size-2 bg-gray-500 dark:bg-white opacity-0 group-hover:opacity-100 z-20"></div>
            </div>

            {isExpanded ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col lg:flex-row w-full h-full min-h-[350px] justify-between gap-12 items-stretch relative z-30 px-4 lg:p-0"
              >
                {/* Left Side: Info & Link */}
                <div className="flex-1 flex flex-col items-start justify-start gap-5">
                  <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">{project.title}</h3>
                  <p
                    className="text-secondary text-lg max-w-xl"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                  
                  {/* Highly visible link button */}
                  <Link
                    href={project.status === 'Failed' ? "" : project.link}
                    target={project.status === 'Failed' ? "_self" : "_blank"}
                    onClick={(e) => {
                      if (project.status === 'Failed') e.preventDefault();
                    }}
                    className={`mt-6 inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xs transition-transform ${project.status === 'Failed' ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                  >
                    Visit Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </Link>
                </div>

                {/* Right Side: Details & Stack display */}
                <div className="w-full lg:w-96 h-full flex flex-col gap-6">
                  {/* Stack Box */}
                  <div className="flex-1 w-full flex flex-col justify-start items-start gap-4 bg-black/5 dark:bg-white/5 p-4 rounded-xs border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-inner">
                    <h4 className="text-xl font-semibold uppercase tracking-widest">Tech Stack</h4>
                    <div className="flex flex-wrap justify-start gap-2.5">
                      {project.stack?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md text-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Date and Status */}
                  <div className="flex items-center gap-6 px-1">
                    {project.date && (
                      <div className="flex flex-col">
                        <span className="text-xs text-secondary/70 uppercase tracking-widest font-semibold mb-1">Date</span>
                        <span className="text-lg font-medium">{project.date}</span>
                      </div>
                    )}
                    {project.status && (
                      <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-700 pl-6">
                        <span className="text-xs text-secondary/70 uppercase tracking-widest font-semibold mb-1">Status</span>
                        <span className="text-lg font-medium flex items-center gap-2">
                          {/* Visual indicator dot based on status */}
                          <span className="relative flex size-3">
                            <span className={`absolute inline-flex h-full w-full  rounded-full ${project.status === 'Active' ? 'bg-green-500' : project.status === 'In Development' ? 'bg-yellow-500' : project.status === 'Failed' ? 'bg-red-500' : 'bg-neutral-500'} opacity-75`}></span>
                            {project.status === 'Active' && <span className="animate-ping relative inline-flex size-3 rounded-full bg-green-500"></span>}
                          </span>
                          {project.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Project Content (Collapsed state) */}
                <motion.div layout="position" className="max-w-sm relative z-30">
                  <Link href={project.link} target="_blank" className="inline-block hover:underline cursor-pointer" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-xl">{project.title}</h3>
                  </Link>
                  <p
                    className="mt-4 text-secondary cursor-pointer"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>
                </motion.div>

                {/* Invisible spacer to maintain exact card height using aspect ratio matching the illustration */}
                <motion.div layout="position" className="flex-1 w-full mt-20 aspect-[555/384]"></motion.div>

                {/* Illustration Area (Hidden when expanded) */}
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
              </>
            )}
          </motion.div>
        )})}
      </div>
    </div>
  );
}
