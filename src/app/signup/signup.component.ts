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
  addressData: { address: string, latitude: number, longitude: number } | null = null;
  phone: string = '';
  password: string = '';
  Id_role: number = 3

  constructor(private authService: AuthService, private router: Router) { }

  loadAddressData(): void {
    // Récupérer les données sous forme de chaîne depuis le localStorage
    const storedAddressData = localStorage.getItem('addressData');
    
    if (storedAddressData) {
      // Si des données existent dans le localStorage, les convertir en objet JSON
      this.addressData = JSON.parse(storedAddressData);
    } else {
      console.log('Aucune donnée dans le localStorage.');
    }
  }
 
  signupButtom() {
    this.loadAddressData()
    console.log("role_id", this.Id_role)
    if (this.addressData) {
      this.authService.signup(this.email, this.firstName, this.lastName, this.addressData.address, this.phone, this.password, this.addressData.latitude,
        this.addressData.longitude, this.Id_role).subscribe(
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

  redirectTo() {
    this.router.navigate(['/login'])
  }

}
