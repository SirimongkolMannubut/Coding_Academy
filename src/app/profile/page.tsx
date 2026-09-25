"use client";

import { useStore } from "@/lib/store";
import { Trophy, Code, Database, GitBranch } from "lucide-react";

export default function ProfilePage() {
  const { xp, level, badges, progress, completedLessons } = useStore();

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-8">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8 flex items-center space-x-8">
        <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center border-4 border-yellow-500">
          <Trophy className="text-yellow-500" size={64} />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2 text-white">LV.{level} Student</h1>
          <p className="text-xl text-gray-400 mb-4">You have earned <span className="text-yellow-400 font-bold">{xp.toLocaleString()} XP</span></p>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-bold text-gray-300">
              🔥 1 Day Streak
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-bold text-gray-300">
              📚 {completedLessons.length} Lessons Completed
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center"><Code className="mr-2" /> Progress</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">JavaScript</span>
                <span className="text-gray-400">{progress.javascript}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-yellow-400 h-3 rounded-full transition-all" style={{ width: `${progress.javascript}%` }}></div>
              </div>
            </div>
            
            <div className="opacity-50">
              <div className="flex justify-between mb-2">
                <span className="font-bold flex items-center"><GitBranch size={16} className="mr-1" /> Git/GitHub</span>
                <span className="text-gray-400">{progress.git}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: `${progress.git}%` }}></div>
              </div>
            </div>

            <div className="opacity-50">
              <div className="flex justify-between mb-2">
                <span className="font-bold flex items-center"><Database size={16} className="mr-1" /> MySQL</span>
                <span className="text-gray-400">{progress.mysql}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${progress.mysql}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center"><Trophy className="mr-2" /> Badges</h2>
          
          {badges.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, i) => (
                <div key={i} className="flex flex-col items-center p-3 bg-gray-800 rounded-lg border border-yellow-500/30">
                  <span className="text-2xl mb-2">🏆</span>
                  <span className="text-xs text-center font-bold">{badge}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 py-8">
              <Trophy size={48} className="mb-4 opacity-20" />
              <p>Keep learning to earn badges!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
