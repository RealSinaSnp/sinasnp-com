'use client';

import { useRouter } from "next/navigation";
import Starfield from '@/components/Starfield';

export default function NotFound() {
  const router = useRouter();

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <Starfield
              starCount={3000}
              starColor={[255,222,33]}
              speedFactor={0.01}
              backgroundColor="#000"
            />
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl mb-8 text-gray-300">Page Not Found</p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-[#111] text-white hover:bg-[#222] font-semibold transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
