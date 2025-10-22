import CourseCard from '@/components/CourseCard';

const mockCourses = [
  { id: 1, title: 'German for Beginners', level: 'A1', lessons: 20 },
  { id: 2, title: 'Intermediate Grammar', level: 'B1', lessons: 25 },
  { id: 3, title: 'Pronunciation Masterclass', level: 'All Levels', lessons: 15 },
];

export default function CoursesPage() {
  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">All Courses</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
