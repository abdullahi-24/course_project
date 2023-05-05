import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/model/students';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  p: number = 1;
  Student: Student[] = [];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: DataService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetStudentsList();
    s.snapshotChanges().subscribe((data) => {
      this.Student = [];
      data.forEach((item) => {
        let a: { [key: string]: any } = item.payload.toJSON() as {
          [key: string]: any;
        };
        a['$key'] = item.key;
        this.Student.push(a as Student);
      });
    });
  }
  dataState() {
    this.crudApi
      .GetStudentsList()
      .valueChanges()
      .subscribe((data) => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoStudent = false;
          this.noData = true;
        } else {
          this.hideWhenNoStudent = true;
          this.noData = false;
        }
      });
  }
  deleteStudent(student: Student) {
    if (window.confirm('Are sure you want to delete this student ?')) {
      this.crudApi.DeleteStudent(student.$key);
      this.toastr.success(student.firstName + ' successfully deleted!');
    }
  }
}
