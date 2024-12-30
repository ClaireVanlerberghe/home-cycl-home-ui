import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { InterventionsService } from '../services/interventions.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  email: string | null = ''
  user: any = null

  editLastName: string = '';
  editFirstName: string = '';
  editEmail: string = '';
  editAddress: string = '';
  editPhone: string = '';

  myInterventions: any = null;
  interventionInfo: any[] = []
  

  constructor(private authService: AuthService, private userService: UserService, private interventionsService: InterventionsService) {

  }

  ngOnInit(): void {
    this.getUserWithEmail()
    this.getUserInterventions()
  }

  getUserWithEmail() {
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

  saveLastName(): void {
    console.log('New lastName:', this.editLastName);
    this.userService.updateLastName(this.editLastName, this.email).subscribe(
      (response) => {
        console.log('Changement reussi', response);
        this.user.lastName = this.editLastName;
        this.hideFields['lastName'] = false;
      },
      (error) => {
        console.error('Erreur lors de la modification', error);
        alert('Échec de la modification');
      }
    );
  }

  saveFirstName(): void {
    console.log('New firstName:', this.editFirstName);
    this.userService.updateFirstName(this.editFirstName, this.email).subscribe(
      (response) => {
        console.log('Changement reussi', response);
        this.user.firstName = this.editFirstName;
        this.hideFields['firstName'] = false;
      },
      (error) => {
        console.error('Erreur lors de la modification', error);
        alert('Échec de la modification');
      }
    );
  }

  saveEmail(): void {
    console.log('New email:', this.editEmail);
    this.userService.updateEmail(this.editEmail, this.email).subscribe(
      (response) => {
        console.log('Changement reussi', response);
        this.user.email = this.editEmail;
        this.hideFields['email'] = false;
        localStorage.setItem('user', this.editEmail)
      },
      (error) => {
        console.error('Erreur lors de la modification', error);
        alert('Échec de la modification');
      }
    );
  }

  saveAddress(): void {
    console.log('New address:', this.editAddress);
    this.userService.updateAddress(this.editAddress, this.email).subscribe(
      (response) => {
        console.log('Changement reussi', response);
        this.user.address = this.editAddress;
        this.hideFields['address'] = false;
      },
      (error) => {
        console.error('Erreur lors de la modification', error);
        alert('Échec de la modification');
      }
    );
  }

  savePhone(): void {
    console.log('New phone:', this.editPhone);
    this.userService.updatePhone(this.editPhone, this.email).subscribe(
      (response) => {
        console.log('Changement reussi', response);
        this.user.phone = this.editPhone;
        this.hideFields['phone'] = false;
      },
      (error) => {
        console.error('Erreur lors de la modification', error);
        alert('Échec de la modification');
      }
    );
  }

  getUserInterventions() {
    this.interventionsService.getUserInterventionsByEmail(this.email).subscribe(
      (response) => {
        console.log('myIntervention', response)
        this.myInterventions = response
        
        for(const intervention of this.myInterventions) {
          console.log('récup data ???', intervention)
          this.interventionsService.getInterventionById(intervention.Id_intervention).subscribe(
            (data) => {
              console.log('interventionInfo', data)
              this.interventionInfo.push(data)
              console.log('????????????', this.interventionInfo)
            }
         )
        }
        console.log('dehors', this.interventionInfo)
      },
      (error) => {
        console.error('Erreur lors de la récupération', error);
        alert('Échec de la récupération');
      }
    );
  }
 

}
