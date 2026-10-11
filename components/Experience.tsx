"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experienceData } from "@/app/data";

interface ExperienceData {
  id: number;
  role: string;
  company: string;
  date: string;
  description?: string;
  bullets?: string[];
  stack?: string[];
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the top horizontal line (sweeps in before vertical starts)
  const { scrollYProgress: topProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"],
  });

  // Track scroll progress within the entire experience container (vertical track)
  const { scrollYProgress: verticalProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Track scroll progress for the bottom horizontal line (sweeps out after vertical finishes)
  const { scrollYProgress: bottomProgress } = useScroll({
    target: containerRef,
    offset: ["end center", "end start"],
  });

  return (
    <div className="mx-auto w-full px-8 py-25 xl:max-w-7xl">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between max-w-xl mb-16">
        <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
          <span>[</span>
          <span>Experience</span>
          <span>]</span>
        </h2>
      </div>

      <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">
        {/* Horizontal connector lines extending to the left edge of the screen */}
        
        {/* Top Line (Base + Animated) */}
        <div className="absolute top-3 left-[calc(-50vw+50%)] right-[calc(100%-1rem)] md:right-[calc(100%-2rem)] h-[2px] [mask-image:linear-gradient(to_right,transparent,black_600px)]">
          <div className="absolute inset-0 bg-neutral-600/15" />
          <motion.div 
            className="absolute inset-0 bg-black dark:bg-white origin-left"
            style={{ scaleX: topProgress }}
          />
        </div>

        {/* Bottom Line (Base + Animated) */}
        <div className="absolute bottom-0 left-[calc(-50vw+50%)] right-[calc(100%-1rem)] md:right-[calc(100%-2rem)] h-[2px] [mask-image:linear-gradient(to_right,transparent,black_600px)]">
          <div className="absolute inset-0 bg-neutral-600/15" />
          <motion.div 
            className="absolute inset-0 bg-black dark:bg-white origin-right"
            style={{ scaleX: bottomProgress }}
          />
        </div>

        {/* Background empty timeline track */}
        <div className="absolute left-4 md:left-8 top-3 bottom-0 w-[2px] bg-neutral-600/15 "></div>
        
        {/* Animated filling timeline track */}
        <motion.div 
          className="absolute left-4 md:left-8 top-3 bottom-0 w-[2px] bg-black dark:bg-white origin-top"
          style={{ scaleY: verticalProgress }}
        />

        {/* Experience Items */}
        <div className="flex flex-col gap-12 md:gap-20">
          {experienceData.map((exp) => {
            return (
              <ExperienceItem key={exp.id} exp={exp} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ exp }: { exp: ExperienceData }) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Track localized scroll progress for this specific item to control the glow
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "end 20%"]
  });

  // Calculate glow opacity: 0 at the edges, 1 when it's actively in the center of the viewport
  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.1, 1], [0, 1, 1, 0]);
  
  // Scale peaks slightly (1.03) when the card is around 2/3rds down the screen (progress ~0.3)
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1.05, 1, 0.95]);

  // Fade and slide the card in when it enters the viewport
  return (
    <div ref={itemRef} className="relative pl-12 md:pl-24 w-full py-4">
      {/* Timeline Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute left-2.5 md:left-[26px] top-6 h-3.5 w-3.5 bg-gray-300 dark:bg-gray-700 border-2 border-black dark:border-white z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ scale: cardScale }}
        className="flex flex-col gap-2 group relative p-6 md:p-8 -mx-6 md:-mx-8  origin-left"
      >
        {/* Dynamic Highlight Glow Overlay */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 pointer-events-none  overflow-hidden"
        >
          {/* Top and Bottom inner glows */}
          <div className="absolute top-0 left-0 right-0 h-full bg-linear-to-r from-black/5 to-transparent dark:from-white/6 dark:to-transparent" />
        </motion.div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
              <h4 className="text-lg text-secondary font-medium mt-1">{exp.company}</h4>
            </div>
            <span className="text-sm font-mono px-4 py-1.5 bg-neutral-500/15 text-secondary w-fit">
              {exp.date}
            </span>
          </div>

          {exp.bullets ? (
            <ul className="mt-4 flex flex-col gap-3 max-w-2xl">
              {exp.bullets.map((bullet: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-lg text-secondary/80 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40 flex-shrink-0"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-secondary/80 max-w-2xl mt-2 leading-relaxed">
              {exp.description}
            </p>
          )}

          {exp.stack && (
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.stack.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm text-xs font-semibold uppercase tracking-wider text-secondary transition-colors group-hover:border-black/30 dark:group-hover:border-white/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
