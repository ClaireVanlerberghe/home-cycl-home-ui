import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterventionsService {

  private baseUrl = 'http://localhost:8000/intervention/';

  constructor(private http: HttpClient) { }

  getInterventions(): Observable<any> {
    return this.http.get(`${this.baseUrl}interventions/`);
  }
}
