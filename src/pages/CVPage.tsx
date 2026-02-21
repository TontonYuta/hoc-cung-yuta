import { MapPin, Phone, Mail, Github, Globe, GraduationCap, Briefcase, Trophy, Star, User, Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AVATAR_URL } from '../constants';

export function CVPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        {/* Header / Cover */}
        <div className="bg-indigo-600 h-32 sm:h-48 relative">
          <Link to="/" className="absolute top-6 left-6 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>

        <div className="px-8 sm:px-12 pb-12">
          {/* Profile Section */}
          <div className="relative -mt-16 sm:-mt-12 mb-8 flex flex-col sm:flex-row items-center sm:items-end gap-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white shrink-0">
              <img src={AVATAR_URL} alt="Trần Huy Hoàng" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left mb-2 sm:mb-0 sm:pb-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Trần Huy Hoàng</h1>
              <p className="text-lg text-indigo-600 font-medium">Gia sư Toán 12 – Luyện thi THPT QG</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column (Contact & Info) */}
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  Thông tin cá nhân
                </h2>
                <div className="space-y-4 text-slate-600 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 shrink-0" />
                    <span>Phương Liên, Đống Đa, Hà Nội</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 shrink-0" />
                    <a href="tel:+84963278149" className="hover:text-indigo-600 transition-colors cursor-pointer">+84 963 278 149</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 shrink-0" />
                    <a href="mailto:huyhoang6altt@gmail.com" className="hover:text-indigo-600 transition-colors cursor-pointer">huyhoang6altt@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 shrink-0" />
                    <a href="https://github.com/TontonYuta" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors cursor-pointer">TontonYuta</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 shrink-0" />
                    <a href="https://hoc-cung-yuta.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors cursor-pointer">hoc-cung-yuta.vercel.app</a>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-indigo-600" />
                  Kỹ năng
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Toán học</h3>
                    <p className="text-slate-600 text-sm">Nắm vững chương trình THPT QG, TSA, HSA, V-ACT, BCA.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Giảng dạy</h3>
                    <p className="text-slate-600 text-sm">Trực quan, dễ hiểu, phản hồi nhanh, phù hợp nhiều đối tượng.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Tư duy</h3>
                    <p className="text-slate-600 text-sm">Nắm được tâm lý học sinh, xây dựng lộ trình phù hợp.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Quản lý</h3>
                    <p className="text-slate-600 text-sm">Theo sát tiến độ, phối hợp phụ huynh hiệu quả.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column (Main Content) */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                  Giới thiệu
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Sinh viên năm 3 ngành Toán-Tin, Đại học Bách Khoa Hà Nội. Có hơn 2 năm kinh nghiệm luyện thi Toán 12 và các kỳ thi SAT, HSA. Giúp học sinh tăng trung bình 2-3 điểm sau 2-3 tháng bằng cách nắm bắt tâm lý học sinh và giảng dạy trực quan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Target className="w-6 h-6 text-indigo-600" />
                  Mục tiêu giảng dạy
                </h2>
                <ul className="space-y-3 text-slate-600 list-disc list-inside marker:text-indigo-600">
                  <li>Làm nền tảng cho việc sư phạm sau này.</li>
                  <li>Giúp học sinh hiểu bản chất Toán học, không học vẹt.</li>
                  <li>Xây dựng lộ trình học cá nhân hóa theo năng lực.</li>
                  <li>Tạo môi trường học tích cực, phản hồi nhanh, dễ tiếp cận.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                  Kinh nghiệm giảng dạy
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold text-slate-900">Gia sư Toán 12</h3>
                      <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">2022 – nay</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-2 italic">Luyện thi THPT/SAT/HSA/TSA (Online nhóm nhỏ & 1-1 tại Hà Nội)</p>
                    <ul className="space-y-2 text-slate-600 list-disc list-inside marker:text-slate-400 text-sm">
                      <li>Hơn 20 học sinh; 100% đỗ tốt nghiệp và vào đại học mong muốn.</li>
                      <li>Biên soạn tài liệu, chấm bài, phản hồi trong 24h.</li>
                      <li>Lớp 2k6 đạt nhiều HS 8.0+; khóa 2k7 tiến bộ rõ rệt.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Trophy className="w-6 h-6 text-indigo-600" />
                  Thành tích
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-slate-900">2023–2024:</span>
                      <span className="text-slate-600 ml-1">Học sinh đạt mục tiêu điểm Toán THPT QG.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-slate-900">2022:</span>
                      <span className="text-slate-600 ml-1">Giải Nhất Toán 12 tỉnh Vĩnh Phúc.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-slate-900">2018–2019:</span>
                      <span className="text-slate-600 ml-1">2 Huy chương Đồng MYTS.</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-slate-900">2014–2022:</span>
                      <span className="text-slate-600 ml-1">9 giải Nhì/Ba HSG Toán cấp tỉnh (lớp 4–11).</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
