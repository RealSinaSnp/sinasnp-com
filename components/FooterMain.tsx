import React from "react";
import { useTheme } from "next-themes"; 


const Footer = () => {

  // keep dark/light mode on tooggle
  const { theme } = useTheme();
  const isDark = theme === "dark"; 

  return (
    <footer className={`w-full ${isDark ? "bg-black text-gray-400" : "bg-white text-gray-600"}  border-t border-neutral-500 `}>
      <div className="flex flex-col md:flex-row gap-5 py-10  max-w-7xl mx-auto items-start justify-between">
        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg font-semibold text-white dark:text-black">Sina Sasanpour</h2>
          <p className="mt-2 text-sm">© 2025 | All rights reserved.</p>
        </div>

        {/* Right Columns */}
        <div className="md:grid  md:grid-cols-2 gap-8 text-center md:text-left ml-auto -right-5">
          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-black">My Websites</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="https://sinasnp.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Weblog</a>
              </li>
              <li>
                <a href="https://upload.sinasnp.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">FileUp</a>
              </li>
            </ul>
          </div>
          

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-black">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/realsinasnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RealSinaSnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;