import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearcontrasenaComponent } from './crearcontrasena/crearcontrasena.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotasasignaturaComponent } from './notasasignatura/notasasignatura.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'setPassword', component: CrearcontrasenaComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'subject/:code', component: NotasasignaturaComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
