'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// ✅ Define proper type for user
interface User {
  name: string;
  email?: string;
  id?: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      // ✅ Optionally, you could fetch actual user data from your API
      // For now, using a placeholder
      setUser({ name: 'Your Account' });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome {user?.name || 'User'} 👋</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </main>
  );
}