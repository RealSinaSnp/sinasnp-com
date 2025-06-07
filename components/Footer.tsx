import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  
  const pathname = usePathname();
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year || pathname === "/") return null;
    return (
      <footer className="bg-black text-center text-sm text-gray-300 py-6 border-t border-gray-200 dark:border-gray-500">
        
        © {new Date().getFullYear()} &nbsp;
        <a href="https://sinasnp.com" target="_blank" rel="noopener noreferrer" aria-label="sinasnp.com" className="hover:text-black dark:hover:text-white transition">
            sinasnp.com
        </a> 
        &nbsp; Built with pain, coffee & Next.js.
      </footer>
    );
}