import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { CourseComponent } from './course/course.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'student', component: StudentViewComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'course/:id', component: CourseComponent },
  { path: 'view-students', component: StudentListComponent },
  { path: 'register-student', component: AddStudentComponent},
  { path: 'edit-student/:id', component: EditStudentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
