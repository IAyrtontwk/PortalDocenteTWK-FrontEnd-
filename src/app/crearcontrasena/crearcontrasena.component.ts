import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/login.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'
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
  claveInvalida: boolean = false;

  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit(): void {}
  //setear crear contraseña

  
  setUserinLocal = (user: any) => {
    localStorage.setItem('username', user.name);
    localStorage.setItem('lastname', user.lastname);
    localStorage.setItem('useremail', user.email);
    localStorage.setItem('userRut', user.rut);
  }
  
  savePassword() {
    this.userService.updatePass(this.user).subscribe(
      data => {
        
        this.router.navigate(['home']);
        // console.log(data.user);
        localStorage.setItem('token', data.token); 
        this.setUserinLocal(data.user);
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
        this.user.firstLogin = 'false';
        localStorage.removeItem('id');
      } else {
        alert('Las contraseñas deben ser iguales');
      }
    }
  };

  onKeyUpEventPass(event: any){
    if(this.newPass == this.confirmPass) {
      this.claveInvalida = false;
    }else{
      this.claveInvalida = true;
    }
 }


  sendPassword = () => {
    this.createPassword();
    this.savePassword();
  }
}
