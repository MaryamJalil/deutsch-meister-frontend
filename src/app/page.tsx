
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';

const featuredCourses = [
  {
    id: 1,
    title: 'Complete German Course - Beginner to Advanced',
    instructor: 'Dr. Anna Schmidt',
    rating: 4.7,
    students: 15420,
    price: 84.99,
    originalPrice: 119.99,
    image: '/api/placeholder/300/200',
    duration: '32.5 hours',
    level: 'All Levels'
  },
  {
    id: 2,
    title: 'German Grammar Masterclass',
    instructor: 'Prof. Michael Weber',
    rating: 4.8,
    students: 8923,
    price: 64.99,
    originalPrice: 89.99,
    image: '/api/placeholder/300/200',
    duration: '18 hours',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Business German for Professionals',
    instructor: 'Sarah Klein',
    rating: 4.6,
    students: 5421,
    price: 74.99,
    originalPrice: 99.99,
    image: '/api/placeholder/300/200',
    duration: '24 hours',
    level: 'Advanced'
  },
  {
    id: 4,
    title: 'German Pronunciation Perfect',
    instructor: 'Thomas Müller',
    rating: 4.9,
    students: 12345,
    price: 54.99,
    originalPrice: 79.99,
    image: '/api/placeholder/300/200',
    duration: '15 hours',
    level: 'All Levels'
  }
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Learn German with courses designed by experts
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Start your journey to fluency with our interactive courses, real-world projects, and expert instruction.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/courses"
                className="bg-white text-purple-700 px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                href="/register"
                className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-purple-700 transition-colors"
              >
                Start Learning Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">A broad selection of courses</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose from over 50+ German language courses with new additions published every month
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn German Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why learn German with us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">From beginner to advanced levels with structured learning paths</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from native German speakers and certified language experts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Practice with quizzes, speaking exercises, and real-world projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
