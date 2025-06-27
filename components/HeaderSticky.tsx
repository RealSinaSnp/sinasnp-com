// components/HeaderSticky.tsx
import { Moon, Sun, Newspaper, Download } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function HeaderSticky() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleDark = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className={`fixed top-5 left-0 w-full px-8 z-50 flex justify-center animate-slideDown group`}>
      {/* Top Line */}
      <div className={`absolute w-sm md:w-xl h-[1px] bg-gradient-to-r from-transparent ${isDark ? "via-neutral-300 group-hover:via-white" : "via-neutral-500 group-hover:via-black"} to-transparent z-12`} />
      {/* Glass Effect Container */}
      <div className="absolute w-xl h-[55px] backdrop-blur-md md:backdrop-blur-xs md:group-hover:backdrop-blur-md mask-fade translate-y-[1px] z-11 "></div>

      <div className={`h-14 border-0 rounded-xs px-4 py-2 flex items-center justify-between ${isDark ? "" : ""} bg-opacity-25 transition-all max-w-md w-full z-12`}>

        <a href="/docs/CV_EN_dark.pdf" download className={`flex items-center ml-5 md:ml-0 gap-2 group/download-hover`} >
          <Download size={20} className={`w-5 h-5 md:w-7 md:h-7 ${isDark ? "text-teal-100 group-hover/download-hover:text-white" : "text-teal-900 group-hover/download-hover:text-black"} transition`}/>
          <span className={`font-semibold text-sm md:text-md ${isDark? "text-teal-100 group-hover/download-hover:text-white": "text-teal-900 group-hover/download-hover:text-black"} transition`}>
            <span className="hidden md:inline">Download </span>CV
          </span>
        </a>

        <div className="flex items-center gap-3">
          <Link href="/blog" rel="noopener noreferrer" aria-label="Blog" className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-teal-900 hover:text-black"} transition`}>
            <Newspaper className="w-6 h-6" />
          </Link>
          <div className={`h-7 w-[1px] ${isDark ? "bg-gray-400" : "bg-gray-400"} opacity-50`} />
          <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FontAwesomeIcon icon={faGithub} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-teal-900 hover:text-black"} transition`}/>
          </a>
          <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedin} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-teal-900 hover:text-black"} transition`}/>
          </a>
          <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter Profile">
            <FontAwesomeIcon icon={faXTwitter} className={`flex items-center ${isDark ? "text-teal-100 hover:text-white" : "text-teal-900 hover:text-black"} transition`}/>
          </a>
          <div className={`h-7 w-[1px] ${isDark ? "bg-gray-400" : "bg-gray-400"} opacity-50`} />

          <button onClick={toggleDark} className="text-white hover:cursor-pointer">
            {isDark ? <Sun /> : <Moon className="text-black"/>}
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className={`absolute w-sm md:w-xl h-[1px] bg-gradient-to-r z-12 translate-y-14
        from-transparent ${isDark ? "via-neutral-300 group-hover:via-white" : "via-neutral-500 group-hover:via-black"} to-transparent`} />
    </div>
  );
}
