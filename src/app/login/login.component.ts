import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogConfirmAddressComponent } from '../modales/dialog-confirm-address/dialog-confirm-address.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  address: string = '';
  email: string = '';
  password: string = '';

  ref: DynamicDialogRef | undefined;

  searchQuery: string = '';
  suggestions: any[] = [];
  showNoSuggestions: boolean = false;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, public dialogService: DialogService) { }

  connexionButtom() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Connexion réussie', response);
        this.router.navigate(['/']);
        this.ref = this.dialogService.open(DialogConfirmAddressComponent, 
          { 
            data: { address: response }, 
            header: 'Je valide mon adresse',
            width: '27%',
            height: '27%',
            closable: false,
        });
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
        alert('Échec de la connexion');
      }
    );
  }

  onSearch() {
    if (this.searchQuery.length < 3) {
      this.suggestions = [];
      this.showNoSuggestions = false;
      return;
    }

    const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
      this.searchQuery
    )}&limit=5&autocomplete=1`;

    this.http.get(url).subscribe(
      (data: any) => {
        if (data.features.length > 0) {
          this.suggestions = data.features;
          this.showNoSuggestions = false;
        } else {
          this.suggestions = [];
          this.showNoSuggestions = true;
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des suggestions :', error);
      }
    );
  }

  selectSuggestion(suggestion: any) {
    this.searchQuery = suggestion.properties.label;
    this.suggestions = [];
    this.showNoSuggestions = false;
    console.log('select suggestion', this.searchQuery)
  }

  addSuggestionLocalStorage(searchQuery: string) {
    localStorage.setItem("address", searchQuery)
  }

}
