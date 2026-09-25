"use client";

import WorldScene from "@/components/WorldScene";
import { useStore } from "@/lib/store";
import { Lock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { javascriptCourse } from "@/data/javascript-course";
import { gitCourse } from "@/data/git-course";
import { mysqlCourse } from "@/data/mysql-course";

export default function Home() {
  const { progress, level, xp } = useStore();

  return (
    <main className="flex-1 flex flex-col relative bg-gray-950 overflow-hidden">
      {/* 3D World Background */}
      <div className="absolute inset-0 z-0">
        <WorldScene />
      </div>

      {/* HUD: Left Learning Path (Desktop Only) */}
      <div className="hidden lg:block absolute top-8 left-8 z-10 w-80 bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 text-white shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <span className="bg-blue-500 p-1.5 rounded-lg mr-2 text-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]">🧭</span> 
            Learning Path
          </h2>
          <div className="text-right">
            <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest">Player</div>
            <div className="text-sm font-bold text-white">Lv. {level} <span className="text-gray-400 text-xs font-normal">({xp} XP)</span></div>
          </div>
        </div>

        <div className="space-y-6">
          {/* JS Node */}
          <div className="relative">
            <div className={`absolute left-4 top-10 bottom-[-24px] w-0.5 ${progress.javascript >= 100 ? 'bg-green-500' : 'bg-blue-500/30'}`}></div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${progress.javascript >= 100 ? 'bg-green-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]' : 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]'}`}>
                  <span className="text-xs font-bold text-white">JS</span>
                </div>
                <span className="font-bold text-lg text-white">JavaScript</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-bold ${progress.javascript >= 100 ? 'bg-green-900/50 text-green-300 border-green-700/50' : 'bg-blue-900/50 text-blue-300 border-blue-700/50'}`}>
                {progress.javascript >= 100 ? 'Completed' : 'Beginner'}
              </span>
            </div>
            <div className="pl-11">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Main Quest</span>
                <span className={`font-bold ${progress.javascript >= 100 ? 'text-green-400' : 'text-blue-400'}`}>{progress.javascript}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2 shadow-inner">
                <div className={`${progress.javascript >= 100 ? 'bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]'} h-1.5 rounded-full transition-all`} style={{ width: `${progress.javascript}%` }}></div>
              </div>
              <div className="text-xs text-yellow-200/80 bg-yellow-900/30 px-2 py-1 rounded-md border border-yellow-700/50 flex items-center">
                <span className="mr-1">🏆</span> Reward: JS Master Badge
              </div>
            </div>
          </div>

          {/* Git Node */}
          <div className="relative">
             <div className={`absolute left-4 top-10 bottom-[-24px] w-0.5 ${progress.git >= 100 ? 'bg-green-500' : 'bg-gray-700/50'}`}></div>
            <div className={`flex items-center justify-between mb-2 ${progress.git === 0 ? 'opacity-70' : ''}`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${progress.git > 0 ? (progress.git >= 100 ? 'bg-green-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]' : 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]') : 'bg-gray-800 border border-gray-600'}`}>
                  {progress.git > 0 ? <span className="text-xs font-bold text-white">Git</span> : <Lock size={14} className="text-gray-400" />}
                </div>
                <span className={`font-bold ${progress.git > 0 ? 'text-lg text-white' : 'text-gray-300'}`}>Git / GitHub</span>
              </div>
              {progress.git > 0 ? (
                <span className={`text-xs px-2 py-0.5 rounded-full border font-bold ${progress.git >= 100 ? 'bg-green-900/50 text-green-300 border-green-700/50' : 'bg-orange-900/50 text-orange-300 border-orange-700/50'}`}>
                  {progress.git >= 100 ? 'Completed' : 'Intermediate'}
                </span>
              ) : (
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Locked</span>
              )}
            </div>
            {progress.git > 0 ? (
              <div className="pl-11">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Side Quest</span>
                  <span className={`font-bold ${progress.git >= 100 ? 'text-green-400' : 'text-orange-400'}`}>{progress.git}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2 shadow-inner">
                  <div className={`${progress.git >= 100 ? 'bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]'} h-1.5 rounded-full transition-all`} style={{ width: `${progress.git}%` }}></div>
                </div>
                <div className="text-xs text-orange-200/80 bg-orange-900/30 px-2 py-1 rounded-md border border-orange-700/50 flex items-center">
                  <span className="mr-1">🐙</span> Reward: Version Control
                </div>
              </div>
            ) : (
              <div className="pl-11 mt-1 text-xs text-gray-500 italic">
                🔒 Goal: Reach 100% in JS to unlock
              </div>
            )}
          </div>

          {/* MySQL Node */}
          <div className="relative">
            <div className={`flex items-center justify-between mb-2 ${progress.mysql === 0 ? 'opacity-70' : ''}`}>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${progress.mysql > 0 ? (progress.mysql >= 100 ? 'bg-green-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]' : 'bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]') : 'bg-gray-800 border border-gray-600'}`}>
                  {progress.mysql > 0 ? <span className="text-xs font-bold text-white">SQL</span> : <Lock size={14} className="text-gray-400" />}
                </div>
                <span className={`font-bold ${progress.mysql > 0 ? 'text-lg text-white' : 'text-gray-300'}`}>MySQL DB</span>
              </div>
              {progress.mysql > 0 ? (
                <span className={`text-xs px-2 py-0.5 rounded-full border font-bold ${progress.mysql >= 100 ? 'bg-green-900/50 text-green-300 border-green-700/50' : 'bg-cyan-900/50 text-cyan-300 border-cyan-700/50'}`}>
                  {progress.mysql >= 100 ? 'Completed' : 'Database'}
                </span>
              ) : (
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Locked</span>
              )}
            </div>
            {progress.mysql > 0 ? (
              <div className="pl-11">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Final Quest</span>
                  <span className={`font-bold ${progress.mysql >= 100 ? 'text-green-400' : 'text-cyan-400'}`}>{progress.mysql}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2 shadow-inner">
                  <div className={`${progress.mysql >= 100 ? 'bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]'} h-1.5 rounded-full transition-all`} style={{ width: `${progress.mysql}%` }}></div>
                </div>
                <div className="text-xs text-cyan-200/80 bg-cyan-900/30 px-2 py-1 rounded-md border border-cyan-700/50 flex items-center">
                  <span className="mr-1">🗄️</span> Reward: Database Guru
                </div>
              </div>
            ) : (
              <div className="pl-11 mt-1 text-xs text-gray-500 italic">
                🔒 Goal: Complete Git to unlock
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700/50 pt-6">
          <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">🎯 Your Learning Mission</h3>
          
          {(() => {
            const { completedLessons } = useStore();
            let nextMission = null;
            let courseName = "";
            let progressPercent = 0;
            let courseId = "";
            let lessonIndex = 0;
            
            const jsNextIdx = javascriptCourse.findIndex((l: any) => !completedLessons.includes(l.id));
            if (jsNextIdx !== -1) {
              nextMission = javascriptCourse[jsNextIdx];
              courseName = "JavaScript";
              progressPercent = progress.javascript;
              courseId = "javascript";
              lessonIndex = jsNextIdx + 1;
            } else {
              const gitNextIdx = gitCourse.findIndex((l: any) => !completedLessons.includes(l.id));
              if (gitNextIdx !== -1) {
                nextMission = gitCourse[gitNextIdx];
                courseName = "Git / GitHub";
                progressPercent = progress.git;
                courseId = "git";
                lessonIndex = gitNextIdx + 1;
              } else {
                const sqlNextIdx = mysqlCourse.findIndex((l: any) => !completedLessons.includes(l.id));
                if (sqlNextIdx !== -1) {
                  nextMission = mysqlCourse[sqlNextIdx];
                  courseName = "MySQL DB";
                  progressPercent = progress.mysql;
                  courseId = "mysql";
                  lessonIndex = sqlNextIdx + 1;
                }
              }
            }

            if (!nextMission) {
              return (
                <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-4 text-center">
                  <div className="text-green-400 font-bold mb-2">🎉 All Missions Completed!</div>
                  <Link href="/profile" className="block w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-lg transition-colors">
                    View Profile
                  </Link>
                </div>
              );
            }

            const hasStarted = progress.javascript > 0 || progress.git > 0 || progress.mysql > 0;
            const extraClasses = !hasStarted ? "animate-pulse ring-4 ring-blue-500/50 scale-105" : "";
            const btnText = !hasStarted ? "🚀 เริ่มต้นเรียนรู้ (Start Learning)" : "Start Learning";

            return (
              <div className="bg-gray-800/80 border border-gray-600 rounded-xl p-4">
                <div className="flex items-center space-x-2 text-sm text-blue-400 font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                  <span>CURRENT</span>
                </div>
                <div className="font-bold text-lg text-white mb-1">{lessonIndex}. {nextMission.title}</div>
                <div className="text-sm text-gray-400 mb-4 line-clamp-2">{nextMission.description}</div>
                
                <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                  <span>{progressPercent}% Complete</span>
                  <span>Lesson {lessonIndex}</span>
                </div>
                
                <Link 
                  href={`/courses/${courseId}/${nextMission.id}`} 
                  className={`mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] ${extraClasses}`}
                >
                  {btnText} <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            );
          })()}
        </div>
      </div>

      {/* HUD: Bottom Controls Hint (Desktop Only) */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-full px-8 py-3 text-sm text-gray-300 items-center space-x-6 shadow-xl">
        <div className="flex items-center"><span className="text-white font-bold mr-2">🖱️</span> Click a building to enter</div>
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        <div className="flex items-center"><span className="text-white font-bold mr-2">🎯</span> Drag to explore</div>
      </div>

      {/* Mobile Course List (Mobile Only) */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20 bg-gray-950/90 backdrop-blur-lg border-t border-gray-800 p-4 rounded-t-3xl">
        <h3 className="text-sm font-bold text-gray-400 mb-3 ml-2 uppercase tracking-wider">Missions</h3>
        <div className="flex space-x-4 overflow-x-auto pb-4 px-2 custom-scrollbar snap-x">
          {/* JS Mobile Card */}
          <Link href="/courses/javascript" className="flex-shrink-0 w-64 bg-gray-900 border border-gray-700 rounded-2xl p-4 snap-center">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">JS</div>
              <div className="font-bold">JavaScript</div>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2"><div className="bg-blue-500 h-1.5 rounded-full" style={{width: `${progress.javascript}%`}}></div></div>
            <div className="text-xs text-gray-400">Main Quest • Lv. 1</div>
          </Link>
          
          {/* Git Mobile Card */}
          <Link href={progress.git > 0 ? "/courses/git" : "#"} className={`flex-shrink-0 w-64 bg-gray-900 border border-gray-700 rounded-2xl p-4 snap-center ${progress.git === 0 ? 'opacity-60 cursor-not-allowed' : ''}`}>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold text-white"><span className="mr-0.5">🐙</span></div>
              <div className="font-bold">Git / GitHub</div>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2"><div className="bg-orange-500 h-1.5 rounded-full" style={{width: `${progress.git}%`}}></div></div>
            <div className="text-xs text-gray-400">{progress.git > 0 ? 'Side Quest • Lv. 2' : '🔒 Locked (Complete JS)'}</div>
          </Link>

          {/* MySQL Mobile Card */}
          <Link href={progress.mysql > 0 ? "/courses/mysql" : "#"} className={`flex-shrink-0 w-64 bg-gray-900 border border-gray-700 rounded-2xl p-4 snap-center ${progress.mysql === 0 ? 'opacity-60 cursor-not-allowed' : ''}`}>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold text-white"><span className="mr-0.5">🗄️</span></div>
              <div className="font-bold">MySQL</div>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2"><div className="bg-cyan-500 h-1.5 rounded-full" style={{width: `${progress.mysql}%`}}></div></div>
            <div className="text-xs text-gray-400">{progress.mysql > 0 ? 'Final Quest • Lv. 3' : '🔒 Locked (Complete Git)'}</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
