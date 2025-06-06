"use client";

import React from "react";
import { BadgeCheck, BadgeMinus  } from "lucide-react";
import { useTheme } from "next-themes";

interface InfoCardContextProps {
  title: string;
  groupedItems: Record<
    string,
    {
      label: string;
      mastered?: boolean;
    }[]
  >;
}


// function groupSkillsByCategory(skills: typeof webSkills) {
//   const grouped: Record<string, { label: string; mastered: boolean }[]> = {};

//   skills.forEach(({ label, category, mastered }) => {
//     if (!grouped[category]) grouped[category] = [];
//     grouped[category].push({ label, mastered });
//   });

//   return Object.entries(grouped).map(([title, items]) => ({ title, items }));
// }


export const InfoCardContext: React.FC<InfoCardContextProps> = ({
  // title,
  groupedItems,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  //const grouped = groupSkillsByCategory(webSkills);
//   const categories = [
//   {
//     title: "Frontend",
//     items: [
//       { label: "JavaScript", mastered: true },
//       { label: "TypeScript", mastered: true },
//       { label: "React", mastered: true },
//       { label: "Tailwind CSS", mastered: true },
//     ],
//   },
//   {
//     title: "Backend",
//     items: [
//       { label: "Next.js", mastered: true },
//       { label: "PHP", mastered: false },
//     ],
//   },
//   {
//     title: "Database",
//     items: [
//       { label: "MySQL", mastered: true },
//       { label: "MongoDB", mastered: false },
//     ],
//   },
//   {
//     title: "Infrastructure",
//     items: [
//       { label: "Linux", mastered: true },
//       { label: "Docker", mastered: false },
//       { label: "Nginx", mastered: false },
//     ],
//   },
//   {
//     title: "Tools",
//     items: [
//       { label: "Chart.js", mastered: false },
//       { label: "GraphQL", mastered: false },
//       { label: "Google Lighthouse", mastered: true },
//     ],
//   },
//   {
//     title: "Skills",
//     items: [
//       { label: "Caching", mastered: true },
//       { label: "SSR", mastered: true },
//       { label: "CSR", mastered: true },
//     ],
//   },
// ];

  return (
    <div className="space-y-8">
      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-xl font-bold text-sky-700 mb-3">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {items.map(({ label, mastered }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium
                  ${mastered 
                    ? `border-2 ${isDark ? "text-neutral-200 bg-teal-800 border-teal-500" : "text-neutral-800 bg-teal-300/30 border-teal-500"}`
                    : `border-2 ${isDark ? "text-neutral-200 bg-yellow-900 border-yellow-500" : "text-neutral-800 bg-yellow-300/30 border-yellow-500"}`}`}
              >
                {mastered == true && (<BadgeCheck className="w-4 h-4" />)}
                {mastered == false && (<BadgeMinus className="w-4 h-4" />)}
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
