import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
})
export class StudentViewComponent {
  course: any[] = [
    {
      id: 1,
      course_id: 'CSCI160',
      name: 'Introduction to Computer Science',
      description:
        'An introduction to computer science with emphasis on problem solving, algorithm design, and data structures.',
      teacher: 'John Smith',
    },
    {
      id: 2,
      course_id: 'CSCI336',
      name: 'Database Management Systems',
      description:
        'An introduction to the concepts and techniques used in database management systems, including data modeling, relational algebra, SQL, and database design.',
      teacher: 'Jane Doe',
    },
    {
      id: 3,
      course_id: 'CSC313',
      name: 'Web Development',
      description:
        'An introduction to web development with HTML, CSS, and JavaScript. Topics include web design, front-end frameworks, and server-side scripting.',
      teacher: 'Bob Johnson',
    },
  ];

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  courses: any[] = [];

  ngOnInit(): void {
  }

}
