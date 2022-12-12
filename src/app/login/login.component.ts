import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/login.model';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CookieService]
})
export class LoginComponent implements OnInit {
  user: Teacher = new Teacher('','','','','', '','');

  //Ng model usados en el html
  inputRut: string = "";
  inputPassword: string = "";
  rememberUserSwitch: boolean = false;
  rutInvalido: boolean = false;

  constructor(private cookieService: CookieService, private userService: UserService,
    private router: Router) { 
      this.userService.logout();
    if(this.cookieService.check('user')){
    this.inputRut = this.cookieService.get('user');
    this.rememberUserSwitch = true ;
    }
  }

  ngOnInit(): void {
  }

  DoLogin() {
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(this.inputPassword, salt);
    this.inputPassword = pass;
  }
  
  //Funciones cookies
  deleteCookie(name: string){
    this.cookieService.delete(name)
  }
  getCookie(name: string){
     this.cookieService.get(name)
  }
  setCookie = (name: string, value: any) => {
    this.cookieService.set(name,value);
  };

  setUserinLocal = (user: any) => {
    localStorage.setItem('username', user.name);
    localStorage.setItem('lastname', user.lastname);
    localStorage.setItem('useremail', user.email);
    localStorage.setItem('userRut', user.rut);
  }

  //Funciones service User
  authUser = () => {
    this.userService.autenthication(this.user)
    .subscribe( 
      data => {
        // console.log(data);
        if(data.message) {
          // console.log(data.payload.user.id);
          localStorage.setItem('rut', data.rut); 
          this.router.navigate(['setPassword']);
        }else{
          this.router.navigate(['home']);
          // console.log(data.user);
          localStorage.setItem('token', data.token); 
          this.setUserinLocal(data.user);
        }
      }, error => {
        console.log(error);
        alert(' usuario y/o contraseña incorrectas ');
    })
  }

  //Función KeyUp rut
  onKeyUpEventRut(event: any){
    if(Fn.validaRut(event.target.value)) {
      this.rutInvalido = false;
    }else{
      this.rutInvalido = true;
    }
 }
  login = () => {
    if (this.rememberUserSwitch) {
      this.setCookie('user',this.inputRut);
    }else{
      this.deleteCookie('user');
    }
    this.user.rut = this.inputRut;
    this.user.password = this.inputPassword;
    console.log(this.user);
    
    this.DoLogin();
    this.authUser();
    this.eraseForm();
  };

  eraseForm = () => {
    this.inputPassword = '';
  }

}

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

let Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto : any) {
		if (!/^[0-9]+-[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		let tmp 	= rutCompleto.split('-');
		let digv	= tmp[1]; 
		let rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (Fn.dv(rut) == digv );
	},
	dv : function(T : any){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}

