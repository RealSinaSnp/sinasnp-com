'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';

export default function LogoutButton() {
  const [error, setError] = useState<string | null>(null);

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: '/login' });
    } catch (err) {
      setError('Failed to sign out. Please try again.');
      console.error('Sign out error:', err);
    }
  };

  return (
    <div className="inline-block">
      <button
        onClick={handleSignOut}
        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded ml-2"
      >
        🚪 Log Out
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}