//import { useEffect, useState } from "react";
import StayDark from "./components/StayDark";
import Header from "./components/Header.js";
import InfoCard from "./components/InfoCard";


export default function CVPage() {


  // keep dark/light mode on tooggle
  const [dark, setDark] = StayDark();

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
    { label: "Building side projects"},
    { label: "Automating boring tasks" },
    { label: "Tech blogging" },
    { label: "UI/UX design exploration" },
    { label: "Following tech news and trends" },
  ];
  

  return (
    <div className={dark ? "dark bg-[#0c0c0c] text-white" : "bg-white text-black"}>
      <Header dark={dark} toggleDark={() => setDark(!dark)} />
      <div className="max-w-7xl mx-auto">
      
      

      <section className="p-6" id="about">
        <h2 className="text-xl font-bold mb-2 text-indigo-600 dark:text-green-500">About Me</h2>
        <p className="text-base">
        Seeing how automations designed by engineers have simplified human life inspires me to tackle
        complex problems and create innovative solutions. I am eager to further develop my technical skills to
        contribute to meaningful projects alongside other ambitious developers.

        </p>
      </section>


      <section className="p-6 flex flex-col lg:flex-row gap-6" id="skills-tools">
        <div className="flex-[1]">
          <InfoCard title="Programming Languages" color="text-green-700 dark:text-indigo-600" items={langs} showProgress />
        </div>
        <div className="flex-[1]">
          <InfoCard title="Knowledge" color="text-green-700 dark:text-indigo-600" items={knowledges} showProgress />
        </div>
      </section>

      <section className="p-6 flex flex-col lg:flex-row gap-6" id="skills-tools">
        <div className="flex-[3]">
          <InfoCard title="Computer Skills" color="text-green-700 dark:text-indigo-600" items={skills} showProgress />
        </div>
        <div className="flex-[1]">
          <InfoCard title="Interests" color="text-green-700 dark:text-indigo-600" items={interests} showCheckmarks />
        </div>
        
      </section>




      <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Sina. All rights reserved.
      </footer>
    </div>
    </div>
  );
}

/*
      <section className="p-6" id="projects">
        <h2 className="text-xl font-bold mb-2 text-indigo-600">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Car Sales System</strong> – Desktop app using C# and MS SQL
            (<a className="text-teal-600 underline" href="#" target="_blank" rel="noopener noreferrer">GitHub</a>)
          </li>
          <li>
            <strong>PDF Text Extractor</strong> – OCR + Python to extract texts from scanned documents
            (<a className="text-teal-600 underline" href="#" target="_blank" rel="noopener noreferrer">GitHub</a>)
          </li>
        </ul>
      </section>

*/