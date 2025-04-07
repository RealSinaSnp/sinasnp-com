import { CheckCircle } from "lucide-react";

export default function InfoCard({ title, color, items, showCheckmarks = false }) {
  return (
    <div className="flex-1 bg-gray-100 dark:bg-[#111] p-4 rounded-2xl shadow">
      <h2 className={`text-xl font-bold mb-4 ${color}`}>{title}</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.label}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{item.label}</p>
              {showCheckmarks && (
                <CheckCircle className="text-green-600 dark:text-green-400 w-4 h-4" />
              )}
            </div>
            {!showCheckmarks && (
              <div className="mt-1 w-full h-2 bg-gray-200 dark:bg-[#141414] rounded-full">
                <div
                  className="h-full bg-indigo-500 dark:bg-green-700 rounded-full"
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
