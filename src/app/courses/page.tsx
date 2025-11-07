'use client';

import Link from 'next/link';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

// Define TypeScript interfaces
interface Level {
  slug: string;
  title: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  hours: number;
  lessonCount: number;
  features: string[];
  level: Level;
}

const GET_COURSES = gql`
  query courses {
    courses {
      id
      title
      description
      hours
      lessonCount
      features
      level {
        slug
        title
      }
    }
  }
`;

// Color mapping for levels
const levelColors: { [key: string]: { bg: string; badge: string } } = {
  'A1': { bg: 'from-green-500 to-emerald-500', badge: 'bg-green-100 text-green-800' },
  'A2': { bg: 'from-blue-500 to-cyan-500', badge: 'bg-blue-100 text-blue-800' },
  'B1': { bg: 'from-purple-500 to-indigo-500', badge: 'bg-purple-100 text-purple-800' },
  'B2': { bg: 'from-orange-500 to-red-500', badge: 'bg-orange-100 text-orange-800' },
  'C1': { bg: 'from-pink-500 to-rose-500', badge: 'bg-pink-100 text-pink-800' },
  'C2': { bg: 'from-red-500 to-pink-500', badge: 'bg-red-100 text-red-800' },
  'default': { bg: 'from-teal-500 to-blue-500', badge: 'bg-teal-100 text-teal-800' }
};

// CEFR levels data for the guide
const cefrLevels = [
  { level: 'A1', title: 'Beginner' },
  { level: 'A2', title: 'Elementary' },
  { level: 'B1', title: 'Intermediate' },
  { level: 'B2', title: 'Upper Intermediate' },
  { level: 'C1', title: 'Advanced' },
  { level: 'C2', title: 'Proficient' }
];

// Define the response type for the GraphQL query
interface CoursesResponse {
  courses: Course[];
}

export default function CoursesPage() {
  const { loading, error, data } = useQuery<CoursesResponse>(GET_COURSES);
  
  if (loading) return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-pulse">Loading courses...</div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-red-600">
          Error loading courses: {error.message}
        </div>
      </div>
    </div>
  );

  const courses = data?.courses || [];
  debugger;
console.log(courses,'courses')
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your German Course
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey to German fluency with our structured courses designed for all levels, 
            from complete beginner to advanced speaker.
          </p>
        </div>

        {/* CEFR Level Guide */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">CEFR Levels Guide</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cefrLevels.map(({ level, title }) => (
              <div key={level} className="text-center p-4 border border-gray-200 rounded-lg">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  level === 'A1' ? 'bg-green-100 text-green-600' :
                  level === 'A2' ? 'bg-blue-100 text-blue-600' :
                  level === 'B1' ? 'bg-purple-100 text-purple-600' :
                  level === 'B2' ? 'bg-orange-100 text-orange-600' :
                  level === 'C1' ? 'bg-pink-100 text-pink-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  <span className="font-bold">{level}</span>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {
          courses.map((course: Course) => {
            const levelSlug = course.level.slug;
            const colors = levelColors[levelSlug] || levelColors.default;
            
            return (
              <div key={course.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-3 bg-gradient-to-r ${colors.bg}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors.badge}`}>
                      {levelSlug}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="space-y-2 mb-6">
                    {/* {course.features.slice(0, 3).map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))} */}
                    {/* {course.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{course.features.length - 3} more features
                      </div>
                    )} */}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.hours} hours
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {course.lessonCount} lessons
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors block text-center"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* If no courses found */}
        {courses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No courses available yet</div>
            <Link
              href="/"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Return to homepage
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}