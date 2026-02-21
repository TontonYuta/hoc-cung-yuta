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

export interface CourseDetail {
  courseId: string;
  title: string;
  description: string;
  levels: Level[];
  subCourses?: SubCourse[];
}
