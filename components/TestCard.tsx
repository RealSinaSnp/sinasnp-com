// TiltCardWrapper.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface TiltCardWrapperProps {
  children: React.ReactNode;
  className?: string;
  customTilt?: number;
  isTrans?: boolean;
  onClick?: () => void;
}

const TiltCardWrapper: React.FC<TiltCardWrapperProps> = ({
  children,
  className = "",
  customTilt,
  // isTrans = false,
  onClick,
}) => {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
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
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setMousePos(null);

  const maxTilt = customTilt || 4;
  const tiltX = mousePos
    ? ((mousePos.y - dimensions.height / 2) / (dimensions.height / 2)) *
      -maxTilt
    : 0;
  const tiltY = mousePos
    ? ((mousePos.x - dimensions.width / 2) / (dimensions.width / 2)) *
      maxTilt
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

  const baseBg =
    theme === "dark"
      ? `linear-gradient(to bottom right, rgba(72,72,72,0.1), rgba(72,72,72,0.1)), ${glassHighlight}`
      : `linear-gradient(to bottom right, rgba(180,180,180,0.1), rgba(180,180,180,0.1)), ${glassHighlight}`;

  return (
    <div
      ref={cardRef}
      className={`p-6 w-full min-h-[320px] cursor-pointer rounded-none hover:ring-1 ${
        theme === "dark" ? "hover:ring-neutral-800" : "hover:ring-neutral-200"
      } transform-gpu transition-all duration-300 ease-in-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${
          mousePos ? 1.03 : 1
        })`,
        transition: mousePos
          ? "transform 0.1s ease-out, background 0.3s ease-out"
          : "transform 0.3s ease-in-out, background 0.3s ease-in-out",
        background: baseBg,
      }}
    >
      {children}
    </div>
  );
};

export default TiltCardWrapper;
