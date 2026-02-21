import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { courseService } from '../services/courseService';
import { CourseCard } from '../components/CourseCard';
import { BookOpen, GraduationCap, Loader2, Code, Calculator, School, Target, PenTool, Trophy, CheckCircle2, Menu, X } from 'lucide-react';
import { AVATAR_URL } from '../constants';

export function HomePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    courseService.getAllCourses()
      .then(setCourses)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  const categories = [
    { id: 'high_school', title: 'Toán THPT', icon: GraduationCap },
    { id: 'middle_school', title: 'Toán THCS', icon: Calculator },
    { id: 'primary', title: 'Toán Tiểu Học', icon: School },
    { id: 'university', title: 'Toán Đại Học', icon: BookOpen },
    { id: 'informatics', title: 'Tin Học Đại Cương', icon: Code },
  ];

  const roadmapSteps = [
    {
      icon: Target,
      title: "Xác định mục tiêu",
      desc: "Chọn khóa học phù hợp với trình độ và mục tiêu điểm số của bạn.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      icon: BookOpen,
      title: "Học lý thuyết",
      desc: "Nắm vững kiến thức nền tảng qua video bài giảng chất lượng cao.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    },
    {
      icon: PenTool,
      title: "Luyện bài tập",
      desc: "Thực hành với kho bài tập phong phú, có lời giải chi tiết.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100"
    },
    {
      icon: Trophy,
      title: "Chinh phục kỳ thi",
      desc: "Tự tin bước vào phòng thi và đạt kết quả cao nhất.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100"
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-indigo-100 shadow-sm">
              <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Tontons Yuta</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('courses')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer">Khóa học</button>
            <Link to="/roadmap/math-12" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer">Lộ trình Toán 12</Link>
            <Link to="/documents" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer">Tài liệu</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white absolute w-full left-0 shadow-lg animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 py-4 space-y-3 flex flex-col">
              <button 
                onClick={() => scrollToSection('courses')} 
                className="text-left px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
              >
                Khóa học
              </button>
              <Link 
                to="/roadmap/math-12" 
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lộ trình Toán 12
              </Link>
              <Link 
                to="/documents" 
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tài liệu
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Nền tảng học tập trực tuyến
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Chinh phục <span className="text-gradient">Toán học</span> <br/>
                với tư duy đột phá.
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Hệ thống bài giảng chất lượng cao, lộ trình cá nhân hóa và kho tài liệu phong phú giúp bạn bứt phá điểm số.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="btn-primary px-8 py-3 text-lg cursor-pointer"
                >
                  Khám phá ngay
                </button>
                <Link 
                  to="/roadmap/math-12"
                  className="btn-secondary px-8 py-3 text-lg cursor-pointer inline-flex items-center"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Lộ trình Toán 12
                </Link>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="hidden md:block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative p-8 glass-panel rounded-2xl shadow-2xl bg-white/80">
                <GraduationCap className="w-32 h-32 text-indigo-600" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Lộ trình học tập hiệu quả</h2>
            <p className="text-lg text-slate-600">
              Quy trình 4 bước được thiết kế khoa học giúp bạn nắm vững kiến thức và đạt kết quả cao trong mọi kỳ thi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Connector Line (Desktop) */}
                  {index < roadmapSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-100 -z-10">
                      <div className="h-full bg-indigo-100 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full cursor-pointer">
                    <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-bold text-sm mb-4 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course List */}
      <main id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Danh sách khóa học</h2>
          <p className="text-lg text-slate-600">
            Khám phá các khóa học chất lượng cao được biên soạn bởi đội ngũ giáo viên giàu kinh nghiệm.
          </p>
        </div>

        {categories.map(category => {
          const categoryCourses = courses.filter(c => c.category === category.id);
          if (categoryCourses.length === 0) return null;

          const Icon = category.icon;

          return (
            <section key={category.id} className="relative group/section scroll-mt-24">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm group-hover/section:border-indigo-500/30 transition-colors backdrop-blur-sm">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 group-hover/section:w-24 transition-all duration-300"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-md py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 space-y-4">
          <p>&copy; 2026 Học toán cùng Tontons Yuta.</p>
          <Link 
            to="/about-me" 
            className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer hover:underline"
          >
            Tìm hiểu thêm về Hoàng (Tontons Yuta)
          </Link>
        </div>
      </footer>
    </div>
  );
}
