import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterventionsService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getInterventions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/interventions`);
  }

  getInterventionById(id: number): Observable<any> {
    console.log('intervention_ID', id)
    return this.http.get<any>(`${this.apiUrl}/interventions/${id}`);
  }

  getUserInterventionsByEmail(email: string | null): Observable<any> {
    console.log('email envoyé', email)
    return this.http.get<any>(`${this.apiUrl}/intervention_rdv?email=${email}`);
  }

  getSlotsByIdUser(Id_user: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/slots/=${Id_user}`)
  }

}
