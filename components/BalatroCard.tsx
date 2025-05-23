import React, { useState, useRef } from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

  // Calculate tilt angles based on mouse position relative to card center
  const cardWidth = 256; // w-64 in Tailwind (64 * 4px)
  const cardHeight = 320; // h-80 in Tailwind (80 * 4px)
  const maxTilt = 8; // Subtle tilt for minimalistic glass effect
  const tiltX = mousePos ? ((mousePos.y - cardHeight / 2) / (cardHeight / 2)) * -maxTilt : 0;
  const tiltY = mousePos ? ((mousePos.x - cardWidth / 2) / (cardWidth / 2)) * maxTilt : 0;

  // Glass highlight effect on opposite side
  const highlightX = mousePos ? cardWidth - mousePos.x : cardWidth / 2;
  const highlightY = mousePos ? cardHeight - mousePos.y : cardHeight / 2;
  const glassHighlight = mousePos
    ? `radial-gradient(circle 1000px at ${highlightX}px ${highlightY}px, rgba(255, 255, 255, 0.3), transparent)`
    : 'none';

  return (
    <div
      ref={cardRef}
      className="group relative w-64 h-80 bg-white bg-opacity-10 backdrop-blur-md  shadow-sm hover:shadow-lg hover:scale-105 transform-gpu transition-all duration-300 ease-in-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${mousePos ? 1.05 : 1})`,
        transition: mousePos ? 'transform 0.1s ease-out, background 0.3s ease-out' : 'transform 0.3s ease-in-out, background 0.3s ease-in-out',
        background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(200, 200, 200, 0.1)), ${glassHighlight}`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
        <h2 className="text-2xl font-semibold mb-2 font-sans">{title}</h2>
        <p className="text-center text-sm font-sans">{description}</p>
      </div>
    </div>
  );
};

export default Card;