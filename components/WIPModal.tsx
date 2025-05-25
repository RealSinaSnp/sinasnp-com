// components/WIPModal.tsx
import { useEffect, useState } from 'react';

export default function WIPModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // You can add logic here to only show once
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 shadow-lg max-w-sm text-center">
        <h2 className="text-xl font-bold text-black mb-4">🚧 Before you Enter 🚧</h2>
        <p className="mb-4 text-black">This design is not fully finished</p>
        <button
          onClick={() => setVisible(false)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
