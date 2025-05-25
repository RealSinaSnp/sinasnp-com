// components/PortfolioHeader.tsx
"use client";

import { Moon, Sun, Newspaper } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeaderSticky from "./HeaderSticky";

export default function HeaderTest() {


  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const triggerHeight = window.innerHeight * 0.95;
      setShowSticky(offset > triggerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<>


<header
  className={`min-h-[85vh] w-full grid grid-cols-1 md:grid-cols-2 items-center px-8 py-12 bg-no-repeat bg-[length:400%_400%] bg-[position:0%_50%] 
    ${ isDark ? "bg-animated-gradient--fade-dark text-white" : "bg-animated-gradient-fade  text-black" } 
    animate-gradient-x  transition`}>

    <div className="flex flex-col gap-6">
  <h1 className={`text-5xl font-extrabold tracking-tight text-gray-900 ${ isDark ? "text-white" : "text-black " } `}>
    Hey, I’m <span className={`${ isDark ? "text-teal-300" : "text-black " } `}>Sina Sasanpour</span>
  </h1>
  <p className={`text-xl ${ isDark ? "text-white" : "text-black " } `}>
    A React Developer crafting <span className="font-medium text-indigo-500">clean code</span> and {isDark ? "in Dark Mode " : "building snappy UIs "}
     in <strong>Istanbul</strong>.
  </p>
  
  <div className="flex gap-4 mt-4 text-xl">
    <button onClick={() => setTheme(isDark ? "light" : "dark")} className="text-white">
            {isDark ? <Sun /> : <Moon color="#000" />}
          </button>
          <a href="/blog" target="_blank" rel="noopener noreferrer" 
            className={`flex items-center mt-[-6] gap-2 px-2 py-1 border-2 
                ${isDark ? "border-teal-300 text-teal-100 hover:text-white hover:bg-teal-800" : "border-[#17313c] text-[#17313c] hover:text-black hover:bg-teal-200" } 
                transition`}>
            <Newspaper className="w-5 h-5" />
            <span className="font-medium">Blog</span>
          </a>
          <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className={`${
                isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"
              } transition`}
            />
          </a>
          <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className={`${
                isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"
              } transition`}
            />
          </a>
          <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className={`${
                isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"
              } transition`}
            />
          </a>
          
        
  </div>
  
</div>


<div className="flex flex-col items-center justify-center">
  <img src="/img/profile.jpg" className="w-44 h-44 rounded-full shadow-lg border-4 border-teal-500" />
  
  <div className="flex items-center gap-4 mt-4">
          <a
            href="/docs/CV_EN_dark.pdf"
            download
            className={`px-5 py-2 text-white font-semibold  ${
              isDark ? "bg-teal-500 hover:bg-teal-600" : "bg-[#002F19] hover:bg-[#0e634b]"
            } transition`}
          >
            Download CV (PDF)
          </a>
          
        </div>
</div>


</header>
{showSticky && <HeaderSticky />}
</>

);
}