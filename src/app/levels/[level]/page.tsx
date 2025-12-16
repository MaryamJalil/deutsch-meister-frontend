'use client';

import { useParams } from 'next/navigation';
import { GET_AUDIO_LESSONS_BY_LEVEL } from '@/lib/queries';
import { useQuery } from '@apollo/client/react';

// Define types for the data
interface AudioLesson {
  id: string;
  title: string;
  duration: string; // Changed from number to string based on your backend
  audioUrl: string;
}

interface AudioLessonsResponse {
  audioLessonsByLevel: AudioLesson[];
}

interface AudioLessonsVariables {
  level: string;
}

export default function AudioLessonsPage() {
  const { level } = useParams();
  const levelStr = level as string;

  const { data, loading, error } = useQuery<AudioLessonsResponse, AudioLessonsVariables>(
    GET_AUDIO_LESSONS_BY_LEVEL,
    { 
      variables: { level: levelStr },
      skip: !levelStr 
    }
  );

  if (loading) return <p className="p-8">Loading audio lessons...</p>;
  if (error) return <p className="p-8 text-red-500">Error: {error.message}</p>;

  // Now TypeScript knows the structure of data
  const audioLessons = data?.audioLessonsByLevel || [];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        {levelStr.toUpperCase()} Audio Lessons
      </h1>

      {audioLessons.length === 0 && (
        <p className="text-gray-500">No audio lessons available.</p>
      )}

      <div className="space-y-4">
        {audioLessons.map((lesson: AudioLesson) => (
          <div
            key={lesson.id}
            className="bg-white border rounded-xl p-5 shadow-sm"
          >
            <h3 className="font-semibold text-lg">{lesson.title}</h3>
            <p className="text-sm text-gray-500">
              Duration: {lesson.duration}
            </p>

            <audio controls className="w-full mt-3">
              <source src={lesson.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}