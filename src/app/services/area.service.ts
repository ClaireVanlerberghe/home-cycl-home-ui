import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AreasService {
  private apiUrl = 'http://localhost:3000/api/area';

  constructor(private http: HttpClient) {}

  createArea(latitude: number, longitude: number, rayon: number, Id_user: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-area`, { latitude, longitude, rayon, Id_user });
  }
}
