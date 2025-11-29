// @/app/page.tsx

"use client";

//import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; 
// import InfoCard from "@/components/InfoCard";
import Projects from "@/components/Projects";
import PortfolioHeader from "@/components/HeaderPortfolio";
// import TiltCardWrapper from "@/components/TestCard";
//import SmokeEffect from "@/components/testSmoke";
import InfoCard2 from "@/components/InfoCard2";
import InfoCard1 from "@/components/InfoCard1";
import StackedCardsClient from "@/components/StackedCards";
import Footer from "@/components/FooterMain";
//import WIPModal from '@/components/WIPModal';
//import GridSection from "@/components/BalatroCard";
//import { InfiniteScroller } from '@/components/InfiniteScroll';


export default function CVPage() {


  // keep dark/light mode on tooggle
  const { theme } = useTheme();
  const isDark = theme === "dark"; 

  // for InfoCard
  const webSkills = [
    { label: "Next.js",      level: 80, category: "Frontend", mastered: true },
    { label: "Typescript",   level: 70, category: "Frontend", mastered: true },
    { label: "React",        level: 90, category: "Frontend", mastered: true },
    { label: "Tailwind", level: 90, category: "Frontend", mastered: true },
    { label: ".NET",         level: 60, category: "Backend", mastered: true },
    { label: "PHP",          level: 60, category: "Backend", mastered: false },

    { label: "MySQL",        level: 95, category: "Database", mastered: true },
    { label: "MongoDB",      level: 75, category: "Database", mastered: true },
    { label: "SQLite", level: 60, category: "Database", mastered: true},
    { label: "Redis",      level: 75, category: "Database", mastered: false },

    { label: "Linux",        level: 85, category: "Infrastructure", mastered: true },
    { label: "Docker",       level: 75, category: "Infrastructure", mastered: true },
    { label: "Nginx",        level: 65, category: "Infrastructure", mastered: false },

    { label: "SSR/CSR",      level: 65, category: "Tools", mastered: true },
    { label: "Chart.js",     level: 65, category: "Tools", mastered: false },
    { label: "GraphQL",      level: 65, category: "Tools", mastered: false },
    { label: "Google Lighthouse", level: 65, category: "Tools", mastered: false },
    { label: "Caching",      level: 65, category: "Tools", mastered: false },
  ];

  const dataSkills = [
    { label: "IPv4",         level: 80, category: "Fundamentals", mastered: true },
    { label: "OSI model",    level: 70, category: "Fundamentals", mastered: true },
    { label: "VPN",          level: 90, category: "Fundamentals", mastered: true },
    { label: "Subnetting",          level: 90, category: "Fundamentals", mastered: false },

    { label: "Linux",         level: 60, category: "Server", mastered: true },
    { label: "Shell",         level: 60, category: "Server", mastered: true },
    { label: "Nginx",          level: 60, category: "Server", mastered: false },

    { label: "MySQL",        level: 95, category: "Database", mastered: true },
    { label: "MsSQL",        level: 95, category: "Database", mastered: true },
    { label: "MongoDB",      level: 75, category: "Database", mastered: true },
    { label: "Redis",      level: 75, category: "Database", mastered: true },
    { label: "SQLite", level: 60, category: "Database", mastered: true},

    { label: "Virtual Box",        level: 85, category: "Virtualization", mastered: true },
    { label: "Docker",       level: 75, category: "Virtualization", mastered: true },

    { label: "MSOffice",      level: 65, category: "Tools", mastered: true },
    { label: "VBA Excel",     level: 65, category: "Tools", mastered: true },
    { label: "Cisco Packet Tracer",      level: 65, category: "Tools", mastered: false },
  ];

  // const skills = [
  //   { label: "JavaScript", level: 75, category: "Data" },
  //   { label: "TypeScript", level: 60, category: "Data" },
  //   { label: "C#", level: 80, category: "Data" },
  //   { label: "Python", level: 75, category: "Data" },
  //   { label: "SQL", level: 85, category: "Data" },
  // ];


  const interests = [
    { label: "JavaScript", level: 75, category: "Data" },
    { label: "TypeScript", level: 60, category: "Data" },
    { label: "C#", level: 80, category: "Data" },
    { label: "Python", level: 75, category: "Data" },
    { label: "SQL", level: 85, category: "Data" },
    { label: "Visual Basic", level: 85, category: "Data" },
  ];


  const characteristics = [
    { label: "Building side projects", level: 75, category: "Data" },
    { label: "Following tech trends", level: 75, category: "Data" },
    { label: "Automating tasks", level: 75 , category: "Data" },
    { label: "Tech blogging", level: 75 , category: "Data" },
    { label: "UI exploration", level: 75, category: "Data" },
  ];
  const webLogos: string[] = [
    
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png", //JS
    "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", //Docker
    "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000", //React 
    "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B", //Next.js
    "https://cdn.brandfetch.io/idyOYdN423/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1760091815298", //DotNet
    "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000", //Tailwind CSS
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png", //TS
    "https://cdn.brandfetch.io/ideyyfT0Lp/w/800/h/1713/theme/dark/idolyTWJJO.png?c=1bxid64Mup7aczewSAYMX&t=1758984120037", //MongoDB
    "https://cdn.brandfetch.io/idwlYcQpHB/w/800/h/688/theme/dark/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1668515608635", // Redis
    "https://cdn.brandfetch.io/idQx9ZiJAu/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B", //Ubuntu
  ];
  const dataLogos: string[] = [
    "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", // Python
    "https://cdn.brandfetch.io/ida_xaMYlM/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1742365554659", // Cisco
    "https://cdn.brandfetch.io/idBdG8DdKe/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", // MySQL
    "https://cdn.brandfetch.io/idQx9ZiJAu/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B", // Ubuntu
    "https://cdn.brandfetch.io/ideyyfT0Lp/w/800/h/1713/theme/dark/idolyTWJJO.png?c=1bxid64Mup7aczewSAYMX&t=1758984120037", //MongoDB
                                                                  "/img/regex.webp", // regex
    "https://img.icons8.com/?size=100&id=13654&format=png&color=000000", // MS Excel
    "https://cdn.brandfetch.io/idwlYcQpHB/w/800/h/688/theme/dark/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1668515608635", // Redis
    "https://cdn.brandfetch.io/idv0NPaYQr/w/1024/h/876/theme/dark/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1758858477084", // Virtual Box
    "/img/Jupyter_loogo.webp", // Jupyter
  ];
  

  return (
    <div className={`z-10 ${isDark ? "bg-[#030504] text-white" : "bg-[#f8fffb] text-black"} bg-gradient-noise`}>
      
      <div className="relative">
        <div className={`grid-lines ${isDark ? "" : "opacity-15"}`}></div>

        <PortfolioHeader />
      </div>
      

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
        Web developer with a passion for creating user-friendly designs with experience in both frontend and backend development.
        Graduated with a degree in Computer Programming, I have a solid foundation in programming and problem-solving skills.
        </p>
      </section>


      <section className="p-6 flex flex-col lg:flex-row gap-6 max-w-7xl w-full mx-auto" id="skills-tools">
        <div className="flex-[3.5] min-w-0">
          <InfoCard1 title="Web Development" color={`${isDark ? "text-sky-500" : "text-sky-700"}`} items={webSkills} isTrans={true} logos={webLogos} description={' \
            Web developer with 3 years background in web \design and familiar with backend technologies.  \
            I can structure responsive layouts, style them cleanly, and inject interactivity without overcomplicating things. \
            I’m comfortable setting up servers and managing deployment pipelines with Docker. \
            '}/>
        </div>
        <div className="flex-[3.5]">
          <InfoCard1 title="Network Engineering" color={`${isDark ? "text-sky-500" : "text-sky-700"}`} items={dataSkills} isTrans={true} logos={dataLogos} description={' \
            I have a strong technical background in network management, system administration, \
            and practical problem-solving, with an interest in network and web technologies. \
            I’m experienced in managing computer networks and using them effectively in web applications. \
            '}/>

        </div>
      </section>

      <section className="p-6 flex flex-col lg:flex-row gap-6 max-w-7xl w-full mx-auto" id="skills-tools">
        <div className="flex-[3]">
          <StackedCardsClient/>
        </div>
        
        <div className="flex-[1.5]">
          <InfoCard2 title="Programming Languages" color={`${isDark ? "text-sky-500" : "text-sky-700"}`} items={interests} showCheckmarks isTrans={false} customTilt={5} />
        </div>
        <div className="flex-[1.4]">
          <InfoCard2 title="Interests" color={`${isDark ? "text-sky-500" : "text-sky-700"}`} items={characteristics} showCheckmarks isTrans={false} customTilt={5} />
        </div>
        
      </section>

      <Projects />
      

      </div>
      
      <Footer />

    </div>
    
  );
}
