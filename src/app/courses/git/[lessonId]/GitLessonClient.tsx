"use client";

import { useState } from 'react';
import { gitCourse } from '@/data/git-course';
import { useStore } from '@/lib/store';
import Editor from '@monaco-editor/react';
import { Play, HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function GitLessonClient({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const lessonIndex = gitCourse.findIndex(l => l.id === lessonId);
  const lesson = gitCourse[lessonIndex];
  
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
    
    // Simulate Terminal Execution for Git
    setOutput([`$ ${code}`]);
    
    if (lesson.validationRegex && lesson.validationRegex.test(code)) {
      if (lesson.expectedOutput) {
         setOutput(prev => [...prev, ...lesson.expectedOutput!.split('\\n')]);
      }
      setIsSuccess(true);
      
      if (!isAlreadyCompleted) {
        addXp(lesson.xpReward);
        const progress = Math.round(((lessonIndex + 1) / gitCourse.length) * 100);
        completeLesson(lesson.id, 'git', progress);
      }
    } else {
      setOutput(prev => [...prev, "❌ คำสั่งยังไม่ถูกต้อง ลองอ่านโจทย์และคำใบ้อีกครั้งนะครับ!"]);
    }
  };

  return (
    <main className="flex-1 flex h-[calc(100vh-4rem)] overflow-hidden">
      <div className="w-1/2 bg-gray-950 p-8 overflow-y-auto border-r border-gray-800 custom-scrollbar">
        <div className="prose prose-invert prose-green max-w-none prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800">
          <ReactMarkdown>{lesson.theory}</ReactMarkdown>
        </div>
        
        {!isSuccess && (
          <div className="mt-8 pt-6 border-t border-gray-800">
            <button 
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 font-bold transition-colors"
            >
              <Lightbulb size={20} />
              <span>{showHint ? "ซ่อนคำใบ้" : "💡 ขอคำใบ้หน่อย"}</span>
            </button>
            
            {showHint && (
              <div className="mt-4 p-4 bg-green-900/20 border border-green-700/50 rounded-lg text-green-200">
                <span className="font-bold block mb-1">คำใบ้:</span>
                {lesson.hint}
              </div>
            )}
          </div>
        )}
        
        {isSuccess && (
          <div className="mt-8 p-6 bg-green-900/20 border border-green-800 rounded-xl">
            <h3 className="text-xl font-bold text-green-400 flex items-center mb-4">
              <span className="text-2xl mr-2">✓</span> ถูกต้อง!
              {!isAlreadyCompleted && <span className="ml-4 text-sm bg-green-500 text-white px-2 py-1 rounded-full">+ {lesson.xpReward} XP</span>}
            </h3>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowWhy(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <HelpCircle size={18} />
                <span>WHY? ทำไมถึงใช้คำสั่งนี้</span>
              </button>
              
              {lessonIndex < gitCourse.length - 1 && (
                <button 
                  onClick={() => router.push(`/courses/git/${gitCourse[lessonIndex + 1].id}`)}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white hover:bg-green-400 rounded-lg transition-colors font-bold"
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
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-bold transition-colors text-white"
            >
              <Play size={18} />
              <span>RUN TERMINAL</span>
            </button>
          </div>
          <Editor
            height="100%"
            defaultLanguage="shell"
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
        
        <div className="h-1/3 p-4 overflow-y-auto font-mono text-sm bg-black text-green-400">
          <div className="text-gray-500 mb-2 border-b border-gray-800 pb-1">TERMINAL OUTPUT</div>
          {output.map((line, i) => (
            <div key={i} className={line.includes('Error') || line.includes('❌') ? 'text-red-400' : 'text-green-400'}>
              {line}
            </div>
          ))}
          {output.length === 0 && (
            <div className="text-gray-600 italic">ผลลัพธ์จะแสดงที่นี่เมื่อกด RUN TERMINAL</div>
          )}
        </div>
      </div>
    </main>
  );
}
