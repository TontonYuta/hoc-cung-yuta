import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { Math12RoadmapPage } from './pages/Math12RoadmapPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { CVPage } from './pages/CVPage';
import { EntertainmentPage } from './pages/EntertainmentPage';
import { FloatingChat } from './components/FloatingChat';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/roadmap/math-12" element={<Math12RoadmapPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/about-me" element={<CVPage />} />
      </Routes>
      <FloatingChat />
    </BrowserRouter>
  );
}
