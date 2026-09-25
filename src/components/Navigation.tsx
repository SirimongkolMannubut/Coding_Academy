import Link from 'next/link';
import { Home, Trophy, User } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6 z-50 text-white">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-bold">3D</div>
        <span className="font-bold text-xl tracking-tight">Coding Academy</span>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/" className="hover:text-blue-400 flex items-center space-x-1 transition-colors">
          <Home size={18} />
          <span>World</span>
        </Link>
        <Link href="/courses/javascript" className="hover:text-yellow-400 font-bold transition-colors">
          JS
        </Link>
        <Link href="/profile" className="hover:text-green-400 flex items-center space-x-1 transition-colors">
          <User size={18} />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
}
