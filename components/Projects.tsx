// app/(main)/projects/page.tsx
"use client";

import Link from "next/link";
import { useTheme } from "next-themes"; 


export default function ProjectsPage() {
  
    // keep dark/light mode on tooggle
    const { theme } = useTheme();
    const isDark = theme === "dark"; 

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
      <div className="grid gap-0 lg:grid-cols-3 lg:-space-x-px">




      {/* 1st Card */}
      <div className={`group relative px-0 py-13 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent lg:border-l-[0.5px] lg:border-t-0 border-t-[0.5px] border-r-0 md:flex-row lg:flex-col gap-10 overflow-hidden ${isDark ? "border-[rgba(255,255,255,0.1)]" : "border-[rgba(0,0,0,0.1)]"}`}>
          {/* Border Hover Corners */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block isolate z-10">
            {/* Border with low opacity on hover */}
            <div className="absolute inset-0 border border-primary/10 opacity-0 group-hover:opacity-10 "></div>

            {/* Squares: keep them fully visible on hover */}
            <div className={`absolute -left-1 -top-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -right-1 -top-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -left-1 -bottom-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -right-1 -bottom-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
          </div>

          {/* Project Content */}
          <div className="max-w-sm">
            <Link href="https://gmsglobal.app" target="_blank">
              <div className="absolute inset-0" />
              <h3 className="text-xl">Golden Moonstone</h3>
            </Link>
            <p className="mt-4 text-secondary">
              A website designed as a friend, for a friend.The website was written with vanilla JS (front end) and PHP (backend). 
              The Website is hosted by infinityfree hosting platform.
            </p>
          </div>

          {/* Dont remove this one */}
          <div className="flex-1 flex flex-col">
            <div className="opacity-75 flex-1 pointer-events-none">
              <div className="duration-100 opacity-0 group-hover:opacity-70 group-hover:scale-110 origin-bottom">

                <svg className="w-full scale-[115%] opacity-0 origin-top-right -mt-4" viewBox="0 0 555 384" >
                  {/* Embed the image inside the SVG */}
                  <image href="/img/gms.svg" width="555" height="384"/>
                </svg>
      
              </div>
            </div>
          </div>


          {/* Optional Illustration Area */}
          <div className="relative flex-1 pointer-events-none">
            <div className="absolute md:left-1/2 translate-x-[10%] lg:translate-x-[-50%] md:translate-x-[-75%]  bottom-[40px] md:bottom-[-100px] transition-all duration-300 ease-in-out opacity-40 md:group-hover:bottom-[-50] group-hover:opacity-70 group-hover:scale-110 origin-bottom">
              <svg className="w-[280px] md:w-[320px] lg:w-[380px]" viewBox="0 0 555 384" fill="none">
                <rect width="555" height="384" fill="url(#gradient)" />
                <image href="/img/gms.svg" width="555" height="384" />
              </svg>
            </div>
          </div>

        </div>


        {/* 2nd Card */}
        <div className={`group relative px-0 py-13 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent lg:border-l-[0.5px] lg:border-t-0 border-t-[0.5px] border-r-0 md:flex-row lg:flex-col gap-10 overflow-hidden ${isDark ? "border-[rgba(255,255,255,0.1)]" : "border-[rgba(0,0,0,0.1)]"}`}>
          {/* Border Hover Corners */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block isolate z-10">
            {/* Border with low opacity on hover */}
            <div className="absolute inset-0 border border-primary/10 opacity-0 group-hover:opacity-10"></div>

            {/* Squares: keep them fully visible on hover */}
            <div className={`absolute -left-1 -top-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -right-1 -top-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -left-1 -bottom-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -right-1 -bottom-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
          </div>

          {/* Project Content */}
          <div className="max-w-sm">
            <Link href="/sinaIR/index.html" target="_blank">
              <div className="absolute inset-0" />
              <h3 className="text-xl">First Portfolio</h3>
            </Link>
            <p className="mt-4 text-secondary">
              My first portfolio was built with plain HTML/CSS in 2019 on my custom domain 
              that I no longer have access to it (access restricted for overseas). 
              But you can see it by clicking on this PostCard.
            </p>
          </div>

          {/* Dont remove this one */}
          <div className="flex-1 flex flex-col">
            <div className="opacity-75 flex-1 pointer-events-none">
              <div className="duration-100 opacity-0 group-hover:opacity-70 group-hover:scale-110 origin-bottom">

                <svg className="w-full scale-[115%] opacity-0 origin-top-right -mt-4" viewBox="0 0 555 384" >
                  {/* Embed the image inside the SVG */}
                  <image href="/img/ir.svg" width="555" height="384"/>
                </svg>
      
              </div>
            </div>
          </div>


          {/* Optional Illustration Area */}
          <div className="relative flex-1 pointer-events-none">
            <div className="absolute md:left-1/2 translate-x-[10%] lg:translate-x-[-50%] md:translate-x-[-75%]  bottom-[40px] md:bottom-[-100px] transition-all duration-300 ease-in-out opacity-40 md:group-hover:bottom-[-50] group-hover:opacity-70 group-hover:scale-110 origin-bottom">
              <svg className="w-[280px] md:w-[320px] lg:w-[380px]" viewBox="0 0 555 384" fill="none">
                <rect width="555" height="384" fill="url(#gradient)" />
                <image href="/img/ir.svg" width="555" height="384" />
              </svg>
            </div>
          </div>

        </div>


        {/* 3rd Card */}
        <div className={`group relative px-0 py-13 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent lg:border-l-[0.5px] lg:border-r-[0.5px] lg:border-t-0 border-t-[0.5px] border-r-0 md:flex-row lg:flex-col gap-10 overflow-hidden ${isDark ? "border-[rgba(255,255,255,0.1)]" : "border-[rgba(0,0,0,0.1)]"}`}>
          {/* Border Hover Corners */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block isolate z-10">
            {/* Border with low opacity on hover */}
            <div className="absolute inset-0 border border-primary/10 opacity-0 group-hover:opacity-10 "></div>

            {/* Squares: keep them fully visible on hover */}
            <div className={`absolute -left-1 -top-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -right-1 -top-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -left-1 -bottom-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -right-1 -bottom-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
          </div>

          {/* Project Content */}
          <div className="max-w-sm">
            <Link href="https://sinasnp.com/blog" target="_blank">
              <div className="absolute inset-0" />
              <h3 className="text-xl">Blog Page</h3>
            </Link>
            <p className="mt-4 text-secondary">
              I designed a blog page as extention for this page 
              where I can write about what I&apos;ve learnt or what I&apos;ve been doing. 
              The website uses MongoDB as database to store the posts in (that&apos;s why it&apos;s slow when openning first time).
            </p>
          </div>

          {/* Dont remove this one */}
          <div className="flex-1 flex flex-col">
            <div className="opacity-75 flex-1 pointer-events-none">
              <div className="duration-100 opacity-0 group-hover:opacity-70 group-hover:scale-110 origin-bottom">

                <svg className="w-full scale-[115%] opacity-0 origin-top-right -mt-4" viewBox="0 0 555 384" >
                  {/* Embed the image inside the SVG */}
                  <image href="/img/blogpage.svg" width="555" height="384"/>
                </svg>
      
              </div>
            </div>
          </div>


          {/* Optional Illustration Area */}
          <div className="relative flex-1 pointer-events-none">
            <div className="absolute md:left-1/2 translate-x-[10%] lg:translate-x-[-50%] md:translate-x-[-75%]  bottom-[40px] md:bottom-[-100px] transition-all duration-300 ease-in-out opacity-40 md:group-hover:bottom-[-35] group-hover:opacity-90 group-hover:scale-110 origin-bottom">
              <svg className="w-[280px] md:w-[320px] lg:w-[380px]" viewBox="0 0 555 384" fill="none">
                <rect width="555" height="384" fill="url(#gradient)" />
                <image href="/img/blogpage.svg" width="555" height="384" />
              </svg>
            </div>
          </div>

        </div>


        

        
      </div>




      {/* Second Project Cards Grid */}
      <div className="grid gap-0 lg:grid-cols-3 lg:-space-x-px">




      


        {/* 3rd Card */}
        <div className={`group relative px-0 py-13 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent lg:border-l-[0.5px] lg:border-r-[0.5px] lg:border-t-0 border-t-[0.5px] border-r-0 md:flex-row lg:flex-col gap-10 overflow-hidden ${isDark ? "border-[rgba(255,255,255,0.1)]" : "border-[rgba(0,0,0,0.1)]"}`}>
          {/* Border Hover Corners */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block isolate z-10">
            {/* Border with low opacity on hover */}
            <div className="absolute inset-0 border border-primary/10 opacity-0 group-hover:opacity-10 "></div>

            {/* Squares: keep them fully visible on hover */}
            <div className={`absolute -left-1 -top-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -right-1 -top-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -left-1 -bottom-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
            <div className={`absolute -right-1 -bottom-1 size-2 ${isDark ? "bg-white":"bg-gray-500"} opacity-0 group-hover:opacity-100  z-20`}></div>
          </div>

          {/* Project Content */}
          <div className="max-w-sm">
            <Link href="none" target="_blank">
              <div className="absolute inset-0" />
              <h3 className="text-xl">Receipt Generator</h3>
            </Link>
            <p className="mt-4 text-secondary">
              One of my recent automations created is writing Visual Basic in &apos;Office Scripts&apos;
              to auto-generate custom receipts of ships for a Persian shipping company.
            </p>
          </div>

          {/* Dont remove this one */}
          <div className="flex-1 flex flex-col">
            <div className="opacity-75 flex-1 pointer-events-none">
              <div className="duration-100 opacity-0 group-hover:opacity-70 group-hover:scale-110 origin-bottom">

                <svg className="w-full scale-[115%] opacity-0 origin-top-right -mt-4" viewBox="0 0 555 384" >
                  {/* Embed the image inside the SVG */}
                  <image href="/img/ms.svg" width="555" height="384"/>
                </svg>
      
              </div>
            </div>
          </div>


          {/* Optional Illustration Area */}
          <div className="relative flex-1 pointer-events-none">
            <div className="absolute md:left-1/2 translate-x-[10%] lg:translate-x-[-50%] md:translate-x-[-75%]  bottom-[40px] md:bottom-[-100px] transition-all duration-300 ease-in-out opacity-40 md:group-hover:bottom-[-35] group-hover:opacity-90 group-hover:scale-110 origin-bottom">
              <svg className="w-[280px] md:w-[270px] lg:w-[380px]" viewBox="0 0 555 384" fill="none">
                <rect width="555" height="384" fill="url(#gradient)" />
                <image href="/img/ms.svg" width="555" height="384" />
              </svg>
            </div>
          </div>

        </div>


        

        
      </div>



    </div>
  );
}
