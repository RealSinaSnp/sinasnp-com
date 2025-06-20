// @/components/HeroSection.tsx
"use client";

import { useTheme } from "next-themes";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full h-[80vh] flex items-center justify-center ${
        isDark ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-gradient-to-br from-gray-800 to-black" : "bg-gradient-to-br from-gray-200 to-white"
          }`}
        ></div>
        <div className="absolute inset-0 bg-[url('/img/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1
          className={`text-4xl md:text-6xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome to My Portfolio
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Discover my projects, skills, and passion for building innovative solutions.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 text-sm md:text-base font-medium rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 shadow-lg"
          >
            Learn More
          </a>
          <a
            href="#projects"
            className={`px-6 py-3 text-sm md:text-base font-medium rounded-full ${
              isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            } transition-all duration-300 shadow-lg`}
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
}