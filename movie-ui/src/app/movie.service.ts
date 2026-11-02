import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
@Injectable({ providedIn: 'root' })
export class MovieService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/movies';
  getMovies(): Observable<Movie[]> { return this.http.get<Movie[]>(this.apiUrl); }
  search(title: string): Observable<Movie[]> { return this.http.get<Movie[]>(`${this.apiUrl}/search`, { params: { title } }); }
  getMovie(id: number): Observable<Movie> { return this.http.get<Movie>(`${this.apiUrl}/${id}`); }
}
