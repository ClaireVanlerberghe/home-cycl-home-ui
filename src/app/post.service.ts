import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8000/api/posts/';  // URL de l'API Django

  constructor(private http: HttpClient) {}

  // Obtenir tous les posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  // Ajouter un nouveau post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  // Mettre à jour un post
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}${post.id}/`, post);
  }

  // Supprimer un post
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
