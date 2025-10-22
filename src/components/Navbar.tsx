import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          🇩🇪 Deutsch-Meister
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/courses" className="hover:text-blue-700">Courses</Link>
          <Link href="/login" className="hover:text-blue-700">Login</Link>
          <Link
            href="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
