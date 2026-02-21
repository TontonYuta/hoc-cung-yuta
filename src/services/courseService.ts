import { Course, CourseDetail, RoadmapData, DocumentItem, Category } from '../types';

const BASE_URL = '/data';

export const courseService = {
  async getAllCourses(): Promise<Course[]> {
    const response = await fetch(`${BASE_URL}/courses.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return response.json();
  },

  async getCourseDetail(courseId: string): Promise<CourseDetail> {
    const response = await fetch(`${BASE_URL}/levels/${courseId}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch details for course ${courseId}`);
    }
    return response.json();
  },

  async getRoadmaps(): Promise<RoadmapData> {
    const response = await fetch(`${BASE_URL}/roadmaps.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch roadmaps');
    }
    return response.json();
  },

  async getDocuments(): Promise<DocumentItem[]> {
    const files = [
      'documents-math-12.json',
      'documents-math-11.json',
      'documents-math-10.json',
      'documents-math-9.json',
      'documents-math-8.json',
      'documents-math-7.json',
      'documents-math-6.json',
      'documents-math-5.json',
      'documents-math-4.json',
      'documents-math-3.json',
      'documents-math-2.json',
      'documents-math-1.json',
      'documents-exam-prep.json',
      'documents-university.json'
    ];

    try {
      const responses = await Promise.all(
        files.map(file => fetch(`${BASE_URL}/${file}`).then(res => {
          if (!res.ok) throw new Error(`Failed to fetch ${file}`);
          return res.json();
        }))
      );
      
      // Flatten the array of arrays into a single array
      return responses.flat();
    } catch (error) {
      console.error('Error fetching documents:', error);
      // Fallback to empty array or throw error depending on requirements
      throw new Error('Failed to fetch documents');
    }
  },

  async getCategories(): Promise<Category[]> {
    const response = await fetch(`${BASE_URL}/categories.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  }
};
