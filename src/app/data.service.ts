import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { Course } from './model/course'
import { FileMetaData } from './model/file-meta-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = './assets/student-data.json';

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) {  }

  // add course
  addCourse(course : Course) {
    course.name = this.afs.createId();
    return this.afs.collection('/Courses').add(course);
  }

  // get all courses
  getAllCourses() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  //delete course
  deleteCourse(course : Course) {
    return this.afs.doc('/Students/' + course.id).delete;
  }

  // edit course
  editCourse(course : Course) {
    this.deleteCourse(course);
    this.addCourse(course)
  }

  // save meta data of file to firestore
  saveMetaDataOfFile(fileObj : FileMetaData) {
    const fileMeta = {
      id : '',
      name : fileObj.name,
      url : fileObj.url,
      size : fileObj.size,

    }

    fileMeta.id = this.afs.createId();

    this.afs.collection('/Upload').add(fileMeta);

  }

  // display all files
  getAllFiles() {
    this.afs.collection('/Uploads').snapshotChanges;
  }

  // delete file
  deleteFile(fileMeta : FileMetaData) {
    this.afs.collection('/Uploads').doc(fileMeta.id).delete();
    this.fireStorage.ref('/Uploads'+fileMeta.name).delete;
  }
  



}
