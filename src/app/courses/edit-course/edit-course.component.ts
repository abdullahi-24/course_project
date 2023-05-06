import { Component, OnInit } from '@angular/core';
import { CourseDataService } from 'src/app/course-data.service';
import { Course } from 'src/app/model/course';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit{
  editForm!: FormGroup;
  constructor(
    private crudApi: CourseDataService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateCourseData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.crudApi
        .GetCourse(id)
        .valueChanges()
        .subscribe((data) => {
          this.editForm.setValue(data);
        });
    }
  }
  get courseName() {
    return this.editForm.get('courseName');
  }
  get courseDescription() {
    return this.editForm.get('courseDescription');
  }
  get courseId() {
    return this.editForm.get('courseId');
  }
  get startDate() {
    return this.editForm.get('startDate');
  }
  updateCourseData() {
    this.editForm = this.fb.group({
      courseName: ['', [Validators.required, Validators.minLength(3)]],
      courseDescription: [''],
      courseId: [''],
      startDate: ['', [Validators.required]],
    });
  }
  goBack() {
    this.location.back();
  }
  updateForm() {
    this.crudApi.UpdateCourse(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['courseName'].value + ' updated successfully'
    );
    this.router.navigate(['view-courses']);
  }

}

