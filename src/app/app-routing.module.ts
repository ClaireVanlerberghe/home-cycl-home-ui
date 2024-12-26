import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfilComponent } from './profil/profil.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { OneInterventionComponent } from './one-intervention/one-intervention.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'entretiens', component: InterventionsComponent },
  { path: 'entretien/:id', component: OneInterventionComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
