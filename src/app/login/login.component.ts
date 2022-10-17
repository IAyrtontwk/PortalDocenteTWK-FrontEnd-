import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: any = '';
  modalTitle: string = 'Portal Docente';
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
  constructor() { }

  ngOnInit(): void {
  }

}

var Fn = {
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
alert( Fn.validaRut('11111111-1') ? 'Valido' : 'inválido');

