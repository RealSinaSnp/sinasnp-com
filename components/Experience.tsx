"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experienceData } from "@/app/data";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the entire experience container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
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
        {/* Background empty timeline track */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800"></div>
        
        {/* Animated filling timeline track */}
        <motion.div 
          className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-black dark:bg-white origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        {/* Experience Items */}
        <div className="flex flex-col gap-12 md:gap-20">
          {experienceData.map((exp, index) => {
            return (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ exp, index }: { exp: any, index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Create a localized scroll progress for each individual item 
  // so the dot can light up right as the line reaches it!
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["end center", "start center"]
  });

  // Fade and slide the card in when it enters the viewport
  return (
    <div ref={itemRef} className="relative pl-12 md:pl-24 w-full">
      {/* Timeline Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute left-2.5 md:left-[26px] top-1 h-3.5 w-3.5 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-2 group"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 mb-2">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
            <h4 className="text-lg text-secondary font-medium mt-1">{exp.company}</h4>
          </div>
          <span className="text-sm font-mono px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 text-secondary w-fit">
            {exp.date}
          </span>
        </div>

        <p className="text-lg text-secondary/80 max-w-2xl mt-2 leading-relaxed">
          {exp.description}
        </p>

        {exp.stack && (
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.stack.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md text-xs font-semibold uppercase tracking-wider text-secondary transition-colors group-hover:border-black/30 dark:group-hover:border-white/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
