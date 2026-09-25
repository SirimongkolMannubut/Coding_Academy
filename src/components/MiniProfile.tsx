"use client";
import { useStore } from '@/lib/store';
import { Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MiniProfile() {
  const [mounted, setMounted] = useState(false);
  const { xp, level } = useStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl z-50 text-white flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border-2 border-yellow-500">
        <Trophy className="text-yellow-500" size={24} />
      </div>
      <div>
        <div className="font-bold text-lg">LV. {level < 10 ? `0${level}` : level} Student</div>
        <div className="text-sm text-yellow-400 font-mono">{xp.toLocaleString()} XP</div>
      </div>
    </div>
  );
}
