import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  // Méthode pour s'inscrire
  signup(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { name, email, password });
  }

  // Méthode pour se connecter
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token); 
        }
      }),
      catchError((error) => {
        throw error;
      })
    );
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
