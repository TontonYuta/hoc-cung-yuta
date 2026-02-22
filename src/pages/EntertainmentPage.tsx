import { Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Play, Trophy, Users, Brain, Grid3X3 } from 'lucide-react';
import { AVATAR_URL } from '../constants';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  players: string;
  category: string;
  url: string;
}

const games: Game[] = [
  {
    id: 'chess',
    title: 'Cờ Vua',
    description: 'Trò chơi chiến thuật kinh điển, rèn luyện tư duy logic và khả năng lập kế hoạch.',
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800&q=80',
    icon: Brain,
    players: '2 người',
    category: 'Chiến thuật',
    url: 'https://www.chess.com/play/computer'
  },
  {
    id: 'chinese-chess',
    title: 'Cờ Tướng',
    description: 'Đấu trí trên bàn cờ phương Đông, thử thách bản lĩnh và sự kiên nhẫn.',
    image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/04/co-tuong-1.jpg',
    icon: Users,
    players: '2 người',
    category: 'Chiến thuật',
    url: 'https://www.xiangqi.com/play'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    description: 'Rèn luyện trí não với các con số, nâng cao khả năng tập trung và tư duy logic.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJoHDM-Paqdpq481fjZQhkOjAI_92HDl2gA&s',
    icon: Grid3X3,
    players: '1 người',
    category: 'Trí tuệ',
    url: 'https://sudoku.com/'
  },
  {
    id: 'gomoku',
    title: 'Cờ Caro',
    description: 'Trò chơi giải trí nhẹ nhàng nhưng không kém phần kịch tính với luật chơi đơn giản.',
    image: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=800&q=80',
    icon: Gamepad2,
    players: '2 người',
    category: 'Giải trí',
    url: 'https://papergames.io/en/gomoku'
  }
];

export function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <h1 className="text-lg font-bold text-slate-900 truncate">Góc Giải Trí</h1>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-100 shadow-sm">
            <img src={AVATAR_URL} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <Gamepad2 className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Thư giãn sau giờ học</h2>
          <p className="text-lg text-slate-600">
            Cân bằng việc học với những trò chơi trí tuệ, giúp bạn giải tỏa căng thẳng và rèn luyện tư duy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <div key={game.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-medium mb-2 inline-block">
                      {game.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{game.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-600 mb-6 line-clamp-2">
                    {game.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users className="w-4 h-4" />
                      <span>{game.players}</span>
                    </div>
                    
                    <a 
                      href={game.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-200"
                    >
                      <Play className="w-4 h-4" />
                      Chơi ngay
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
