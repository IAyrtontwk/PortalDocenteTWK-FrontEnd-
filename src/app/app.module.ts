import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearcontrasenaComponent } from './crearcontrasena/crearcontrasena.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotasComponent } from './notas/notas.component';
import { NotasasignaturaComponent } from './notasasignatura/notasasignatura.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotasComponent,
    CrearcontrasenaComponent,
    HomeComponent,
    StudentsComponent,
    NotasasignaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
