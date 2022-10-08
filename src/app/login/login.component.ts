import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: any = '';
  postNotes: Login[] = [];
  modalTitle: string = 'Crear nota';
  note: Login = {
    rut: '',
    password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
