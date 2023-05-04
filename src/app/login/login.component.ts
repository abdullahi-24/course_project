import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  students: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    this.http.get('/assets/student-data.json').subscribe((data: any) => {
      this.students = data.students;
    });
  }

  onSubmit() {
    const student = this.students.find(s => s.username === this.username && s.password === this.password);
    if (student) {
      this.authService.setLoginDetails(this.username, true);
      this.router.navigate(['student']);
  } else {
    alert('Invalid username or password');
  }
  }
}
