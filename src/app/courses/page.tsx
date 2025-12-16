// app/courses/page.tsx
import Link from 'next/link';

const LEVELS = [
  {
    slug: 'a1',
    title: 'A1 Beginner',
    description: 'Learn basic phrases, greetings, and everyday expressions',
    color: 'bg-blue-50 border-blue-200 hover:border-blue-300',
    textColor: 'text-blue-700',
    icon: '🇩🇪'
  },
  {
    slug: 'a2',
    title: 'A2 Elementary',
    description: 'Communicate in simple routine tasks',
    color: 'bg-green-50 border-green-200 hover:border-green-300',
    textColor: 'text-green-700',
    icon: '📚'
  },
  {
    slug: 'b1',
    title: 'B1 Intermediate',
    description: 'Understand main points of clear standard input',
    color: 'bg-yellow-50 border-yellow-200 hover:border-yellow-300',
    textColor: 'text-yellow-700',
    icon: '🗣️'
  },
  {
    slug: 'b2',
    title: 'B2 Upper Intermediate',
    description: 'Interact with fluency and spontaneity',
    color: 'bg-orange-50 border-orange-200 hover:border-orange-300',
    textColor: 'text-orange-700',
    icon: '🎓'
  },
  {
    slug: 'c1',
    title: 'C1 Advanced',
    description: 'Understand a wide range of demanding texts',
    color: 'bg-red-50 border-red-200 hover:border-red-300',
    textColor: 'text-red-700',
    icon: '🏆'
  },
  {
    slug: 'c2',
    title: 'C2 Proficient',
    description: 'Understand with ease virtually everything',
    color: 'bg-purple-50 border-purple-200 hover:border-purple-300',
    textColor: 'text-purple-700',
    icon: '🌟'
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your German Course
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your journey to German fluency with our structured courses designed for all levels, from complete beginner to advanced speaker.
          </p>
        </div>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-lg font-semibold text-gray-900">
              CEFR Levels Guide
            </span>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LEVELS.map((level) => (
            <Link
              key={level.slug}
              href={`/courses/${level.slug}`}
              className={`block p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${level.color}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-2xl ${level.textColor}`}>
                  {level.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {level.title}
                    </h3>
                    <span className={`text-sm font-bold px-2 py-1 rounded ${level.textColor} bg-white`}>
                      {level.slug.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {level.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    Click to view audio lessons →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Begin with A1 if you're new to German, or take our placement test to find your level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses/a1"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Start with A1 Beginner
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/placement-test"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Take Placement Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}