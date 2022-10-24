import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/login.model';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CookieService]
})
export class LoginComponent implements OnInit {
  id: any = '';
  user: Teacher = {
    rut: '',
    password: '',
    name: '',
    lastname: '',
    email: '',
    authcode: ''
  }
  inputRut: string = "";
  inputPassword: string = "";
  rememberUserSwitch: boolean = false;
  rutInvalido: boolean = false;

  // Modal
  modalTitle: string = 'Configuracion de contraseña';
  recoveryPass: boolean = false;
  codVerInput: string = '';
  newPassInput: string = '';
  repeatPassInput: string = '';

  constructor(private cookieService: CookieService, private userService: UserService) { 
    if(this.cookieService.check('user')){
    console.log(this.cookieService.get('user'));
    this.inputRut = this.cookieService.get('user');
    this.rememberUserSwitch = true ;
    }
  }

  ngOnInit(): void {
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

  //Funciones service User
  authUser = () => {
    this.userService.autenthication(this.user).subscribe( data => {
      console.log(data);
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
    this.authUser();
    this.eraseForm();
  };

  eraseForm = () => {
    this.inputRut = '';
    this.inputPassword = '';
  }


  isChangePass = () =>{
    this.modalTitle = ' Recuperar contraseña ';
    this.recoveryPass = true;
  }
}

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


