import Link from 'next/link';

interface Props {
  id: number;
  title: string;
  level: string;
  lessons: number;
}

export default function CourseCard({ id, title, level, lessons }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-3">Level: {level}</p>
      <p className="text-sm text-gray-500 mb-4">{lessons} Lessons</p>
      <Link
        href={`/course/${id}`}
        className="text-blue-600 font-medium hover:underline"
      >
        View Course →
      </Link>
    </div>
  );
}
