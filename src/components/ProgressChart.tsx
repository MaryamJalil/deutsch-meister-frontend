
'use client';

export default function ProgressChart() {
  // Mock data for the chart
  const progressData = [
    { day: 'Mon', lessons: 3 },
    { day: 'Tue', lessons: 5 },
    { day: 'Wed', lessons: 2 },
    { day: 'Thu', lessons: 4 },
    { day: 'Fri', lessons: 6 },
    { day: 'Sat', lessons: 1 },
    { day: 'Sun', lessons: 0 },
  ];

  const maxLessons = Math.max(...progressData.map(d => d.lessons));

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between h-32">
        {progressData.map((data, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex flex-col items-center justify-end h-24">
              <div
                className="bg-purple-500 rounded-t-lg w-6 transition-all duration-500 hover:bg-purple-600"
                style={{ height: `${(data.lessons / maxLessons) * 80}%` }}
              ></div>
            </div>
            <span className="text-xs font-medium text-gray-600">{data.day}</span>
            <span className="text-xs text-gray-500">{data.lessons} lessons</span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <span className="font-medium">This week:</span> 21 lessons completed
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Goal:</span> 25 lessons
        </div>
      </div>
    </div>
  );
}
