// components/PortfolioHeader.tsx
"use client";

import { Moon, Sun, Newspaper } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeaderSticky from "./HeaderSticky";
import Image from "next/image";

export default function PortfolioHeader() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const triggerHeight = window.innerHeight * 0.75;
      setShowSticky(offset > triggerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <>
        <header
          className={`min-h-[85vh] w-full bg-no-repeat  
                      ${isDark ? "bg-animated-gradient-fade-dark text-white" : "bg-animated-gradient-fade text-black" }`}  
        >
          <div className={` md:pt-30 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-8 py-12 md:py-0`} >
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left order-2 md:order-1">
              <h1 className={`text-5xl font-extrabold tracking-tight text-gray-900 
                ${ isDark ? "text-white" : "text-black " } `} >
                Hey, I’m{" "}
                <span className={`${isDark ? "txt-animated-gradient-dark" : "txt-animated-gradient" } transition`}>
                  Sina
                  <span className="hidden md:inline"> Sasanpour</span>
                </span>
              </h1>
              <div className="flex flex-row gap-2">
              <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="text-white hover:cursor-pointer transition"
                >
                  {isDark ? <Sun /> : <Moon color="#000" />}
                </button>
              <p className={`text-xl ${isDark ? "text-white" : "text-black "} `}>
                Coding with{" {"}
                <span className="font-medium txt-animated-gradient-stylish">style</span>{"} "}
                <span className="hidden md:inline">
                  {isDark ? "in Dark Mode." : "and building snappy UIs."}
                </span>
              </p>
  
              </div>
  
              
            </div>
  
  
  
            <div className="flex flex-col items-center lg:items-end md:items-end justify-center order-1 pb-5 md:pb-10 md:order-2">
              <Image
                src="/img/profile_slfy.png"
                alt="Profile_selfie"
                className="w-52 h-50"
              />
  
  
  
              <div className="flex gap-4 mt-4 text-xl">
                
                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center mt-[-6] px-2 inset-x-[30px] top-[30px] gap-2 border-2 border-transparent rounded-full font-semibold
                  ${
                    isDark
                      ? "text-teal-200 hover:text-white hover:bg-teal-800"
                      : "text-[#17313c] hover:text-black hover:bg-teal-200"
                  } 
                  transition`}
                >
                  <Newspaper className="w-5 h-5" />
                  <span className="font-medium">Blog</span>
                </a>

                <div className="h-6 w-[1px] bg-gray-400 opacity-50" />

                <a
                  href="https://github.com/RealSinaSnp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className={`${
                      isDark
                        ? "text-teal-100 hover:text-white"
                        : "text-[#17313c] hover:text-black"
                    } transition`}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/realsinasnp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    className={`${
                      isDark
                        ? "text-teal-100 hover:text-white"
                        : "text-[#17313c] hover:text-black"
                    } transition`}
                  />
                </a>
                <a
                  href="https://x.com/RealSinaSNP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    size="lg"
                    className={`${
                      isDark
                        ? "text-teal-100 hover:text-white"
                        : "text-[#17313c] hover:text-black"
                    } transition`}
                  />
                </a>
              </div>
              {/*
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="/docs/CV_EN_dark.pdf"
                  download
                  className={`px-5 py-2 text-white font-semibold  ${
                    isDark
                      ? "bg-teal-500 hover:bg-teal-600"
                      : "bg-[#002F19] hover:bg-[#0e634b]"
                  } transition`}
                >
                  Download CV (PDF)
                </a>
              </div>
              */}
            </div>
          </div>
        </header>
        {showSticky && <HeaderSticky />}
      </>
    );
  }
  