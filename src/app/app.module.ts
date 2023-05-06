import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentViewComponent } from './student-view/student-view.component';

import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './register/register.component';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentViewComponent,
    CourseComponent,
    SidebarComponent,
    RegisterComponent,
    StudentListComponent,
    EditStudentComponent,
    AddStudentComponent,
    AddCourseComponent,
    EditCourseComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,

    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
