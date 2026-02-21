import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, BookOpen, CheckCircle2, Trophy, Star, ChevronRight, Play } from 'lucide-react';
import { AVATAR_URL } from '../constants';

export function Math12RoadmapPage() {
  const [targetScore, setTargetScore] = useState<number | null>(null);

  const targets = [
    { score: 6, label: 'Mục tiêu 6-7 điểm', desc: 'Nắm chắc kiến thức cơ bản, tốt nghiệp THPT', color: 'bg-blue-500', icon: CheckCircle2 },
    { score: 7, label: 'Mục tiêu 7-8 điểm', desc: 'Vận dụng kiến thức, xét tuyển Đại học', color: 'bg-green-500', icon: BookOpen },
    { score: 8, label: 'Mục tiêu 8-9 điểm', desc: 'Thành thạo các dạng bài vận dụng cao', color: 'bg-orange-500', icon: Star },
    { score: 9, label: 'Mục tiêu 9+ điểm', desc: 'Chinh phục các câu hỏi khó nhất đề thi', color: 'bg-red-500', icon: Trophy },
  ];

  const roadmaps = {
    6: [
      { month: 'Học kỳ 1', title: 'Nền tảng Giải tích & Hình học', items: ['Khảo sát hàm số (Đơn điệu, Cực trị, Tiệm cận)', 'Vectơ trong không gian & Hệ trục Oxyz'], link: '/course/math-grade-12-6plus' },
      { month: 'Học kỳ 2', title: 'Nguyên hàm & Tích phân', items: ['Nguyên hàm cơ bản', 'Tích phân & Ứng dụng diện tích/thể tích', 'Phương trình mặt phẳng, đường thẳng'], link: '/course/math-grade-12-6plus' },
      { month: 'Cuối kỳ 2', title: 'Xác suất & Thống kê', items: ['Các số đặc trưng đo mức độ phân tán', 'Xác suất có điều kiện cơ bản'], link: '/course/math-grade-12-6plus' },
      { month: 'Tháng 5 - 6', title: 'Tổng ôn Tốt nghiệp', items: ['Luyện đề thi tốt nghiệp THPT', 'Rà soát kiến thức cơ bản'], link: '/course/math-grade-12-6plus' },
    ],
    7: [
      { month: 'Học kỳ 1', title: 'Làm chủ Hàm số & Oxyz', items: ['Ứng dụng đạo hàm (GTLN, GTNN thực tế)', 'Tọa độ vectơ, Tích vô hướng & Góc'], link: '/course/math-grade-12-7plus' },
      { month: 'Học kỳ 2', title: 'Tích phân & Hình Oxyz nâng cao', items: ['Tích phân đổi biến, từng phần', 'Phương trình mặt cầu & Vị trí tương đối'], link: '/course/math-grade-12-7plus' },
      { month: 'Cuối kỳ 2', title: 'Xác suất thống kê ứng dụng', items: ['Công thức xác suất toàn phần & Bayes', 'Thống kê mẫu số liệu ghép nhóm'], link: '/course/math-grade-12-7plus' },
      { month: 'Tháng 4 - 6', title: 'Luyện đề Đại học', items: ['Giải đề minh họa & Đề các năm', 'Kỹ năng làm bài trắc nghiệm nhanh'], link: '/course/math-grade-12-7plus' },
    ],
    8: [
      { month: 'Học kỳ 1', title: 'Vận dụng cao Hàm số & Hình học', items: ['Bài toán tối ưu hóa thực tế (Hàm số)', 'Biểu thức tọa độ & Bài toán Min-Max Oxyz'], link: '/course/math-grade-12-8plus' },
      { month: 'Học kỳ 2', title: 'Chinh phục Tích phân & Xác suất', items: ['Ứng dụng Tích phân (Vận tốc, Dòng điện)', 'Bài toán Xác suất có điều kiện nâng cao'], link: '/course/math-grade-12-8plus' },
      { month: 'Tháng 3 - 4', title: 'Tổng ôn chuyên sâu', items: ['Hệ thống hóa toàn bộ kiến thức 12', 'Luyện các dạng bài vận dụng cao'], link: '/course/math-grade-12-8plus' },
      { month: 'Tháng 5 - 6', title: 'Thực chiến phòng thi', items: ['Luyện đề thử sức (Mock tests)', 'Chiến thuật phân bổ thời gian'], link: '/course/math-grade-12-8plus' },
    ],
    9: [
      { month: 'Giai đoạn 1', title: 'Tư duy Toán học đỉnh cao', items: ['Khảo sát hàm số nâng cao (Hàm hợp, Hàm ẩn)', 'Tư duy hình học Oxyz hiện đại'], link: '/course/math-grade-12-8plus' },
      { month: 'Giai đoạn 2', title: 'Làm chủ các chuyên đề khó', items: ['Tích phân hàm ẩn & Ứng dụng thực tế khó', 'Xác suất thống kê & Công thức Bayes mở rộng'], link: '/course/math-grade-12-8plus' },
      { month: 'Giai đoạn 3', title: 'Luyện thi Đánh giá năng lực', items: ['Luyện đề HSA (ĐHQG HN)', 'Luyện đề TSA (ĐHBK HN)'], link: '/course/math-hsa' },
      { month: 'Giai đoạn 4', title: 'Chinh phục điểm 10', items: ['Tổng ôn các dạng bài lạ & cực khó', 'Rèn bản lĩnh tâm lý phòng thi'], link: '/course/math-tsa' },
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <h1 className="text-lg font-bold text-slate-900 truncate">Lộ trình Toán 12 cá nhân hóa</h1>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-100 shadow-sm">
            <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Target Selection */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Bạn muốn đạt bao nhiêu điểm?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Chọn mục tiêu điểm số của bạn để nhận lộ trình học tập được thiết kế riêng biệt, tối ưu hóa thời gian và hiệu quả.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {targets.map((target) => {
            const Icon = target.icon;
            const isSelected = targetScore === target.score;
            return (
              <button
                key={target.score}
                onClick={() => setTargetScore(target.score)}
                className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
                  isSelected 
                    ? 'border-indigo-600 bg-indigo-50 shadow-lg ring-2 ring-indigo-600 ring-offset-2' 
                    : 'border-slate-200 bg-white hover:border-indigo-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${target.color} flex items-center justify-center mb-4 text-white shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{target.label}</h3>
                <p className="text-sm text-slate-500">{target.desc}</p>
                {isSelected && (
                  <div className="absolute top-4 right-4 text-indigo-600">
                    <CheckCircle2 className="w-6 h-6 fill-current" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Roadmap Display */}
        {targetScore && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="bg-slate-900 text-white p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Lộ trình chinh phục {targetScore}+ điểm Toán</h3>
                  <p className="text-indigo-100">Kế hoạch học tập chi tiết từng giai đoạn</p>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100 lg:left-1/2 lg:-ml-px"></div>

                  <div className="space-y-12">
                    {roadmaps[targetScore as keyof typeof roadmaps].map((step, index) => (
                      <div key={index} className={`relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Timeline Dot */}
                        <div className="absolute left-4 -translate-x-1/2 lg:left-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md z-10 mt-1.5"></div>

                        {/* Content */}
                        <div className="lg:w-1/2 pl-12 lg:pl-0 lg:pr-12 lg:text-right">
                          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-2 border border-indigo-100">
                            {step.month}
                          </span>
                          <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                          <ul className={`space-y-2 text-slate-600 mb-4 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} flex flex-col`}>
                            {step.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Link 
                            to={step.link}
                            className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 hover:underline"
                          >
                            Học ngay giai đoạn này <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                        
                        {/* Spacer for alternating layout */}
                        <div className="lg:w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Bạn đã sẵn sàng chưa?</h4>
                <Link 
                  to={roadmaps[targetScore as keyof typeof roadmaps][0].link}
                  className="btn-primary px-8 py-3 text-lg shadow-xl shadow-indigo-500/20"
                >
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  Bắt đầu học ngay
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
