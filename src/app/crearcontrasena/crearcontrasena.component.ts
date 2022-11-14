import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/login.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-crearcontrasena',
  templateUrl: './crearcontrasena.component.html',
  styleUrls: ['./crearcontrasena.component.css'],
})
export class CrearcontrasenaComponent implements OnInit {
  user: Teacher = new Teacher('', '', '', '', '', '', '');

  // Variables creación de contrasaña
  formTitle: string = 'Crear Contraseña';
  newPass: string = '';
  confirmPass: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  //setear crear contraseña

  savePassword() {
    this.userService.updatePass(this.user).subscribe(
      data => {
        console.log(data);
      }, error => {
        // console.error();
        console.log(error);
      }
    );
  }
  //función creación de contraseña

  createPassword = () => {
    let userRut = localStorage.getItem('rut');
    if (userRut !== null) {
      if (this.newPass == this.confirmPass) {
        this.user.password = this.newPass;
        this.user.rut= userRut;
        this.user.firstLogin = false;
        localStorage.removeItem('id');
      } else {
        alert('Las contraseñas deben ser iguales');
      }
    }
  };

  sendPassword = () => {
    this.createPassword();
    this.savePassword();
  }
}
