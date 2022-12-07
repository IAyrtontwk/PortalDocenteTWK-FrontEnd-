import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { CrearcontrasenaComponent } from './crearcontrasena/crearcontrasena.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { NotasasignaturaComponent } from './notasasignatura/notasasignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
  providers: [CookieService],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
