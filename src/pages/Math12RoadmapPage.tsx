import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, BookOpen, CheckCircle2, Trophy, Star, ChevronRight, Play, Loader2 } from 'lucide-react';
import { AVATAR_URL } from '../constants';
import { courseService } from '../services/courseService';
import { RoadmapData } from '../types';

export function Math12RoadmapPage() {
  const [targetScore, setTargetScore] = useState<number | null>(null);
  const [roadmaps, setRoadmaps] = useState<RoadmapData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    courseService.getRoadmaps()
      .then(setRoadmaps)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const targets = [
    { score: 6, label: 'Mục tiêu 6-7 điểm', desc: 'Nắm chắc kiến thức cơ bản, tốt nghiệp THPT', color: 'bg-blue-500', icon: CheckCircle2 },
    { score: 7, label: 'Mục tiêu 7-8 điểm', desc: 'Vận dụng kiến thức, xét tuyển Đại học', color: 'bg-green-500', icon: BookOpen },
    { score: 8, label: 'Mục tiêu 8-9 điểm', desc: 'Thành thạo các dạng bài vận dụng cao', color: 'bg-orange-500', icon: Star },
    { score: 9, label: 'Mục tiêu 9+ điểm', desc: 'Chinh phục các câu hỏi khó nhất đề thi', color: 'bg-red-500', icon: Trophy },
  ];

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-indigo-600" /></div>;
  if (error) return <div className="h-screen flex items-center justify-center text-red-500">Error: {error}</div>;

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
        {targetScore && roadmaps && roadmaps[targetScore] && (
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
                    {roadmaps[targetScore].map((step, index) => (
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
                  to={roadmaps[targetScore][0].link}
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
