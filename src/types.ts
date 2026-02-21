export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: 'primary' | 'middle_school' | 'high_school' | 'university' | 'informatics';
  instructor: string;
}

export interface Document {
  title: string;
  url: string;
}

export interface NextLessonOption {
  id: string;
  title: string;
  description?: string;
}

export interface Lesson {
  id: string;
  title: string;
  youtubeId: string;
  driveLink?: string;
  materials?: string; // Link to lesson materials (Tài liệu buổi học)
  exercises?: string; // Link to practice exercises (Bài tập luyện tập)
  documents?: Document[];
  nextLessons?: NextLessonOption[];
}

export interface Group {
  title: string;
  lessons: Lesson[];
}

export interface Level {
  id: string;
  title: string;
  groups: Group[];
}

export interface SubCourse {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
}

export interface RoadmapStep {
  month: string;
  title: string;
  items: string[];
  link: string;
}

export interface RoadmapData {
  [key: string]: RoadmapStep[];
}

export interface DocumentItem {
  id: number;
  title: string;
  category: string;
  type: string;
  size: string;
  link: string;
  date: string;
}
