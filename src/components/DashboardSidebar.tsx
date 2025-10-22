import Link from 'next/link';

export default function DashboardSidebar() {
  return (
    <aside className="hidden sm:block w-64 bg-white border-r h-[calc(100vh-80px)] pt-8 fixed top-20 left-0">
      <nav className="flex flex-col gap-4 px-6">
        <Link href="/dashboard" className="text-blue-700 font-medium hover:underline">🏠 Dashboard</Link>
        <Link href="/my-courses" className="hover:text-blue-700">📚 My Courses</Link>
        <Link href="/progress" className="hover:text-blue-700">📈 Progress</Link>
        <Link href="/settings" className="hover:text-blue-700">⚙️ Settings</Link>
      </nav>
    </aside>
  );
}
