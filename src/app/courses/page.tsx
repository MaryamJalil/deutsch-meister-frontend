
import Link from 'next/link';

const courses = [
  {
    id: 'a1',
    title: 'German A1 - Beginner',
    level: 'A1',
    description: 'Start with basic vocabulary and essential phrases for everyday situations.',
    lessons: 20,
    duration: '15 hours',
    students: 15420,
    color: 'from-green-500 to-emerald-500',
    features: ['Basic greetings', 'Numbers 1-100', 'Everyday phrases', 'Simple questions']
  },
  {
    id: 'a2',
    title: 'German A2 - Elementary',
    level: 'A2',
    description: 'Build on your basics with more complex sentences and conversation skills.',
    lessons: 25,
    duration: '20 hours',
    students: 8923,
    color: 'from-blue-500 to-cyan-500',
    features: ['Past tense', 'Daily routines', 'Travel vocabulary', 'Social situations']
  },
  {
    id: 'b1',
    title: 'German B1 - Intermediate',
    level: 'B1',
    description: 'Express yourself more fluently and handle complex situations in German.',
    lessons: 30,
    duration: '25 hours',
    students: 5421,
    color: 'from-purple-500 to-indigo-500',
    features: ['Business German', 'Complex grammar', 'Cultural topics', 'Professional situations']
  },
  {
    id: 'b2',
    title: 'German B2 - Upper Intermediate',
    level: 'B2',
    description: 'Achieve fluency with advanced vocabulary and complex grammatical structures.',
    lessons: 35,
    duration: '30 hours',
    students: 3215,
    color: 'from-orange-500 to-red-500',
    features: ['Academic German', 'Debate skills', 'Advanced writing', 'Media analysis']
  },
  {
    id: 'c1',
    title: 'German C1 - Advanced',
    level: 'C1',
    description: 'Master the language with near-native proficiency and specialized vocabulary.',
    lessons: 40,
    duration: '35 hours',
    students: 1876,
    color: 'from-pink-500 to-rose-500',
    features: ['Literature analysis', 'Technical German', 'Public speaking', 'Professional writing']
  },
  {
    id: 'audio',
    title: 'Audio Immersion Course',
    level: 'All Levels',
    description: 'Improve your listening and speaking skills with focused audio practice.',
    lessons: 50,
    duration: '40 hours',
    students: 23456,
    color: 'from-teal-500 to-blue-500',
    features: ['Pronunciation practice', 'Listening comprehension', 'Conversation skills', 'Accent reduction']
  }
];

export default function CoursesPage() {
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
            {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => (
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
                  {level === 'A1' ? 'Beginner' :
                   level === 'A2' ? 'Elementary' :
                   level === 'B1' ? 'Intermediate' :
                   level === 'B2' ? 'Upper Intermediate' :
                   level === 'C1' ? 'Advanced' : 'Proficient'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className={`h-3 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    course.level === 'A1' ? 'bg-green-100 text-green-800' :
                    course.level === 'A2' ? 'bg-blue-100 text-blue-800' :
                    course.level === 'B1' ? 'bg-purple-100 text-purple-800' :
                    course.level === 'B2' ? 'bg-orange-100 text-orange-800' :
                    course.level === 'C1' ? 'bg-pink-100 text-pink-800' :
                    'bg-teal-100 text-teal-800'
                  }`}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="space-y-2 mb-6">
                  {course.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                  {course.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{course.features.length - 3} more features
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {course.lessons} lessons
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
          ))}
        </div>
      </div>
    </div>
  );
}
