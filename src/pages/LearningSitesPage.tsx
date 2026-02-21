import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, BookOpen, Code, GraduationCap, Calculator, Search } from 'lucide-react';
import { AVATAR_URL } from '../constants';

interface Website {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: any;
  category: string;
  color: string;
}

const websites: Website[] = [
  // Toán học
  {
    id: 'toanmath',
    title: 'ToanMath.com',
    description: 'Kho tài liệu, đề thi thử THPTQG môn Toán phong phú và cập nhật liên tục.',
    url: 'https://toanmath.com',
    icon: Calculator,
    category: 'Toán học',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    id: 'mathvn',
    title: 'MathVN.com',
    description: 'Diễn đàn toán học, chia sẻ chuyên đề và bài tập toán các cấp.',
    url: 'https://mathvn.com',
    icon: Calculator,
    category: 'Toán học',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    id: 'diendantoanhoc',
    title: 'Diễn đàn Toán học',
    description: 'Cộng đồng trao đổi, thảo luận các bài toán hay và khó (VMF).',
    url: 'https://diendantoanhoc.org',
    icon: Calculator,
    category: 'Toán học',
    color: 'text-blue-600 bg-blue-50'
  },

  // Tin học & Lập trình
  {
    id: 'w3schools',
    title: 'W3Schools',
    description: 'Trang web học lập trình web (HTML, CSS, JS, Python) cơ bản và dễ hiểu nhất.',
    url: 'https://www.w3schools.com',
    icon: Code,
    category: 'Tin học & Lập trình',
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    id: 'codelearn',
    title: 'Codelearn.io',
    description: 'Nền tảng học và thi lập trình trực tuyến hàng đầu Việt Nam.',
    url: 'https://codelearn.io',
    icon: Code,
    category: 'Tin học & Lập trình',
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    id: 'geeksforgeeks',
    title: 'GeeksforGeeks',
    description: 'Kho tàng kiến thức về Cấu trúc dữ liệu & Giải thuật cho sinh viên CNTT.',
    url: 'https://www.geeksforgeeks.org',
    icon: Code,
    category: 'Tin học & Lập trình',
    color: 'text-emerald-600 bg-emerald-50'
  },

  // Học tập tổng hợp
  {
    id: 'vietjack',
    title: 'VietJack',
    description: 'Giải bài tập SGK, soạn văn, thi online tất cả các môn học.',
    url: 'https://vietjack.com',
    icon: BookOpen,
    category: 'Tổng hợp',
    color: 'text-orange-600 bg-orange-50'
  },
  {
    id: 'loigiaihay',
    title: 'Lời Giải Hay',
    description: 'Hướng dẫn giải bài tập sách giáo khoa, sách bài tập ngắn gọn, chi tiết.',
    url: 'https://loigiaihay.com',
    icon: BookOpen,
    category: 'Tổng hợp',
    color: 'text-orange-600 bg-orange-50'
  },
  {
    id: 'hocmai',
    title: 'HOCMAI',
    description: 'Nền tảng học trực tuyến với đội ngũ giáo viên nổi tiếng.',
    url: 'https://hocmai.vn',
    icon: GraduationCap,
    category: 'Tổng hợp',
    color: 'text-orange-600 bg-orange-50'
  }
];

export function LearningSitesPage() {
  const categories = Array.from(new Set(websites.map(w => w.category)));

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <h1 className="text-lg font-bold text-slate-900 truncate">Web Học Tập</h1>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-100 shadow-sm">
            <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Globe className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Các trang web hữu ích</h2>
          <p className="text-lg text-slate-600">
            Tổng hợp các nguồn tài liệu và công cụ học tập trực tuyến tốt nhất để hỗ trợ quá trình học của bạn.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map(category => {
            const categorySites = websites.filter(w => w.category === category);
            return (
              <section key={category} className="scroll-mt-20">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-indigo-600 rounded-full"></span>
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySites.map(site => {
                    const Icon = site.icon;
                    return (
                      <a 
                        key={site.id}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${site.color} transition-colors duration-300`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <ExternalLinkIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                        </div>
                        
                        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {site.title}
                        </h4>
                        
                        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                          {site.description}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
