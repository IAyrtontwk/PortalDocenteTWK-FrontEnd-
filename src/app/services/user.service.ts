import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4000/user/';

  constructor(private http: HttpClient, private router: Router) { }

  autenthication(user: Teacher): Observable<any> {
    return this.http.post(this.url+'login', user);
  }

  updatePass(user: Teacher): Observable<any> {
    return this.http.post(this.url+'updatePassword', user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('lastname');
    localStorage.removeItem('useremail');
    localStorage.removeItem('userRut');
    this.router.navigate(['/']);
  }

}