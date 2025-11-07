'use client';
import { gql } from '@apollo/client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';

// 🧠 Define GraphQL query
const GET_COURSE_BY_ID = gql`
  query GetCourseById($id: Int!) {
    courseById(id: $id) {
      id
      title
      level {
        title
      }
      lessons {
        id
        title
        order
      }
    }
  }
`;


// ✅ Define TypeScript types for query result and variables
interface Lesson {
  id: number;
  title: string;
  order: number;
}

interface Level {
  title: string;
}

interface Course {
  id: number;
  title: string;
  level: Level;
  lessons: Lesson[];
}

interface GetCourseByIdData {
  courseById: Course;
}

interface GetCourseByIdVars {
  id: number;
}

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = parseInt(params.id as string, 10);

  const { data, loading, error } = useQuery<GetCourseByIdData, GetCourseByIdVars>(
    GET_COURSE_BY_ID,
    {
      variables: { id: courseId },
      skip: isNaN(courseId), // ✅ prevents running query before ID is parsed
    }
  );

  if (loading) return <p>Loading course...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.courseById) return <p>No course found.</p>;

  const { courseById } = data;

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{courseById.title}</h1>
      <p className="text-gray-600 mb-6">Level: {courseById.level?.title}</p>

      <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
      <ul className="space-y-3">
        {courseById.lessons.map((lesson) => (
          <li
            key={lesson.id}
            className="border p-3 rounded hover:bg-gray-50 transition"
          >
            <Link
              href={`/lessons/${lesson.id}`}
              className="text-blue-600 hover:underline"
            >
              {lesson.order}. {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
