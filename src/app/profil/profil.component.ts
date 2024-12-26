import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  email: string | null = ''
  user: any = null
  

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.getUserWithEmail()
  }

  getUserWithEmail() {
    console.log('user', localStorage.getItem('user'))

    this.email = localStorage.getItem('user')
    this.authService.getUser(this.email).subscribe(
          (response) => {
            this.user = response.user
          },
          (error) => {
            console.error('Erreur lors de la récupération utilisateur', error);
            alert('Échec récupération utilisateur');
          }
        );
  }

  hideFields: { [key: string]: boolean } = {
    lastName: false,
    firstName: false,
    email: false,
    address: false,
    phone: false
  }

  toggleField(fieldName: string): void {
    this.hideFields[fieldName] = !this.hideFields[fieldName];
  }

}
