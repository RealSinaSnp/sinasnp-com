// @/app/page.tsx

"use client";

//import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; 
import InfoCard from "@/components/InfoCard";
import Projects from "@/components/Projects";
import PortfolioHeader from "@/components/HeaderPortfolio";
//import InfoCard2 from "@/components/InfoCard2";
//import InfoCard1 from "@/components/InfoCard1";
//import WIPModal from '@/components/WIPModal';
//import GridSection from "@/components/BalatroCard";
//import { InfiniteScroller } from '@/components/InfiniteScroll';


export default function CVPage() {


  // keep dark/light mode on tooggle
  const { theme } = useTheme();
  const isDark = theme === "dark"; 

  // for InfoCard
  const webSkills = [
    { label: "Tailwind CSS", level: 90, category: "Frontend" },
    { label: "JS", level: 80, category: "Frontend" },
    { label: "Typescript", level: 70, category: "Frontend" },
    { label: "React.js", level: 90, category: "Backend" },
    { label: "Next.js", level: 80, category: "Backend" },
    { label: "PHP", level: 60, category: "Backend" },
    { label: "MySQL", level: 95, category: "Database" },
    { label: "MongoDB", level: 75, category: "Database" },
    { label: "Linux", level: 85, category: "Server" },
    { label: "Docker", level: 75, category: "Server" },
    { label: "Nginx", level: 65, category: "Server" },
  ];

  const dataSkills = [
    { label: "Python", level: 90, category: "Data" },
    { label: "Tableau", level: 80, category: "Data" },
    { label: "C++", level: 70, category: "Application" },
    { label: "Visual Basic (for MS Office)", level: 90, category: "Application" },
    { label: "MySQL", level: 80, category: "Database" },
    { label: "MSSQL", level: 60, category: "Database" },
    { label: "MySQL", level: 95, category: "Database" },
    { label: "Shell / Linux", level: 75, category: "Server" },
    { label: "Virtual Box", level: 85, category: "Server" },
    { label: "Regex", level: 75, category: "Data" },
    { label: "LaTeX", level: 65, category: "Data" },
  ];

  const skills = [
    { label: "Unit Testing", level: 75, category: "Data" },
    { label: "Git", level: 55, category: "Data" },
    { label: "SHELL/LINUX", level: 75, category: "Data" },
    { label: "SQL", level: 85, category: "Data" },
  ];

  
  const interests = [
    { label: "Team Player", level: 75, category: "Data" },
    { label: "Problem Solving", level: 75, category: "Data" },
    { label: "Creativity", level: 75, category: "Data" },
    { label: "Attention to details", level: 75, category: "Data" },
    { label: "Analytical", level: 75, category: "Data" },
  ];


  const characteristics = [
    { label: "Building side projects", level: 75, category: "Data" },
    { label: "Automating boring tasks", level: 75 , category: "Data" },
    { label: "Tech blogging", level: 75 , category: "Data" },
    { label: "UI/UX design exploration", level: 75, category: "Data" },
    { label: "Following tech news and trends", level: 75, category: "Data" },
  ];
  const webLogos: string[] = [
    
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", //JS
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png", //TS
    "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", //Docker
    "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000", //React 
    "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000", //Tailwind CSS
    "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B", //Next.js
    "https://cdn.brandfetch.io/ideyyfT0Lp/theme/light/idGfqn8y6C.svg?c=1dxbfHSJFAPEGdCLU4o5B", //MongoDB
    "https://cdn.brandfetch.io/idQx9ZiJAu/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B", //Ubuntu
  ];
  const dataLogos: string[] = [
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", // Python
    "https://cdn.brandfetch.io/id9sYMA_Im/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", // Tableau
    "https://cdn.brandfetch.io/idBdG8DdKe/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", // MySQL
    "https://cdn.brandfetch.io/idQx9ZiJAu/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B", // Ubuntu
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png", // C++
                                                                      "/img/regex.webp", // regex
    "https://img.icons8.com/?size=100&id=13654&format=png&color=000000", // MS Excel
    "https://cdn.brandfetch.io/idSA6yVd-w/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", // Virtual Box
    "/img/Jupyter_loogo.webp", // Virtual Box
  ];
  

  return (
    <div className={`${isDark ? "dark bg-[#0c0c0c] text-white" : "bg-white text-black"}`}>
      
      <PortfolioHeader />
      

      <div className="pt-15 md:pt-20 max-w-7xl mx-auto">

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


      <section className="p-6 flex flex-col lg:flex-row gap-6 max-w-7xl w-full mx-auto" id="skills-tools">
        <div className="flex-[1] min-w-0">
          <InfoCard title="Web Development" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={webSkills} isTrans={true} logos={webLogos} description={' \
            Web developer with 3 years background in web \design and familiar with backend technologies.  \
 I can structure responsive layouts, style them cleanly, and inject interactivity without overcomplicating things. \
 I’m comfortable setting up servers, managing deployment pipelines with Docker. \
            '}/>
        </div>
        <div className="flex-[1]">
          <InfoCard title="Data Analysis" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={dataSkills} isTrans={true} logos={dataLogos} description={' \
            Python developer with 2 years background in writing scripts data manipulation, exploration, and visualization. \
            Through academic projects and independent learning, I have gained experience in handling diverse datasets, identifying trends, and drawing meaningful insights \
            while emphasizing clarity, validity. \
            '}/>

        </div>
      </section>

      <section className="p-6 flex flex-col lg:flex-row gap-6" id="skills-tools">
        <div className="flex-[3]">
          <InfoCard title="Computer Skills" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={skills} isTrans={false} logos={dataLogos} customTilt={4}/>
        </div>
        <div className="flex-[1]">
          <InfoCard title="Characteristics" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={interests} showCheckmarks isTrans={false} customTilt={5} />
        </div>
        <div className="flex-[1]">
          <InfoCard title="Interests" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={characteristics} showCheckmarks isTrans={false} customTilt={5} />
        </div>
        
      </section>

      <Projects />


        <footer className="pt-5 p-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Sina. All rights reserved.
        </footer>
      
      
    </div>
    </div>
    
    
  );
}
