// components/progress.tsx
import * as React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className = '' }: ProgressProps) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="bg-purple-600 h-2 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}