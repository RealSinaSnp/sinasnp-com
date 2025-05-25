// @/app/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; 
import InfoCard from "@/components/InfoCard";
import Projects from "@/components/Projects";
import HeaderTest from "@/components/TestHeaderPortfolio";
import WIPModal from '@/components/WIPModal';
//import GridSection from "@/components/BalatroCard";
//import { InfiniteScroller } from '@/components/InfiniteScroll';


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
      <WIPModal />
      <HeaderTest />
      

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


      <section className="p-6 flex flex-col lg:flex-row gap-6 max-w-7xl w-full mx-auto" id="skills-tools">
        <div className="flex-[1] min-w-0 overflow-hidden">
          <InfoCard title="Web Development" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={langs} isTrans={true} logos={webLogos} description={' \
            Web developer with 3 years background in web \design and familiar with backend technologies. \
            Proficient in developing scalable interfaces and RESTful APIs. \
            Experienced in collaborative development environments using Git and CI/CD workflows. \
            I am passionate about creating user-friendly and responsive web applications that \
            provide a seamless user experience. \
            '}/>
        </div>
        <div className="flex-[1]">
          <InfoCard title="Data Analysis" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={knowledges} isTrans={true} logos={dataLogos} description={' \
            Python developer with 2 years background in writing scripts for web  \
            scraping and data analysis. Proficient in using Python libraries such as \
            Pandas, NumPy, and Matplotlib for data manipulation and visualization. \
            Familiar with SQL databases and have experience in data extraction and transformation. \
            I am passionate about leveraging data to drive insights and improve decision-making. \
            '}/>

        </div>
      </section>

      <section className="p-6 flex flex-col lg:flex-row gap-6" id="skills-tools">
        <div className="flex-[3]">
          <InfoCard title="Computer Skills" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={skills} isTrans={false} logos={dataLogos} />
        </div>
        <div className="flex-[1]">
          <InfoCard title="Interests" color={`${isDark ? "text-indigo-600" : "text-green-700"}`} items={interests} showCheckmarks isTrans={false} logos={dataLogos} />
        </div>
        
      </section>

      <Projects />



      {year && (
        <footer className="pt-5 p-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {year} Sina. All rights reserved.
        </footer>
      )} 
      {/* 
      <InfoCard 
  title="hi" 
  color="text-red-500" 
  items={[
    { label: 'hi', level: 70 },
    { label: 'there', level: 90 }
  ]}
/>
*/}
      
    </div>
    </div>
    
    
  );
}
