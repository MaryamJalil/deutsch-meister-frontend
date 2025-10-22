import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="pt-32 pb-16 text-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
        Learn German the Smart Way
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Interactive lessons, AI pronunciation, and quizzes — become a Deutsch-Meister!
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/courses"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Browse Courses
        </Link>
        <Link
          href="/register"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
        >
          Get Started
        </Link>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-3 gap-8 px-4">
        {['Vocabulary', 'Grammar', 'Pronunciation'].map((feature) => (
          <div key={feature} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature}</h3>
            <p className="text-gray-600">Master your {feature.toLowerCase()} step-by-step.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
