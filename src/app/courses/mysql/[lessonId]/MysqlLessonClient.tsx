"use client";

import { useState } from 'react';
import { mysqlCourse } from '@/data/mysql-course';
import { useStore } from '@/lib/store';
import Editor from '@monaco-editor/react';
import { Play, HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function MysqlLessonClient({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const lessonIndex = mysqlCourse.findIndex(l => l.id === lessonId);
  const lesson = mysqlCourse[lessonIndex];
  
  const { addXp, completeLesson, completedLessons } = useStore();
  
  const [code, setCode] = useState(lesson?.defaultCode || "");
  const [output, setOutput] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  if (!lesson) return <div>Lesson not found</div>;
  
  const isAlreadyCompleted = completedLessons.includes(lessonId);

  const runCode = () => {
    setOutput([]);
    setIsSuccess(false);
    
    // Simulate SQL Execution
    setOutput([`mysql> ${code}`]);
    
    if (lesson.validationRegex && lesson.validationRegex.test(code.replace(/\\n/g, " "))) {
      if (lesson.expectedOutput) {
         setOutput(prev => [...prev, ...lesson.expectedOutput!.split('\\n')]);
      }
      setIsSuccess(true);
      
      if (!isAlreadyCompleted) {
        addXp(lesson.xpReward);
        const progress = Math.round(((lessonIndex + 1) / mysqlCourse.length) * 100);
        completeLesson(lesson.id, 'mysql', progress);
      }
    } else {
      setOutput(prev => [...prev, "❌ SQL Syntax Error หรือ ดึงข้อมูลไม่ตรงกับโจทย์ ลองใหม่อีกครั้ง!"]);
    }
  };

  return (
    <main className="flex-1 flex h-[calc(100vh-4rem)] overflow-hidden">
      <div className="w-1/2 bg-gray-950 p-8 overflow-y-auto border-r border-gray-800 custom-scrollbar">
        <div className="prose prose-invert prose-blue max-w-none prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800">
          <ReactMarkdown>{lesson.theory}</ReactMarkdown>
        </div>
        
        {!isSuccess && (
          <div className="mt-8 pt-6 border-t border-gray-800">
            <button 
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-bold transition-colors"
            >
              <Lightbulb size={20} />
              <span>{showHint ? "ซ่อนคำใบ้" : "💡 ขอคำใบ้หน่อย"}</span>
            </button>
            
            {showHint && (
              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg text-blue-200">
                <span className="font-bold block mb-1">คำใบ้:</span>
                {lesson.hint}
              </div>
            )}
          </div>
        )}
        
        {isSuccess && (
          <div className="mt-8 p-6 bg-blue-900/20 border border-blue-800 rounded-xl">
            <h3 className="text-xl font-bold text-blue-400 flex items-center mb-4">
              <span className="text-2xl mr-2">✓</span> ถูกต้อง!
              {!isAlreadyCompleted && <span className="ml-4 text-sm bg-blue-500 text-white px-2 py-1 rounded-full">+ {lesson.xpReward} XP</span>}
            </h3>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowWhy(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <HelpCircle size={18} />
                <span>WHY? ทำไมถึงเขียนแบบนี้</span>
              </button>
              
              {lessonIndex < mysqlCourse.length - 1 && (
                <button 
                  onClick={() => router.push(`/courses/mysql/${mysqlCourse[lessonIndex + 1].id}`)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-lg transition-colors font-bold"
                >
                  <span>บทต่อไป</span>
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
            
            {showWhy && (
              <div className="mt-4 p-4 bg-gray-900 rounded-lg text-gray-300 prose prose-invert">
                <ReactMarkdown>{lesson.whyExplanation}</ReactMarkdown>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="w-1/2 flex flex-col bg-gray-900">
        <div className="h-2/3 border-b border-gray-800 relative">
          <div className="absolute top-0 right-0 z-10 p-4">
            <button 
              onClick={runCode}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-colors text-white"
            >
              <Play size={18} />
              <span>RUN QUERY</span>
            </button>
          </div>
          <Editor
            height="100%"
            defaultLanguage="sql"
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              padding: { top: 24 }
            }}
          />
        </div>
        
        <div className="h-1/3 p-4 overflow-y-auto font-mono text-sm bg-gray-950 text-blue-300">
          <div className="text-gray-500 mb-2 border-b border-gray-800 pb-1">DATABASE OUTPUT</div>
          {output.map((line, i) => (
            <div key={i} className={line.includes('Error') || line.includes('❌') ? 'text-red-400' : 'text-blue-300'}>
              {line}
            </div>
          ))}
          {output.length === 0 && (
            <div className="text-gray-600 italic">ผลลัพธ์จากฐานข้อมูลจะแสดงที่นี่เมื่อกด RUN QUERY</div>
          )}
        </div>
      </div>
    </main>
  );
}
