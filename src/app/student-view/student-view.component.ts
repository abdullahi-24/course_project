import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent {

  constructor(private authService: AuthService, private dataService: DataService) {}

  courses: any[] = [];

  ngOnInit(): void {
    this.dataService.getCourses().subscribe(courses => {this.courses = courses});
    console.log(this.username);
    console.log(this.isLoggedIn);
    console.log(this.courses);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get username(): string {
    return this.authService.username;
  }
}
