// components/HeaderSticky.tsx
import { Moon, Sun, Newspaper, Download } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function HeaderSticky() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleDark = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className={`fixed top-2 left-0 w-full px-8 z-50 flex justify-center animate-slideDown`}>
      {/* Top Line */}
      <div className="absolute w-xl h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent  z-12"></div>
      {/* Glass Effect Container */}
      <div className="absolute w-xl h-[55px] backdrop-blur-md md:backdrop-blur-xs translate-y-[1px] z-11 mask-fade"></div>

      <div className={`h-14 border-0 rounded-xs px-4 py-2 flex items-center justify-between ${isDark ? "" : ""} bg-opacity-25 transition-all max-w-md w-full z-12`}>

        
        <a href="/docs/CV_EN_dark.pdf" download className={`flex items-center gap-2`} >
          <Download className={`${isDark ? "text-teal-100 group-hover:text-white" : "text-[#17313c] group-hover:text-black"} transition`}/>
          <span
            className={`font-semibold text-md ${isDark? "text-teal-100 group-hover:text-white": "text-[#17313c] group-hover:text-black"} transition`}>
            Download CV
          </span>
        </a>

        <div className="flex items-center gap-3">
          <Link href="/blog" rel="noopener noreferrer" aria-label="Blog" className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}>
            <Newspaper className="w-6 h-6" />
          </Link>
          <div className={`h-7 w-[1px] ${isDark ? "bg-gray-400" : "bg-gray-400"} opacity-50`} />
          <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FontAwesomeIcon icon={faGithub} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}/>
          </a>
          <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedin} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}/>
          </a>
          <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter Profile">
            <FontAwesomeIcon icon={faXTwitter} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`}/>
          </a>
          <div className={`h-7 w-[1px] ${isDark ? "bg-gray-400" : "bg-gray-400"} opacity-50`} />

          <button onClick={toggleDark} className="text-white hover:cursor-pointer">
            {isDark ? <Sun /> : <Moon className="text-black"/>}
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute w-xl h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent translate-y-14"></div>
    </div>
  );
}
