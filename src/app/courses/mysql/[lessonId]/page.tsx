import MysqlLessonClient from "./MysqlLessonClient";
import { mysqlCourse } from "@/data/mysql-course";

export async function generateStaticParams() {
  return mysqlCourse.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return <MysqlLessonClient lessonId={lessonId} />;
}
