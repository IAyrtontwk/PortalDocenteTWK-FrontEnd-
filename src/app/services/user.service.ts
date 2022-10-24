import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/login.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD
  url = 'http://localhost:4000/api/user/';
=======
  url = 'http://localhost:4000/user/';
>>>>>>> Development

  constructor(private http: HttpClient) { }

  autenthication(user: Teacher): Observable<any> {
<<<<<<< HEAD
    return this.http.post(this.url, user);
=======
    return this.http.post(this.url+'login', user);
>>>>>>> Development
  }

}
