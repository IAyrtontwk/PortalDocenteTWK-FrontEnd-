import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearcontrasenaComponent } from './crearcontrasena/crearcontrasena.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotasasignaturaComponent } from './notasasignatura/notasasignatura.component';



const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'setPassword', component: CrearcontrasenaComponent },
    { path: 'home', component: HomeComponent },
    { path: 'subject/:code', component: NotasasignaturaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
