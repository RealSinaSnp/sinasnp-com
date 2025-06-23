"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useTheme } from "next-themes";
import InfoCardContext from "@/components/InfoCardContext";
import LogoBox from "@/components/LogoScroll";

interface InfoCardProps {
  title: string;
  description?: string;
  color: string;
  items: {
  label: string;
  level: number;
  category: string;
  mastered?: boolean; // Optional to avoid breaking old usage
}[];
  showCheckmarks?: boolean;
  isTrans?: boolean;

  fullScreenContent?: React.ReactNode;
  logos?: string[];
  customTilt?: number;
}

const InfoCard1: React.FC<InfoCardProps> = ({
  title,
  description,
  color,
  items,
  // showCheckmarks = false,
  isTrans = true,
  logos = [],
  customTilt,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark"; 
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof items>);
  

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
  

  const maxTilt = customTilt || 4; // Default tilt value if customTilt is not provided
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
  // const bgBar = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  // const progressBar = theme === "dark" ? "bg-green-700" : "bg-indigo-500";

  const CardWrapper = isTrans ? motion.div : "div";


  







  return (
    <>
      <CardWrapper
        layoutId={isTrans ? `card-${title}` : undefined}
        ref={cardRef}
        className={`flex-1 p-6 w-full min-h-[320px] cursor-pointer bg-white bg-opacity-10 backdrop-blur-md rounded-none group
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
          
          <div className="w-full  items-center justify-between overflow-hidden ">
            <p className={`text-sm mb-0 font-medium font-sans ${textColor} transition`} > {description} </p>
            <div className="w-full overflow-hidden max-w-full">
              <LogoBox logos={logos} />
            </div>
            {/* expand icon */}
            <div className="absolute top-3 right-3"> 
              <div className={`w-11 h-11 rounded-full ${isDark ? "bg-black" : "bg-white"} flex items-center justify-center group-hover:bg-transparent hover:bg-transparent `}>
                <Maximize2 size={25} className={`animate-pulse scale-130 transition-transform duration-200 ease-in-out ${isDark ? "text-white" : "text-black"} md:animate-none md:group-hover:scale-170 md:hover:scale-170`} />
              </div>
            </div>
          </div>
        )}
      </CardWrapper>

      <AnimatePresence>
        {isOpen && isTrans && (
          <motion.div layoutId={`card-${title}`}
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 z-50 ${ theme === "dark" ? "bg-black/60" : "bg-white/60"} backdrop-blur-xs p-10 flex justify-center items-center`}
          >
            
            <motion.div 
              onClick={(e) => e.stopPropagation()} //prevent clicking inside the box from closing the modal
              className={`relative max-w-7xl max-h-[107%] backdrop-blur-sm border-1 w-full  ${isDark ? "border-neutral-700" : "border-neutral-100"} p-10 `}
            >
              
              {/* Close Button */}
              <button onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 cursor-pointer transition-colors hover:bg-neutral-500/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Close Button End*/}

              {/* Context Openning on click */}
              <InfoCardContext title= {title} groupedItems={groupedItems}/>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InfoCard1;

