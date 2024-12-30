import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

    // Méthode pour modifier nom
    updateLastName(lastName: string, email: string |  null): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/lastName`, { lastName, email }).pipe(
        tap((response) => {
            if (response) {
            console.log('response', response)
            }
        }),
        catchError((error) => {
            throw error;
        })
        );
    }

    // Méthode pour modifier prénom
    updateFirstName(firstName: string, email: string |  null): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/firstName`, { firstName, email }).pipe(
        tap((response) => {
            if (response) {
            console.log('response', response)
            }
        }),
        catchError((error) => {
            throw error;
        })
        );
    }

    // Méthode pour modifier l'email
    updateEmail(newEmail: string, email: string |  null): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/email`, { newEmail, email }).pipe(
        tap((response) => {
            if (response) {
            console.log('response', response)
            }
        }),
        catchError((error) => {
            throw error;
        })
        );
    }

    // Méthode pour modifier l'email
    updateAddress(address: string, email: string |  null): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/address`, { address, email }).pipe(
        tap((response) => {
            if (response) {
            console.log('response', response)
            }
        }),
        catchError((error) => {
            throw error;
        })
        );
    }

     // Méthode pour modifier le téléphone
     updatePhone(phone: string, email: string |  null): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/phone`, { phone, email }).pipe(
        tap((response) => {
            if (response) {
            console.log('response', response)
            }
        }),
        catchError((error) => {
            throw error;
        })
        );
    }
 
}
