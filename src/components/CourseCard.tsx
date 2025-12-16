import { FeaturedCourse } from '@/types';

// Remove the empty interface and use type directly
type CourseCardProps = FeaturedCourse;

export default function CourseCard({
  title,
  instructor,
  rating,
  students,
  price,
  originalPrice,
  duration,
  level,
  image,
  id // Added to avoid unused variable warning
}: CourseCardProps) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Course Image */}
      <div 
        className="h-48 relative bg-cover bg-center"
        style={{ 
          backgroundImage: image ? `url(${image})` : 'linear-gradient(to bottom right, #8b5cf6, #3b82f6)',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
        <div className="absolute top-3 left-3">
          <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
            Bestseller
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 h-14">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2">{instructor}</p>
        
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-yellow-600 font-bold text-sm">{rating.toFixed(1)}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 text-sm">({students.toLocaleString()})</span>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <span>{duration}</span>
          <span>•</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">{level}</span>
        </div>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-gray-900 font-bold text-lg">${price.toFixed(2)}</span>
          {originalPrice > price && (
            <>
              <span className="text-gray-500 line-through text-sm">${originalPrice.toFixed(2)}</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-1 rounded">
                {discount}% off
              </span>
            </>
          )}
        </div>

        <button className="w-full bg-purple-600 text-white py-2 rounded font-medium hover:bg-purple-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}