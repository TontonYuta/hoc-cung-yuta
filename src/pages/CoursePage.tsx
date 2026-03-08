import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CourseDetail, Level, Lesson } from '../types';
import { courseService } from '../services/courseService';
import { Play, FileText, ChevronRight, Loader2, ArrowLeft, Menu, Download, ExternalLink, File, PenTool } from 'lucide-react';
import { AVATAR_URL } from '../constants';

export function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLevelId, setActiveLevelId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    courseService.getCourseDetail(id)
      .then(data => {
        setCourse(data);
        if (data.levels.length > 0) {
          setActiveLevelId(data.levels[0].id);
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-indigo-600" /></div>;
  if (error) return <div className="h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
  if (!course) return <div className="h-screen flex items-center justify-center">Course not found</div>;

  if (course.subCourses && course.subCourses.length > 0) {
    return (
      <div className="min-h-screen">
        {/* Header */}
        <header className="glass-panel border-b border-slate-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </Link>
              <h1 className="text-lg font-bold text-slate-900 truncate">{course.title}</h1>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-100 shadow-sm">
              <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.subCourses.map(subCourse => (
              <Link 
                key={subCourse.id}
                to={`/course/${subCourse.id}`}
                className="card card-hover block group relative"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={subCourse.thumbnail} 
                    alt={subCourse.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-flex items-center text-white text-sm font-medium drop-shadow-md">
                        Vào học ngay <span className="ml-1">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {subCourse.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                    {subCourse.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    );
  }

  const activeLevel = course.levels.find(l => l.id === activeLevelId);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-panel border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <h1 className="text-lg font-bold text-slate-900 truncate">{course.title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-100 shadow-sm hidden sm:block">
              <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <button 
              className="lg:hidden p-2 hover:bg-slate-100 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full flex items-start">
        {/* Sidebar - Levels */}
        <aside className={`
          fixed inset-y-0 left-0 z-10 w-64 glass-panel border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-[calc(100vh-64px)] lg:overflow-y-auto lg:bg-transparent lg:border-r lg:border-slate-200
          ${mobileMenuOpen ? 'translate-x-0 pt-16' : '-translate-x-full pt-0'}
        `}>
          <div className="p-4">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">Mục lục khóa học</h2>
            <nav className="space-y-1">
              {course.levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => {
                    setActiveLevelId(level.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                    activeLevelId === level.id 
                      ? 'nav-link-active' 
                      : 'nav-link'
                  }`}
                >
                  <span className="truncate">{level.title}</span>
                  {activeLevelId === level.id && <ChevronRight className="w-4 h-4 text-indigo-600" />}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-0 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full">
          {activeLevel ? (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="border-b border-slate-200 pb-5">
                <h2 className="text-2xl font-bold text-slate-900">{activeLevel.title}</h2>
                <p className="mt-2 text-slate-500">Chọn bài học bên dưới để bắt đầu.</p>
              </div>

              {activeLevel.groups.map((group, idx) => (
                <div key={idx} className="card">
                  <div className="bg-slate-50/80 px-6 py-3 border-b border-slate-200">
                    <h3 className="font-semibold text-slate-900">{group.title}</h3>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {group.lessons.map((lesson) => (
                      <LessonItem key={lesson.id} lesson={lesson} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              Chọn một chương từ menu bên trái để xem bài học.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function LessonItem({ lesson }: { lesson: Lesson }) {
  return (
    <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row gap-4 sm:items-start group/item">
      {/* Thumbnail */}
      <a 
        href={`https://www.youtube.com/watch?v=${lesson.youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group shrink-0 w-full sm:w-48 aspect-video rounded-lg overflow-hidden bg-slate-200 shadow-sm group-hover/item:shadow-md transition-all border border-slate-200"
      >
        <img 
          src={`https://img.youtube.com/vi/${lesson.youtubeId}/mqdefault.jpg`}
          alt={lesson.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-110 transition-all duration-300">
            <Play className="w-5 h-5 text-indigo-600 fill-current ml-1" />
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-bold text-slate-900 mb-1 group-hover/item:text-indigo-600 transition-colors">
          <a 
            href={`https://www.youtube.com/watch?v=${lesson.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lesson.title}
          </a>
        </h4>
        
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <a 
            href={`https://www.youtube.com/watch?v=${lesson.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2 text-sm"
          >
            <Play className="w-4 h-4 fill-current mr-2" />
            Xem Video
          </a>
          
          {lesson.driveLink && (
            <a 
              href={lesson.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2 text-sm"
            >
              <FileText className="w-4 h-4 mr-2" />
              Tài liệu Drive
            </a>
          )}

          {lesson.materials && (
            <a 
              href={lesson.materials}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2 text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100"
            >
              <FileText className="w-4 h-4 mr-2" />
              Tài liệu buổi học
            </a>
          )}

          {lesson.exercises && (
            <a 
              href={lesson.exercises}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2 text-sm bg-green-50 text-green-600 hover:bg-green-100 border-green-100"
            >
              <PenTool className="w-4 h-4 mr-2" />
              Bài tập luyện tập
            </a>
          )}
        </div>

        {/* Next Lesson Options */}
        {lesson.nextLessons && lesson.nextLessons.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ChevronRight className="w-3 h-3" />
              Bài học tiếp theo
            </h5>
            <div className="flex flex-col gap-2">
              {lesson.nextLessons.map((option) => (
                <div key={option.id} className="flex items-center justify-between p-3 rounded-lg bg-indigo-50 border border-indigo-100">
                  <div>
                    <span className="text-sm font-bold text-indigo-900 block">{option.title}</span>
                    {option.description && <span className="text-xs text-indigo-600">{option.description}</span>}
                  </div>
                  <span className="text-xs font-medium text-white bg-indigo-600 px-2 py-1 rounded">
                    Tiếp theo
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents Section */}
        {lesson.documents && lesson.documents.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <File className="w-3 h-3" />
              Tài liệu đính kèm
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lesson.documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-indigo-200 hover:shadow-sm transition-all group/doc"
                >
                  <div className="p-2 bg-white border border-slate-200 group-hover/doc:border-indigo-100 rounded-md text-indigo-600 transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium truncate group-hover/doc:text-indigo-700 transition-colors">{doc.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto group-hover/doc:text-indigo-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
