// Application constants

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/graphql';

export const CEFR_LEVELS = [
  { level: 'A1', title: 'Beginner' },
  { level: 'A2', title: 'Elementary' },
  { level: 'B1', title: 'Intermediate' },
  { level: 'B2', title: 'Upper Intermediate' },
  { level: 'C1', title: 'Advanced' },
  { level: 'C2', title: 'Proficient' },
] as const;

export const LEVEL_COLORS: Record<string, { bg: string; badge: string }> = {
  'A1': { bg: 'from-green-500 to-emerald-500', badge: 'bg-green-100 text-green-800' },
  'A2': { bg: 'from-blue-500 to-cyan-500', badge: 'bg-blue-100 text-blue-800' },
  'B1': { bg: 'from-purple-500 to-indigo-500', badge: 'bg-purple-100 text-purple-800' },
  'B2': { bg: 'from-orange-500 to-red-500', badge: 'bg-orange-100 text-orange-800' },
  'C1': { bg: 'from-pink-500 to-rose-500', badge: 'bg-pink-100 text-pink-800' },
  'C2': { bg: 'from-red-500 to-pink-500', badge: 'bg-red-100 text-red-800' },
  'default': { bg: 'from-teal-500 to-blue-500', badge: 'bg-teal-100 text-teal-800' },
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
} as const;

