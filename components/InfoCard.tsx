import { CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";


type InfoCardProps = {
  title: string;
  color: string;
  items: {
    label: string;
    level: number;
  }[];
  showCheckmarks?: boolean;
};
export default function InfoCard({ title, color, items, showCheckmarks = false }: InfoCardProps) {
  const { theme } = useTheme(); // Get current theme

  // Define dynamic background color based on the theme
  const bgCard = theme === "dark" ? "bg-[#111] md:bg-[#0c0c0c] hover:md:bg-[#111]" : "bg-gray-100 md:bg-white hover:md:bg-gray-100";
  const bgBar = theme === "dark" ? "bg-[#141414]" : "bg-gray-200";
  const progressBar = theme === "dark" ? "bg-green-700" : "bg-indigo-500";

  return (
    <div className={`flex-1 p-4  ${bgCard}`}>
      <h2 className={`text-xl font-bold mb-4 ${color} transition`}>{title}</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.label}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium transition">{item.label}</p>
              {showCheckmarks && (
                <CheckCircle className="text-green-600 dark:text-green-400 w-4 h-4 transition" />
              )}
            </div>
            {!showCheckmarks && (
              <div className={`mt-1 w-full h-2 ${bgBar} `}>
                <div
                  className={`h-full ${progressBar} rounded-r-full transition`}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
