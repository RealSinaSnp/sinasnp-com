// components/PortfolioHeader.tsx
"use client";

import { Moon, Sun, Newspaper } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeaderSticky from "./HeaderSticky";

export default function PortfolioHeader() {
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
        className={`h-screen w-full flex flex-col justify-center items-center text-center gap-6 px-6 ${
          isDark ? "bg-animated-gradient-dark" : "bg-animated-gradient"
        }`}
      >
        <img
          src="/img/profile.jpg"
          alt="Profile"
          className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 ${
            isDark ? "border-white" : "border-black"
          } transition`}
        />
        <h1 className="text-4xl md:text-5xl font-bold">Sina Sasanpour</h1>
        <p className="text-lg">Istanbul | React Developer</p>

        <div className="flex gap-4 mt-2">
          <a href="/blog" target="_blank" rel="noopener noreferrer" 
            className={`flex items-center mt-[-6] gap-2 px-2 py-1 border-2 
                ${isDark
                ? "border-teal-300 text-teal-100 hover:text-white hover:bg-teal-800"
                : "border-[#17313c] text-[#17313c] hover:text-black hover:bg-teal-200"
                } 
                rounded-full transition`}
          >
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

        <div className="flex items-center gap-4 mt-4">
          <a
            href="/docs/CV_EN_dark.pdf"
            download
            className={`px-5 py-2 text-white font-semibold rounded-full ${
              isDark ? "bg-teal-500 hover:bg-teal-400" : "bg-[#002F19] hover:bg-[#071D0E]"
            } transition`}
          >
            Download CV (PDF)
          </a>
          <button onClick={() => setTheme(isDark ? "light" : "dark")} className="text-white">
            {isDark ? <Sun /> : <Moon color="#000" />}
          </button>
        </div>
        <p className="max-w-2xl text-center text-lg leading-relaxed transition">
          I focus on clean code
          {theme !== "light" && ", and dark mode (because I respect your eyes)"}
          {theme !== "dark" && ", fast loading and adaptability"}.
        </p>
        <div className="absolute bottom-6 animate-bounce">
          <a className="text-white hover:text-teal-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </header>
      {showSticky && <HeaderSticky />}
    </>
  );
}