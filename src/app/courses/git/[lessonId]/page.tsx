import GitLessonClient from "./GitLessonClient";
import { gitCourse } from "@/data/git-course";

export async function generateStaticParams() {
  return gitCourse.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return <GitLessonClient lessonId={lessonId} />;
}
