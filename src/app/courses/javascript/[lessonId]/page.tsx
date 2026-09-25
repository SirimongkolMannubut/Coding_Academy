import LessonClient from "./LessonClient";
import { javascriptCourse } from "@/data/javascript-course";

export async function generateStaticParams() {
  return javascriptCourse.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return <LessonClient lessonId={lessonId} />;
}
