import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { CrearcontrasenaComponent } from './crearcontrasena/crearcontrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearcontrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    

  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
