
'use client';

interface StreakCounterProps {
  streak: number;
  xp: number;
}

export default function StreakCounter({ streak, xp }: StreakCounterProps) {
  return (
    <div className="flex items-center space-x-6">
      {/* XP Counter */}
      <div className="text-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Total XP</p>
            <p className="text-xl font-bold text-gray-900">{xp}</p>
          </div>
        </div>
      </div>

      {/* Streak Counter */}
      <div className="text-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Day Streak</p>
            <p className="text-xl font-bold text-gray-900">{streak}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
