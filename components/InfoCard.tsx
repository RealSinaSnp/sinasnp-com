"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";

import LogoBox from "@/components/LogoScroll";

interface InfoCardProps {
  title: string;
  description?: string;
  color: string;
  items: {
    label: string;
    level: number;
  }[];
  showCheckmarks?: boolean;
  isTrans?: boolean;

  fullScreenContent?: React.ReactNode;
  logos?: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  color,
  items,
  showCheckmarks = false,
  isTrans = true,
  logos = [],
}) => {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (cardRef.current) {
        const { width, height } = cardRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  const maxTilt = 5;
  const tiltX = mousePos
    ? ((mousePos.y - dimensions.height / 2) / (dimensions.height / 2)) *
      -maxTilt
    : 0;
  const tiltY = mousePos
    ? ((mousePos.x - dimensions.width / 2) / (dimensions.width / 2)) * maxTilt
    : 0;
  const highlightX = mousePos
    ? dimensions.width - mousePos.x
    : dimensions.width / 2;
  const highlightY = mousePos
    ? dimensions.height - mousePos.y
    : dimensions.height / 2;

  const glassHighlight = mousePos
    ? `radial-gradient(circle 900px at ${highlightX}px ${highlightY}px, ${
        theme === "dark" ? "rgba(71, 71, 71, 0.3)" : "rgba(39, 39, 39, 0.15)"
      }, transparent)`
    : "none";

  const textColor = theme === "dark" ? "text-white" : "text-gray-800";
  const bgBar = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  const progressBar = theme === "dark" ? "bg-green-700" : "bg-indigo-500";

  const CardWrapper = isTrans ? motion.div : "div";

  return (
    <>
      <CardWrapper
        layoutId={isTrans ? `card-${title}` : undefined}
        ref={cardRef}
        className={`flex-1 p-6 w-full min-h-[320px] cursor-pointer bg-white bg-opacity-10 backdrop-blur-md rounded-none
          hover:ring-[1px] ${
            theme === "dark"
              ? "hover:ring-neutral-800"
              : "hover:ring-neutral-200"
          }
        hover:scale-100 transform-gpu transition-all duration-300 ease-in-out ${textColor}`}
        onClick={() => isTrans && setIsOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${
            mousePos ? 1.03 : 1
          })`,
          transition: mousePos
            ? "transform 0.1s ease-out, background 0.3s ease-out"
            : "transform 0.3s ease-in-out, background 0.3s ease-in-out",
          background:
            theme === "dark"
              ? `linear-gradient(to bottom right, rgba(72, 72, 72, 0.1), rgba(72, 72, 72, 0.1)), ${glassHighlight}`
              : `linear-gradient(to bottom right, rgba(180, 180, 180, 0.1), rgba(180, 180, 180, 0.1)), ${glassHighlight}`,
        }}
      >
        <h2 className={`text-xl font-semibold mb-4 ${color} font-sans transition`} > {title} </h2>
        {!isOpen && isTrans && (
          <div className="w-full -mb-20 items-center justify-between overflow-hidden">
            <p className={`text-sm mb-0 font-medium font-sans ${textColor} transition`} > {description} </p>
            <div className="w-full overflow-hidden max-w-full">
              <LogoBox logos={logos} />
            </div>
          </div>
        )}
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.label}>
              {!isTrans && (
                <div className="flex items-center justify-between">
                  <p
                    className={`text-sm font-medium font-sans ${textColor} transition`}
                  >
                    {item.label}
                  </p>
                  {showCheckmarks && (
                    <CheckCircle
                      className={`w-4 h-4 ${
                        theme === "dark" ? "text-green-400" : "text-green-600"
                      } transition`}
                    />
                  )}
                </div>
              )}
              {!showCheckmarks && !isTrans && (
                <div className={`mt-1 w-full h-2 ${bgBar} rounded-full`}>
                  <div
                    className={`h-full ${progressBar} rounded-r-full transition`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardWrapper>

      <AnimatePresence>
        {isOpen && isTrans && (
          <motion.div
            layoutId={`card-${title}`}
            className={`fixed inset-0 z-50 ${
              theme === "dark" ? "bg-black/60" : "bg-white/60"
            } backdrop-blur-lg p-10 flex justify-center items-center`}
            onClick={() => setIsOpen(false)}
          >
            <motion.div className="max-w-2xl w-full bg-white dark:bg-neutral-900 text-black dark:text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p>More content soon...</p>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-sm font-medium font-sans ${textColor} transition`}
                      >
                        {item.label}
                      </p>
                    </div>
                    {!showCheckmarks && (
                      <div className={`mt-1 w-full h-2 ${bgBar} rounded-full`}>
                        <div
                          className={`h-full ${progressBar} rounded-r-full transition`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InfoCard;
