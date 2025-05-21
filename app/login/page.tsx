'use client';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.ok) router.push("/blog/new");
    else alert("Invalid credentials");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="space-y-4 w-1/3">
        <input type="text" placeholder="Username" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}
