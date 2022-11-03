import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/login.model';
@Component({
  selector: 'app-crearcontrasena',
  templateUrl: './crearcontrasena.component.html',
  styleUrls: ['./crearcontrasena.component.css']
})
export class CrearcontrasenaComponent implements OnInit {
  user: Teacher = new Teacher('','','','','','','');

  constructor() { }
  // Variables creación de contrasaña
  formTitle : string = 'Crear Contraseña'
  newPass : string = '';
  confirmPass : string = '';
  firstFormInput: string = '';

  ngOnInit(): void {
  }
  //setear crear contraseña

  setFormCreatePass = () =>{
    this.formTitle = 'Crear Contraseña'
    this.firstFormInput = 'Contraseña actual'
  }
  //función creación de contraseña 

  createPassword = ()=> {
    if (this.newPass == this.confirmPass){
      this.user.password = this.newPass;
    }else{
      alert('Las contraseñas son distintas')
    }
  }


 

}
