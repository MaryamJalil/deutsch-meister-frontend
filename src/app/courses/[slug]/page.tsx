'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_COURSE_BY_LEVEL } from '@/lib/queries';
import { CourseData } from '@/types';
import Loading from '@/components/ui/Loading';
import ErrorDisplay from '@/components/ui/ErrorDisplay';

interface CourseVars {
  slug: string;
}

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const { data, loading, error, refetch } = useQuery<CourseData, CourseVars>(GET_COURSE_BY_LEVEL, {
    variables: { slug },
  });

  if (loading) {
    return <Loading message="Loading course..." />;
  }

  if (error || !data?.courseByLevel) {
    return (
      <ErrorDisplay
        message={error?.message || 'Course not found'}
        title="Course not found"
        onRetry={() => refetch()}
      />
    );
  }

  const course = data.courseByLevel;
  const lessons = course.lessons ?? [];

  // Fake XP & completion
  const completedLessons = Math.floor(lessons.length / 2);
  const totalLessons = lessons.length;
  const progress = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const handleLessonComplete = (lessonId: number, xp: number) => {
    setSelectedLesson(null);
    // TODO: Implement actual lesson completion logic with backend
    console.log(`Lesson ${lessonId} completed! +${xp} XP earned!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {course.level.title} - {course.title}
              </h1>
              <p className="text-gray-600">
                Start your journey with structured lessons.
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{progress}%</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{completedLessons} of {totalLessons} lessons completed</span>
            <span>{completedLessons * 10} XP earned</span>
          </div>
        </div>

        {/* Lessons List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Lessons</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-100 text-purple-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{lesson.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Lesson {lesson.order}</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                          +10 XP
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedLesson(lesson.id)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Start Lesson
                  </button>
                </div>

                {selectedLesson === lesson.id && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{lesson.title}</h4>
                      <button
                        onClick={() => setSelectedLesson(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-gray-700">{lesson.content || 'Lesson content will appear here.'}</p>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => handleLessonComplete(lesson.id, 10)}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        Complete Lesson
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
