import { MessageCircle } from 'lucide-react';
import { AVATAR_URL, FACEBOOK_URL } from '../constants';

export function FloatingChat() {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-slate-200"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100">
          <img 
            src={AVATAR_URL} 
            alt="Support" 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
      </div>
      
      <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        <div className="pr-4">
          <p className="text-sm font-bold text-slate-900">Chat với Tontons Yuta</p>
          <p className="text-xs text-slate-500">Giải đáp thắc mắc ngay!</p>
        </div>
      </div>

      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce shadow-sm">
        1
      </div>
    </a>
  );
}
