// types/index.ts - Fixed version
// Shared types across the application

export interface User {
  id: number;
  name: string;
  email: string;
  currentLevel?: string;
}

export interface AudioFile {
  id: string;
  title: string;
  fileName: string;
  url: string;
  s3Key: string;
  duration: string;
  order: number;
  description?: string;
  signedUrl?: string; // Will be populated client-side
}

export interface CourseLevel {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface Lesson {
  id: number;
  title: string;
  order: number;
  content?: string;
  audioFiles: AudioFile[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  hours: number;
  lessonCount: number;
  features: string[];
  level: CourseLevel;
  lessons: Lesson[];
}

export interface CourseData {
  courseByLevel: {
    id: number;
    title: string;
    description: string;
    level: CourseLevel;
    lessons: Lesson[];
  } | null;
}

export interface FeaturedCourse {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  originalPrice: number;
  image: string;
  duration: string;
  level: string;
}