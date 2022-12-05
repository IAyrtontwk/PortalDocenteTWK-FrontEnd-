import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

    private API_students =""
    
  constructor(private http: HttpClient) { }

  public getALLstudents(): Observable <any> {
     return this.http.get(this.API_students);
  }

}
