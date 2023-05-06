import { Injectable } from '@angular/core';
import { Course } from './model/course';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  coursesRef!: AngularFireList<any>;
  courseRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  // Create Course
  AddCourse(course: Course) {
    this.coursesRef.push({
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      courseId: course.courseId,
      startDate: course.startDate,
    });
  }

  // Fetch Single Course Object
  GetCourse(id: string) {
    this.courseRef = this.db.object('course-list/' + id);
    return this.courseRef;
  }

  // Fetch Courses List
  GetCoursesList() {
    this.coursesRef = this.db.list('course-list');
    return this.coursesRef;
  }

  // Update Course Object
  UpdateCourse(course: Course) {
    this.courseRef.update({
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      courseId: course.courseId,
      startDate: course.startDate,
    });
  }

  // Delete Course Object
  DeleteCourse(id: string) {
    this.courseRef = this.db.object('course-list/' + id);
    this.courseRef.remove();
  }
}
