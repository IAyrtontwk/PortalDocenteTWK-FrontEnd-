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
  // Variables creación de contrasena
  nuevaContrasena : string = '';
  confirmarContrasena : string = '';
  primerCampoModal : string = '';
 
  // Variables recuperacion contrasena
  olvidarContrasena : string = '';
  enviarRecuperarClave : string = '';
  

  // variables Input 
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

  constructor(private cookieService: CookieService) { 
    if(this.cookieService.check('user')){
    console.log(this.cookieService.get('user'));
    this.inputRut = this.cookieService.get('user');
    this.rememberUserSwitch = true ;
    }
  }

  ngOnInit(): void {
  }
  // setear modal 
  setModalCrearContrasena= ()=> {
    this.modalTitle = 'Crear Contraseña';
    this.primerCampoModal = 'Contraseña actual'
  }
  //función crear contrasena 
  crearContrasena = () => {
   if (this.nuevaContrasena ==this.confirmarContrasena){
    this.user.password = this.nuevaContrasena;
   }else{
    alert('Las contrasenas son distintas')
   }
  }


  setModalRecuperarContrasena = () =>{
    this.modalTitle = 'Recuperar Contraseña'
  }


  //funcion recuperaración  contrasena
  recuperarContrasena = ()=>{
    if (this.nuevaContrasena == this.olvidarContrasena ){
      this.user.password = this.enviarRecuperarClave 
    }
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
    this.inputRut = '';
    this.inputPassword = '';
  };


  isChangePass = () =>{
    this.modalTitle = 'Recuperar Contraseña' /* Crear Contraseña */;
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


