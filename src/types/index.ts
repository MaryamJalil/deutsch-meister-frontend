// Shared types across the application

export interface User {
  id: number;
  name: string;
  email: string;
  currentLevel?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  hours: number;
  lessonCount: number;
  features: string[];
  level: Level;
}

export interface Level {
  slug: string;
  title: string;
}

export interface Lesson {
  id: number;
  title: string;
  content: string;
  order: number;
}

export interface CourseData {
  courseByLevel: {
    id: number;
    title: string;
    level: Level;
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

