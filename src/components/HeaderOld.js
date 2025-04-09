import { Moon, Sun } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Header({ dark, toggleDark }) {
  return (
    <header className="p-6 flex justify-between items-center bg-teal-500 dark:bg-[#17313c]">
      <div className="flex items-center gap-4">
        <img src="/img/profile.jpg" alt="Profile" className="w-16 h-16 rounded-full border-2 border-white dark:border-black" />
        <div>
          <h1 className="text-2xl font-bold">Sina Sasanpour </h1>
          <p className="text-sm">Junior Developer | Assossiate Degree from UÜ</p>
          <div className="flex gap-3 mt-1">
            <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} size={18}  color={dark ? "#98FF98": "#17313c"} />
            </a>
            <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faLinkedin} size={18}  color={dark ? "#98FF98": "#17313c"} />
            </a>
            <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <FontAwesomeIcon icon={faXTwitter} size={18}  color={dark ? "#98FF98": "#17313c"} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="/docs/CV_EN_dark.pdf"
          download
          className="px-4 py-2  text-white font-semibold rounded-full bg-[#17313c] dark:bg-teal-500 hover:bg-black hover:dark:bg-teal-600"
        >
          Download CV (PDF)
        </a>
        <button onClick={toggleDark} className="text-white">
          {dark ? <Sun /> : <Moon color="#17313c" />}
        </button>
      </div>
    </header>
  );
}