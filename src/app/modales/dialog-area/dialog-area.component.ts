import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AreasService } from 'src/app/services/area.service';

@Component({
  selector: 'app-dialog-area',
  templateUrl: './dialog-area.component.html',
  styleUrls: ['./dialog-area.component.scss']
})
export class DialogAreaComponent implements OnInit{

  searchQuery: string = '';
  suggestions: any[] = [];
  showNoSuggestions: boolean = false;

  latitude: number = 0;
  longitude: number = 0;
  rayon: number = 0

  Id_user: any = null

  constructor(public ref: DynamicDialogRef, private http: HttpClient, private areasService: AreasService,  public config: DynamicDialogConfig) {
    this.Id_user = config.data.user.Id_user
  }

  ngOnInit(): void {
    
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
        console.log('data adresse', data)
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

    const [longitude, latitude] = suggestion.geometry.coordinates;
  
    this.latitude = latitude
    this.longitude = longitude
  
    console.log('latitude', this.latitude)
    console.log('longitude', this.longitude)
  }
  
  addSuggestion() {
    console.log('latitude', this.latitude);
    console.log('longitude', this.longitude);
    console.log('rayon', this.rayon);
    console.log('data user', this.Id_user);
  
    this.areasService.createArea(this.latitude, this.longitude, this.rayon, this.Id_user).subscribe(
      (res) => {
        console.log('Requête réussie :', res);
  
        if (res && res.affectedRows > 0) {
          console.log('Création réussie');
          this.ref.close()
        }
      },
      (error) => {
        console.error('Erreur lors de la création :', error);
        alert('Une erreur s’est produite lors de la création.');
      }
    );
  }
}
