// app/(main)/projects/page.tsx
import Link from "next/link";
import { projectsData } from "@/app/data";

export default function ProjectsPage() {
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

      {/* First Row Project Cards */}
      <div className="grid gap-0 lg:grid-cols-3 lg:-space-x-px">
        {projectsData.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className={`group relative px-0 py-13 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent lg:border-l-[0.5px] border-t-[0.5px] border-r-0 md:flex-row lg:flex-col gap-10 overflow-hidden border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] lg:border-t-0 lg:border-r-[0.5px]`}
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
            <div className="max-w-sm">
              <Link href={project.link} target="_blank">
                <div className="absolute inset-0 z-20" />
                <h3 className="text-xl relative z-30">{project.title}</h3>
              </Link>
              <p
                className="mt-4 text-secondary relative z-30"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
            </div>

            {/* Invisible spacer to maintain card height */}
            <div className="flex-1 w-full aspect-[555/384] scale-[115%] -mt-4"></div>

            {/* Illustration Area */}
            <div className="relative flex-1 pointer-events-none">
              <div
                className={`absolute md:left-1/2 translate-x-[10%] lg:translate-x-[-50%] md:translate-x-[-75%] transition-all duration-300 ease-in-out opacity-40 group-hover:scale-110 origin-bottom ${project.imageWrapperClass}`}
              >
                <svg className={project.svgClass} viewBox="0 0 555 384" fill="none">
                  <rect width="555" height="384" fill="url(#gradient)" />
                  <image href={project.image} width="555" height="384" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row Project Cards */}
      <div className="grid gap-0 lg:grid-cols-3 lg:-space-x-px">
        {projectsData.slice(3).map((project, index) => (
          <div
            key={index}
            className={`group relative px-0 py-13 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent lg:border-l-[0.5px] border-t-[0.5px] border-r-0 md:flex-row lg:flex-col gap-10 overflow-hidden border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] lg:border-t-0 lg:border-r-[0.5px]`}
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
            <div className="max-w-sm">
              <Link href={project.link} target="_blank">
                <div className="absolute inset-0 z-20" />
                <h3 className="text-xl relative z-30">{project.title}</h3>
              </Link>
              <p
                className="mt-4 text-secondary relative z-30"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
            </div>

            {/* Invisible spacer to maintain card height */}
            <div className="flex-1 w-full aspect-[555/384] scale-[115%] -mt-4"></div>

            {/* Illustration Area */}
            <div className="relative flex-1 pointer-events-none">
              <div
                className={`absolute md:left-1/2 translate-x-[10%] lg:translate-x-[-50%] md:translate-x-[-75%] transition-all duration-300 ease-in-out opacity-40 group-hover:scale-110 origin-bottom ${project.imageWrapperClass}`}
              >
                <svg className={project.svgClass} viewBox="0 0 555 384" fill="none">
                  <rect width="555" height="384" fill="url(#gradient)" />
                  <image href={project.image} width="555" height="384" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
