import { Course, CourseDetail } from '../types';

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
  }
};
