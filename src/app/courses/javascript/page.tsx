"use client";

import { javascriptCourse } from "@/data/javascript-course";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { CheckCircle, Lock, Play } from "lucide-react";

export default function JavascriptCourse() {
  const { completedLessons, progress } = useStore();

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">JavaScript Course</h1>
        <p className="text-gray-400 text-lg">เรียนรู้การเขียนโปรแกรมด้วยภาษาที่ได้รับความนิยมที่สุดในโลก</p>
        
        <div className="mt-6 bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-end mb-2">
            <div>
              <div className="text-sm text-gray-400 mb-1">ความคืบหน้า</div>
              <div className="text-2xl font-bold">{progress.javascript}%</div>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div className="bg-yellow-400 h-3 rounded-full transition-all" style={{ width: `${progress.javascript}%` }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">LEVEL 1 — Beginner</h2>
        
        {javascriptCourse.map((lesson, index) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isLocked = index > 0 && !completedLessons.includes(javascriptCourse[index - 1].id);

          return (
            <div 
              key={lesson.id} 
              className={`flex items-center justify-between p-6 rounded-xl border ${
                isLocked 
                  ? 'bg-gray-900/50 border-gray-800 opacity-60' 
                  : isCompleted
                    ? 'bg-green-900/20 border-green-900'
                    : 'bg-gray-900 border-gray-700 hover:border-yellow-500 transition-colors'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isCompleted ? 'bg-green-600' : isLocked ? 'bg-gray-800' : 'bg-yellow-500 text-gray-900'
                }`}>
                  {isCompleted ? <CheckCircle size={20} /> : isLocked ? <Lock size={20} /> : <Play size={20} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{lesson.title}</h3>
                  <p className="text-gray-400">{lesson.description}</p>
                </div>
              </div>
              
              {!isLocked && (
                <Link 
                  href={`/courses/javascript/${lesson.id}`}
                  className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                    isCompleted ? 'bg-gray-800 hover:bg-gray-700' : 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
                  }`}
                >
                  {isCompleted ? 'ทบทวน' : 'เริ่มเรียน'}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
