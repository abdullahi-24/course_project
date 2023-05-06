import { Component } from '@angular/core';
import { CourseDataService } from 'src/app/course-data.service';
import { Course } from 'src/app/model/course';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  public courseForm!: FormGroup;

  constructor(
    public dataApi: CourseDataService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    public location: Location
  ) {}

  ngOnInit() {
    this.dataApi.GetCoursesList();
    this.courseForm = this.fb.group({
      courseName: ['', [Validators.required, Validators.minLength(3)]],
      courseDescription: [''],
      courseId: [''],
      startDate: ['', Validators.required],
    });
  }

  get courseName() {
    return this.courseForm.get('courseName');
  }

  get courseDescription() {
    return this.courseForm.get('courseDescription');
  }

  get courseId() {
    return this.courseForm.get('courseId');
  }

  get startDate() {
    return this.courseForm.get('startDate');
  }

  ResetForm() {
    this.courseForm.reset();
  }

  goBack() {
    this.location.back();
  }

  submitCourseData() {
    this.dataApi.AddCourse(this.courseForm.value);
    this.toastr.success(
      this.courseForm.controls['courseName'].value + ' successfully added!'
    );
    this.ResetForm();
  }
}
