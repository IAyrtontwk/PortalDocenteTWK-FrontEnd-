import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qualification } from '../models/qualif.model';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  
  url = 'https://portaltwk-back.onrender.com/qualification/';

  constructor(private http: HttpClient) { }

  getQualificationsBySubject(code: any): Observable<any> {
    return this.http.get(this.url+'qualifBySubject/' + code);
  }

  getQualificationsByStudent(rut: any): Observable<any> {
    return this.http.get(this.url+'qualifByStudent/' + rut);
  }

  updateQualification(qualif: any): Observable<any> {
    return this.http.put(this.url+'updateQualif', qualif);
  }

}