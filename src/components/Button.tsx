import * as React from 'react';

export function Button({
  className,
  variant = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' }) {
  // Filter out false values and join classes properly
  const buttonClasses = [
    'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    variant === 'default' && 'bg-purple-600 text-white hover:bg-purple-700',
    variant === 'outline' && 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    className
  ]
    .filter(Boolean) // Remove false values
    .join(' '); // Join with spaces

  return (
    <button
      className={buttonClasses}
      {...props}
    />
  );
}