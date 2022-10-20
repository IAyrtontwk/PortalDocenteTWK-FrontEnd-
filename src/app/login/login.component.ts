import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/login.model';
import { CookieService } from 'ngx-cookie-service';


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
    mail: ''
  }
  inputRut: string = "";
  inputPassword: string = "";
  rememberUserSwitch: boolean = false;

  // Modal
  modalTitle: string = 'Configuracion de contraseña';
  recoveryPass: boolean = false;
  codVerInput: string = '';
  newPassInput: string = '';
  repeatPassInput: string = '';

  constructor(private cookieService: CookieService) { 
    console.log(this.cookieService.get('user'));
    this.inputRut = this.cookieService.get('user');
  }

  ngOnInit(): void {
  }

  getCookie(name: string){
     this.cookieService.get(name)
  }
  setCookie = (name: string, value: any) => {
    this.cookieService.set(name,value);
  };
  login = () => {
    if(this.rememberUserSwitch)
    this.setCookie('user',this.inputRut);
  };


  changePass = () =>{
    this.modalTitle = ' Recuperar contraseña ';
    this.recoveryPass = true;
  }
}

let Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto : any) {
		if (!/^[0-9]+-[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
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
// Uso de la función
// alert( Fn.validaRut('1111111-1') ? 'Valido' : 'inválido');

