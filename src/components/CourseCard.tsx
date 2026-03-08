import { Link } from 'react-router-dom';
import { Course } from '../types';
import { User } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link 
      to={`/course/${course.id}`}
      className="card card-hover block group relative"
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="inline-flex items-center text-white text-sm font-medium drop-shadow-md">
              Xem chi tiết <span className="ml-1">&rarr;</span>
            </span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 line-clamp-2">
          {course.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium pt-4 border-t border-slate-100">
          <div className="p-1 bg-slate-100 rounded-full border border-slate-200">
            <User className="w-3 h-3 text-slate-500" />
          </div>
          <span>GV: {course.instructor}</span>
        </div>
      </div>
    </Link>
  );
}
