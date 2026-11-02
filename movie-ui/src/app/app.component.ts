import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  private readonly movieService = inject(MovieService);
  movies: Movie[] = []; allMovies: Movie[] = []; selectedMovie?: Movie; searchTerm = ''; loading = true; error = ''; activeSection = 'catalog'; language = 'ES'; watchlist = new Set<number>();
  ngOnInit(): void { this.loadMovies(); }
  loadMovies(): void { this.loading = true; this.movieService.getMovies().subscribe({ next: movies => { this.movies = movies; this.allMovies = movies; this.loading = false; }, error: () => { this.error = 'No se pudo cargar el catálogo. ¿Está activo el backend?'; this.loading = false; } }); }
  search(): void { this.loading = true; this.movieService.search(this.searchTerm).subscribe(movies => { this.movies = movies; this.loading = false; }); }
  select(movie: Movie): void { this.movieService.getMovie(movie.id).subscribe(result => this.selectedMovie = result); }
  closeDetail(): void { this.selectedMovie = undefined; }
  toggleWatchlist(movie: Movie, event?: Event): void { event?.stopPropagation(); this.watchlist.has(movie.id) ? this.watchlist.delete(movie.id) : this.watchlist.add(movie.id); }
  isInWatchlist(movie: Movie): boolean { return this.watchlist.has(movie.id); }
  showSection(section: string): void { this.activeSection = section; if (section === 'catalog') this.movies = this.allMovies; if (section === 'watchlist') this.movies = this.allMovies.filter(movie => this.watchlist.has(movie.id)); }
  get averageRating(): string { return this.allMovies.length ? (this.allMovies.reduce((sum, movie) => sum + movie.rating, 0) / this.allMovies.length).toFixed(1) : '0.0'; }
  get topGenre(): string { const counts: { [genre: string]: number } = {}; this.allMovies.forEach(movie => counts[movie.genre] = (counts[movie.genre] || 0) + 1); return Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0] || '—'; }
  get watchlistMovies(): number { return this.watchlist.size; }
  onPosterError(event: Event): void { const image = event.target as HTMLImageElement; image.onerror = null; image.src = '/assets/posters/cinema.svg'; }
}
