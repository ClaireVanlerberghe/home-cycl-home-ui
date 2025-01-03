import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarouselModule } from 'primeng/carousel';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogConfirmAddressComponent } from './modales/dialog-confirm-address/dialog-confirm-address.component';
import { ProfilComponent } from './profil/profil.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { RouterLink } from '@angular/router';
import { OneInterventionComponent } from './one-intervention/one-intervention.component';
import { DurationPipe } from './pipe/duration.pipe';
import { PriceFormatterPipe } from './pipe/priceFormatter';
import { DateFormatPipe } from './pipe/date.pipe';
import { DialogAreaComponent } from './modales/dialog-area/dialog-area.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DialogConfirmAddressComponent,
    ProfilComponent,
    InterventionsComponent,
    OneInterventionComponent,
    DurationPipe,
    PriceFormatterPipe,
    DateFormatPipe,
    DialogAreaComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AccueilComponent,
    CarouselModule,
    ButtonModule,
    FormsModule,
    DynamicDialogModule, 
    RouterLink, 
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
    DialogService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
