// @/app/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; 
import InfoCard from "@/components/InfoCard";
import Projects from "@/components/Projects";


export default function CVPage() {


  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // keep dark/light mode on tooggle
  const { theme } = useTheme();
  const isDark = theme === "dark"; 

  // for InfoCard
  const langs = [
    { label: "C#", level: 80 },
    { label: "Python", level: 90 },
    { label: "JS", level: 80 },
    { label: "PHP", level: 65 },
  ];

  const knowledges = [
    { label: "Unit Testing", level: 75 },
    { label: "Version Control (Git)", level: 55 },
    { label: "Networking Basics (HTTP, DNS, Ports)", level: 80 },
    { label: "CI/CD Fundamentals", level: 65 },
    { label: "Secure Coding Practices", level: 65 },
  ];

  const skills = [
    { label: "Docker", level: 75 },
    { label: "React", level: 55 },
    { label: "SHELL/LINUX", level: 75 },
    { label: "SQL", level: 85 },
  ];

  
  const interests = [
    { label: "Building side projects", level: 75},
    { label: "Automating boring tasks", level: 75 },
    { label: "Tech blogging", level: 75 },
    { label: "UI/UX design exploration", level: 75 },
    { label: "Following tech news and trends", level: 75 },
  ];
  

  return (
    <div className={`${isDark ? "dark bg-[#0c0c0c] text-white" : "bg-white text-black"}`}>
      
      

      <div className="pt-20 max-w-7xl mx-auto">

      <section className="p-6" id="about">
        <div className="flex flex-col pb-7 gap-6 lg:flex-row lg:items-start lg:justify-between max-w-xl space-y-12">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
            <span>[</span>
            <span>About Me</span>
            <span>]</span>
          </h2>
      </div>
        <p className="text-base">
        Seeing how automations designed by engineers have simplified human life inspires me to tackle
        complex problems and create innovative solutions. I am eager to further develop my technical skills to
        contribute to meaningful projects alongside other ambitious developers.
        </p>
      </section>


      <section className="p-6 flex flex-col lg:flex-row gap-6" id="skills-tools">
        <div className="flex-[1]">
          <InfoCard title="Programming Languages" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={langs} />
        </div>
        <div className="flex-[1]">
          <InfoCard title="Knowledge" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={knowledges}  />
        </div>
      </section>

      <section className="p-6 flex flex-col lg:flex-row gap-6" id="skills-tools">
        <div className="flex-[3]">
          <InfoCard title="Computer Skills" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={skills}  />
        </div>
        <div className="flex-[1]">
          <InfoCard title="Interests" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={interests} showCheckmarks />
        </div>
        
      </section>

      <Projects />



      {year && (
        <footer className="pt-5 p-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {year} Sina. All rights reserved.
        </footer>
      )} 
    </div>
    </div>
    
  );
}
