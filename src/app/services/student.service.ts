import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/login.model'
import { Course } from '../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  url = 'http://localhost:4000/student/';

  constructor(private http: HttpClient) { }

  getStudentsBySubject(id: any): Observable<any> {
    return this.http.get(this.url+'studentBySubject/' + id);
  }

}