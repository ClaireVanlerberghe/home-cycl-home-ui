import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  address: string | null = '';
  phone: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }
 
  signupButtom() {
    this.address = localStorage.getItem('address')
    this.authService.signup(this.email, this.firstName, this.lastName, this.address, this.phone, this.password).subscribe(
      (response) => {
        console.log('Inscription réussie', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
        alert('Échec de la connexion');
      }
    );
  }

}
