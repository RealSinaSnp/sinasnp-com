import React from "react";

const FadingLines = () => {
  return (
    <div className="relative w-full h-16 flex items-center justify-center">
      {/* Top Line */}
      <div className="absolute w-xl h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

      <div className="translate-y-4 z-12">
        <h1>HI There</h1>
      </div>

      {/* Glass Effect Container */}
      <div className="absolute w-xl h-7  backdrop-blur-md rounded-md translate-y-4 z-11"></div>
      {/* Bottom Line */}
      <div className="absolute w-xl h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent translate-y-8"></div>
    </div>
  );
};

export default FadingLines;