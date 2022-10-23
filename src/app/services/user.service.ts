import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/login.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4000/api/user/';

  constructor(private http: HttpClient) { }

  autenthication(user: Teacher): Observable<any> {
    return this.http.post(this.url, user);
  }

}
