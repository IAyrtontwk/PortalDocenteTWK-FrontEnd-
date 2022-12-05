import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/login.model'
import { Router } from '@angular/router'
import { Course } from '../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class QualificationsService {
  
  url = 'http://localhost:4000/';

  constructor(private http: HttpClient, private router: Router) { }

  getQualificationsByStudents(rut: any): Observable<any> {
    return this.http.get(this.url+'/' + rut);
  }

}