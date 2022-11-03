import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/login.model'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4000/user/';

  constructor(private http: HttpClient, private router: Router) { }

  autenthication(user: Teacher): Observable<any> {
    return this.http.post(this.url+'login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
