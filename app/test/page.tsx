// @/components/HeroSection.tsx
"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000]"></div>

      {/* Glowing Rings */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-teal-500 via-transparent to-transparent blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500 via-transparent to-transparent blur-3xl opacity-20 animate-pulse delay-200"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Futuristic Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-500 animate-text">
          FUTURE IS NOW
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 tracking-wide">
          Redefining the boundaries of creativity and technology.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#explore"
            className="px-8 py-3 text-sm md:text-base font-medium rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
          >
            Explore
          </a>
          <a
            href="#projects"
            className="px-8 py-3 text-sm md:text-base font-medium rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-teal-500 transition-all duration-300"
          >
            Projects
          </a>
        </div>
      </div>

      {/* 3D Grid Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-500 to-transparent blur-2xl opacity-50 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-500 to-transparent blur-2xl opacity-50 animate-float delay-300"></div>
    </section>
  );
}