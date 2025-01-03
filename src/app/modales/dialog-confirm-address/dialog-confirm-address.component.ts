import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-confirm-address',
  templateUrl: './dialog-confirm-address.component.html',
  styleUrls: ['./dialog-confirm-address.component.scss']
})
export class DialogConfirmAddressComponent implements OnInit {

  address: any;
  latitude: number | null = null; // Latitude obtenue
  longitude: number | null = null; // Longitude obtenue
  error: string | null = null;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private http: HttpClient) {
    this.address = this.config.data.address.user.address;
  }

  ngOnInit(): void {}

  fetchCoordinates() {

    // Appel à l'API Adresse pour convertir l'adresse en coordonnées
    const apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(this.address)}&limit=1`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        if (data.features && data.features.length > 0) {
          const coordinates = data.features[0].geometry.coordinates;
          this.longitude = coordinates[0]; // Longitude
          this.latitude = coordinates[1]; // Latitude
          this.error = null; // Pas d'erreur
          this.saveToLocalStorage();
          this.ref.close(DialogConfirmAddressComponent)
        } else {
          this.error = 'Aucune coordonnée trouvée pour cette adresse.';
        }
      },
      (error) => {
        console.error('Erreur lors de l’appel à l’API :', error);
        this.error = 'Une erreur est survenue lors de la récupération des coordonnées.';
      }
    );
  }
  
  saveToLocalStorage() {
    const addressData = {
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude,
    };

    // Convertir en JSON et stocker dans le localStorage
    localStorage.setItem('addressData', JSON.stringify(addressData));
    console.log('Données sauvegardées dans le localStorage:', addressData);
  }

}
