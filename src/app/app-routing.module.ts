import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { CourseComponent } from './courses/course/course.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'student', component: StudentViewComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'course/:id', component: CourseComponent },
  { path: 'view-students', component: StudentListComponent },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'view-courses', component: CourseComponent},
  { path: 'create-course', component: AddCourseComponent},
  { path: 'edit-course/:id', component: EditCourseComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
