
'use client';
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@/app/context/UserContext';

// Mock lessons data
const lessonsData = {
  a1: {
    title: 'German A1 - Beginner',
    description: 'Start your German journey with basic vocabulary and essential phrases for everyday situations.',
    lessons: [
      { id: 1, title: 'Basic Greetings', type: 'audio', duration: '10 min', completed: true, xp: 10 },
      { id: 2, title: 'Introducing Yourself', type: 'lesson', duration: '15 min', completed: true, xp: 15 },
      { id: 3, title: 'Numbers 1-20', type: 'audio', duration: '12 min', completed: true, xp: 12 },
      { id: 4, title: 'Common Phrases', type: 'lesson', duration: '18 min', completed: false, xp: 18 },
      { id: 5, title: 'Asking Questions', type: 'audio', duration: '14 min', completed: false, xp: 14 },
      { id: 6, title: 'Food and Drinks', type: 'lesson', duration: '20 min', completed: false, xp: 20 },
    ]
  },
  a2: {
    title: 'German A2 - Elementary',
    description: 'Build on your basics with more complex sentences and everyday conversation skills.',
    lessons: [
      { id: 1, title: 'Past Tense Introduction', type: 'lesson', duration: '20 min', completed: true, xp: 20 },
      { id: 2, title: 'Daily Routine', type: 'audio', duration: '15 min', completed: true, xp: 15 },
      { id: 3, title: 'Weather Vocabulary', type: 'lesson', duration: '18 min', completed: false, xp: 18 },
      { id: 4, title: 'Travel Phrases', type: 'audio', duration: '22 min', completed: false, xp: 22 },
    ]
  },
  b1: {
    title: 'German B1 - Intermediate',
    description: 'Express yourself more fluently and handle complex situations in German.',
    lessons: [
      { id: 1, title: 'Subjunctive Mood', type: 'lesson', duration: '25 min', completed: true, xp: 25 },
      { id: 2, title: 'Business German', type: 'audio', duration: '20 min', completed: false, xp: 20 },
      { id: 3, title: 'German Culture', type: 'lesson', duration: '30 min', completed: false, xp: 30 },
    ]
  }
};

export default function CoursePage() {
  const params = useParams();
  const level = params.level as string;
  const {  addXP } = useUser();
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const course = lessonsData[level as keyof typeof lessonsData];
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <Link href="/courses" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const totalLessons = course.lessons.length;
  const progress = Math.round((completedLessons / totalLessons) * 100);

  const handleLessonComplete = (lessonId: number, xp: number) => {
    // In a real app, you would make an API call here
    addXP(xp);
    // Mark lesson as completed in UI
    setSelectedLesson(null);
    alert(`Lesson completed! +${xp} XP earned!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-gray-600">{course.description}</p>
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
            <span>{course.lessons.reduce((acc, lesson) => acc + (lesson.completed ? lesson.xp : 0), 0)} XP earned</span>
          </div>
        </div>

        {/* Lessons List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Lessons</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {course.lessons.map((lesson) => (
              <div key={lesson.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      lesson.completed 
                        ? 'bg-green-100 text-green-600' 
                        : lesson.type === 'audio'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-purple-100 text-purple-600'
                    }`}>
                      {lesson.completed ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : lesson.type === 'audio' ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m-2.828-9.9a9 9 0 012.728-2.728" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{lesson.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{lesson.duration}</span>
                        </span>
                        <span className="capitalize">{lesson.type} lesson</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                          +{lesson.xp} XP
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    {lesson.completed ? (
                      <span className="bg-green-100 text-green-800 px-3 py-2 rounded-lg font-medium">
                        Completed
                      </span>
                    ) : (
                      <button
                        onClick={() => setSelectedLesson(lesson.id)}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                      >
                        Start Lesson
                      </button>
                    )}
                  </div>
                </div>

                {/* Lesson Content */}
                {selectedLesson === lesson.id && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{lesson.title}</h4>
                      <button
                        onClick={() => setSelectedLesson(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {lesson.type === 'audio' ? (
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-2">Listen and Repeat</h5>
                          <div className="flex items-center space-x-4">
                            <button className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </button>
                            <div className="flex-1">
                              <div className="text-sm text-gray-600 mb-1">Play the audio and repeat the phrases</div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full w-1/2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-2">Vocabulary</h5>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                              <span>Hallo</span>
                              <span className="text-gray-500">Hello</span>
                            </div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                              <span>Danke</span>
                              <span className="text-gray-500">Thank you</span>
                            </div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                              <span>Bitte</span>
                              <span className="text-gray-500">Please</span>
                            </div>
                            <div className="flex justify-between p-2 bg-gray-50 rounded">
                              <span>Tschüss</span>
                              <span className="text-gray-500">Goodbye</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-2">Grammar Focus</h5>
                          <p className="text-gray-700">
                            Learn how to properly greet people in different situations and times of day.
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-2">Practice Exercise</h5>
                          <div className="space-y-3">
                            <p className="text-sm text-gray-600">How do you say "Good morning" in German?</p>
                            <div className="grid grid-cols-2 gap-2">
                              <button className="p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50">
                                Guten Morgen
                              </button>
                              <button className="p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50">
                                Guten Tag
                              </button>
                              <button className="p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50">
                                Guten Abend
                              </button>
                              <button className="p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50">
                                Gute Nacht
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => handleLessonComplete(lesson.id, lesson.xp)}
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
