import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  // Méthode pour s'inscrire
  signup(email: string, firstName: string, lastName: string, address: string | null, phone: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { email, firstName, lastName, address, phone, password });
  }

  // Méthode pour se connecter
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        if (response.token) {
          console.log('response', response)
          localStorage.setItem('token', response.token); 
          localStorage.setItem('user', response.user.email);
        }
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  // Méthode pour récuperer un utilisateur
  getUser(email: string | null): Observable<any> {
    let params = new HttpParams();
    if (email !== null) {
      params = params.set('email', email);
      console.log('récup user ?', email)
    }
    return this.http.get<any>(`${this.apiUrl}/getUser`, { params });
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Méthode pour se déconnecter
  logout(): void {
    localStorage.removeItem('token');
  }

  // Méthode pour obtenir le token
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
