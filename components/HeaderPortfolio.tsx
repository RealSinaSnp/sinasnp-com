// components/PortfolioHeader.tsx

import { Moon, Sun, Newspaper } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeaderSticky from "./HeaderSticky";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioHeader() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const triggerHeight = window.innerHeight * 0.65;
      setShowSticky(offset > triggerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <>
        <header className={`min-h-[85vh] w-full bg-no-repeat ${isDark ? "text-white" : "text-black"}`}>
          <div className={` md:pt-30 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-8 py-12 md:py-0`}>

            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left order-2 md:order-1">
              <h1 className={`text-5xl font-extrabold tracking-tight text-gray-900 ${isDark ? "text-white" : "text-black"}`}>
                Hey, I’m{" "}
                <span className={`${isDark ? "txt-animated-gradient-dark" : "txt-animated-gradient" } transition`}>
                  Sina <span className="hidden md:inline"> Sasanpour</span>
                </span>
              </h1>
              <div className="flex flex-row gap-2">
                <button onClick={() => setTheme(isDark ? "light" : "dark")} className="text-white hover:cursor-pointer transition">
                    {isDark ? <Sun /> : <Moon color="#000" />}
                </button>
                <p className={`text-xl ${isDark ? "text-white" : "text-black "} `}>
                  <span className="">
                    {" {"}Fullstack{"} "} developer from
                    <span className="font-medium drop-shadow-[0_0.6px_0.6px_rgba(0,0,0,0.8)] txt-animated-gradient-stylish"> IRAN</span>
                  </span>
                </p>
              </div>
            </div>
  
            <div className="flex flex-col items-center lg:items-end md:items-end justify-center order-1 pb-5 md:pb-10 md:order-2">
              <Image src="/img/profile_slfy.png" alt="Profile_selfie" className="w-53 h-53" width={300} height={300}/>
              <div className="flex gap-4 mt-4 text-xl">
                <Link href="/blog" aria-label="Blog" rel="noopener noreferrer"
                  className={`flex items-center mt-[-6] px-2 inset-x-[30px] top-[30px] gap-2 border-2 border-transparent rounded-full font-semibold 
                    ${ isDark ? "text-teal-100 hover:text-white hover:bg-teal-800" : "text-[#17313c] hover:text-black hover:bg-teal-200"} transition`}>
                  <Newspaper className="w-5 h-5" />
                  <span className="font-medium">Blog</span>
                </Link>

                <div className="h-6 w-[1px] bg-gray-400 opacity-50" />

                <a href="https://github.com/RealSinaSnp" target="_blank" aria-label="GitHub Profile" rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faGithub} size="lg" 
                    className={`${ isDark  ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}
                  />
                </a>
                <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" aria-label="LinkedIn Profile" rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faLinkedin} size="lg"  
                    className={`${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}
                  />
                </a>
                <a href="https://x.com/RealSinaSNP" target="_blank" aria-label="X/Twitter Profile" rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faXTwitter} size="lg" 
                    className={`${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}/>
                </a>
              </div>
            </div>

          </div>
        </header>
        {showSticky && <HeaderSticky />}
      </>
    );
  }
  