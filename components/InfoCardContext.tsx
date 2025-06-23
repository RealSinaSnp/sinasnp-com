import React from "react";
import { BadgeCheck, } from "lucide-react";
import { useTheme } from "next-themes";

interface InfoCardContextProps {
  title: string;
  groupedItems: Record<string,{ label: string; mastered?: boolean; }[] >;
}

export const InfoCardContext: React.FC<InfoCardContextProps> = ({ groupedItems, /* title, */ }) => 
{
  const { theme } = useTheme();
  const isDark = theme === "dark";
  

  return (
    <div className="space-y-5 md:space-y-8">
      {/* Bottom Line */}
      <div className={`absolute w-full h-[1px] bg-gradient-to-r z-12 top-0 from-transparent ${isDark ? "via-white" : "via-black"} to-transparent -translate-x-10`} />
      <div className={`absolute w-full h-[1px] bg-gradient-to-r z-12 -bottom-5 md:-bottom-8 from-transparent ${isDark ? "via-white" : "via-black"} to-transparent -translate-x-10`} />
      <div className={`absolute h-full w-[1px] bg-gradient-to-b z-12 left-0 from-transparent ${isDark ? "via-white" : "via-black"} to-transparent -translate-y-10`} />
      <div className={`absolute h-full w-[1px] bg-gradient-to-b z-12 right-0 from-transparent ${isDark ? "via-white" : "via-black"} to-transparent -translate-y-10`} />
      

      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category} className="mb-5">
          
          <h3 className="text-xl md:text-2xl font-bold text-sky-800 mb-1">{category}</h3>
          <div className="flex flex-wrap gap-1 md:gap-3">
            {items.map(({ label, mastered }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-sm text-sm font-medium
                  ${mastered 
                    ? `border-2 ${isDark ? "text-neutral-200 bg-teal-400/30 border-teal-500" : "text-neutral-800 bg-teal-300/30 border-teal-500"}`
                    : `border-2 ${isDark ? "text-neutral-100 bg-yellow-400/30 border-yellow-500" : "text-neutral-800 bg-yellow-300/30 border-yellow-500"}`}`}
              >
                {mastered == true && (<BadgeCheck className="w-4 h-4" />)}
                {label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCardContext;
