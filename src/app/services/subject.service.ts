import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/login.model'
import { Course } from '../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  url = 'http://localhost:4000/subject/';

  constructor(private http: HttpClient) { }

  getSubjectByRut(rut: any): Observable<any> {
    return this.http.get(this.url+'viewSubject/' + rut);
  }

}
