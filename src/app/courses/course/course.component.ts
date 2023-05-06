import { Component } from '@angular/core';
import { CourseDataService } from 'src/app/course-data.service';
import { Course } from 'src/app/model/course';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  p: number = 1;
  courses: Course[] = [];
  hideWhenNoCourse: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CourseDataService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let courses = this.crudApi.GetCoursesList();
    courses.snapshotChanges().subscribe((data) => {
      this.courses = [];
      data.forEach((item) => {
        let course: { [key: string]: any } = item.payload.toJSON() as {
          [key: string]: any;
        };
        course['$key'] = item.key;
        this.courses.push(course as Course);
      });
    });
  }

  dataState() {
    this.crudApi
      .GetCoursesList()
      .valueChanges()
      .subscribe((data) => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoCourse = false;
          this.noData = true;
        } else {
          this.hideWhenNoCourse = true;
          this.noData = false;
        }
      });
  }

  deleteCourse(course: Course) {
    if (window.confirm('Are you sure you want to delete this course?')) {
      this.crudApi.DeleteCourse(course.$key);
      this.toastr.success(course.courseName + ' successfully deleted!');
    }
  }
}
