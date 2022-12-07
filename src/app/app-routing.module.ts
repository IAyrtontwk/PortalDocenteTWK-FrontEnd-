import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearcontrasenaComponent } from './crearcontrasena/crearcontrasena.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotasComponent } from './notas/notas.component';



const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'notas', component: NotasComponent},
    { path: 'setPassword', component: CrearcontrasenaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
