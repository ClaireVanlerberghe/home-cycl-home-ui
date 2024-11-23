import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AccueilComponent,
    SignupComponent,
    CarouselModule,
    InputTextModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
