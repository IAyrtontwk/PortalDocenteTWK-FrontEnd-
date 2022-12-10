import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  
  url = 'http://localhost:4000/qualification/';

  constructor(private http: HttpClient) { }

  getQualificationsBySubject(code: any): Observable<any> {
    return this.http.get(this.url+'qualifBySubject/' + code);
  }
  getQualificationsByStudent(rut: any): Observable<any> {
    return this.http.get(this.url+'qualifByStudent/' + rut);
  }

}