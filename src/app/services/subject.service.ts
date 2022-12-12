import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  url = 'https://portaltwk-back.onrender.com/subject/';

  constructor(private http: HttpClient) { }

  getSubjectByRut(rut: any): Observable<any> {
    return this.http.get(this.url+'byTeacher/' + rut);
  }
  getSubjectByCode(code: any): Observable<any> {
    return this.http.get(this.url+'byCode/' + code);
  }

}
