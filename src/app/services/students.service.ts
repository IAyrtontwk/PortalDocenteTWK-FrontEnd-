<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/login.model'
import { Router } from '@angular/router'
import { Course } from '../models/home.model';
>>>>>>> origin/Development

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
<<<<<<< HEAD

    private API_students =""
    
  constructor(private http: HttpClient) { }

  public getALLstudents(): Observable <any> {
     return this.http.get(this.API_students);
  }

}
=======
  
  url = 'http://localhost:4000/';

  constructor(private http: HttpClient, private router: Router) { }

  getStudentsByRut(rut: any): Observable<any> {
    return this.http.get(this.url+'/' + rut);
  }

}
>>>>>>> origin/Development
