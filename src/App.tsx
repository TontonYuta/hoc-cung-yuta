import { HashRouter, Routes, Route } from 'react-router-dom'; // Thay BrowserRouter bằng HashRouter
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { Math12RoadmapPage } from './pages/Math12RoadmapPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { CVPage } from './pages/CVPage';
import { EntertainmentPage } from './pages/EntertainmentPage';
import { LearningSitesPage } from './pages/LearningSitesPage';
import { FloatingChat } from './components/FloatingChat';

export default function App() {
  return (
    // Sử dụng HashRouter để định tuyến bằng dấu # (ví dụ: index.html#/documents)
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/roadmap/math-12" element={<Math12RoadmapPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/learning-sites" element={<LearningSitesPage />} />
        <Route path="/about-me" element={<CVPage />} />
      </Routes>
      <FloatingChat />
    </HashRouter>
  );
}