import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, ExternalLink, Search, FolderOpen } from 'lucide-react';
import { AVATAR_URL } from '../constants';

export function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const documents = [
    {
      id: 1,
      title: "Tổng hợp công thức Toán 12 - Giải tích",
      category: "Toán 12",
      type: "PDF",
      size: "2.5 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "20/02/2026"
    },
    {
      id: 2,
      title: "Đề thi thử THPT Quốc gia 2025 - Lần 1",
      category: "Luyện đề",
      type: "PDF",
      size: "1.8 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "15/02/2026"
    },
    {
      id: 3,
      title: "Chuyên đề Hàm số và Đồ thị (Vận dụng cao)",
      category: "Toán 12",
      type: "PDF",
      size: "3.2 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "10/02/2026"
    },
    {
      id: 4,
      title: "Bài tập Hình học không gian Oxyz - Từ cơ bản đến nâng cao",
      category: "Toán 12",
      type: "PDF",
      size: "4.1 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "05/02/2026"
    },
    {
      id: 5,
      title: "Tổng ôn Công thức Lượng giác lớp 11",
      category: "Toán 11",
      type: "PDF",
      size: "1.5 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "01/02/2026"
    },
    {
      id: 6,
      title: "500 bài tập trắc nghiệm Mũ - Logarit (Có đáp án)",
      category: "Toán 12",
      type: "PDF",
      size: "5.6 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "25/01/2026"
    },
    {
      id: 7,
      title: "Đề cương ôn tập học kỳ 1 Toán 10",
      category: "Toán 10",
      type: "PDF",
      size: "2.1 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "20/01/2026"
    },
    {
      id: 8,
      title: "Tuyển tập các bài toán Xác suất - Thống kê hay và khó",
      category: "Toán 11",
      type: "PDF",
      size: "3.5 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "15/01/2026"
    },
    {
      id: 9,
      title: "Bộ đề thi thử HSA (Đánh giá năng lực) - Phần Tư duy định lượng",
      category: "Luyện đề",
      type: "PDF",
      size: "4.8 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "10/01/2026"
    },
    {
      id: 10,
      title: "Chuyên đề Vectơ trong không gian (Lớp 11 & 12)",
      category: "Toán 11",
      type: "PDF",
      size: "2.8 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "05/01/2026"
    },
    {
      id: 11,
      title: "Tổng hợp kiến thức Đại số 10 - Mệnh đề & Tập hợp",
      category: "Toán 10",
      type: "PDF",
      size: "1.2 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "01/01/2026"
    },
    {
      id: 12,
      title: "20 Đề thi thử Toán THPTQG chọn lọc từ các trường Chuyên",
      category: "Luyện đề",
      type: "ZIP",
      size: "15.4 MB",
      link: "https://drive.google.com/file/d/1j2fwWE_A68uPGoY_0iAJDCZrrlCti3eQ/view?usp=sharing",
      date: "28/12/2025"
    }
  ];

  const categories = Array.from(new Set(documents.map(doc => doc.category)));

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? doc.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <h1 className="text-lg font-bold text-slate-900 truncate">Kho Tài Liệu Học Tập</h1>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-100 shadow-sm">
            <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filter */}
        <div className="mb-8 sm:mb-10 space-y-6">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Tài liệu chọn lọc</h2>
            <p className="text-sm sm:text-base text-slate-600">
              Kho tàng kiến thức được tổng hợp và biên soạn kỹ lưỡng, giúp bạn ôn tập hiệu quả nhất.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kiếm tài liệu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar scroll-smooth">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedCategory === null
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tất cả
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map(doc => (
            <div key={doc.id} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                  {doc.type}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                {doc.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span>{doc.size}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>{doc.date}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sm font-medium text-slate-500 group-hover:text-indigo-600 transition-colors">
                  {doc.category}
                </span>
                <a 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex p-4 rounded-full bg-slate-50 mb-4">
              <FolderOpen className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-500">Không tìm thấy tài liệu nào phù hợp.</p>
          </div>
        )}
      </main>
    </div>
  );
}
