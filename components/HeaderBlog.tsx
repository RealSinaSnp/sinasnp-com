// /components/BlogHeader.tsx
// for blog page
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FileUser } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  if (pathname === "/") return null;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-[6px] bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-teal-600 dark:text-teal-400 hover:opacity-80 transition">
          SINA
        </Link>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 text-center">
          myBrain.log
        </h1>
        <div className="flex gap-3 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a href="https://sinasnp.com/" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition">
            <FileUser size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
