import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Movie } from './movie.model';

describe('AppComponent movie experience', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let http: HttpTestingController;
  const movies: Movie[] = [
    { id: 1, title: 'The Matrix', genre: 'Science Fiction', year: 1999, synopsis: 'A hidden reality.', posterUrl: '/assets/posters/cinema.svg', rating: 8.7 },
    { id: 2, title: 'Amélie', genre: 'Romance', year: 2001, synopsis: 'A Parisian story.', posterUrl: '/assets/posters/cinema.svg', rating: 8.3 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent], providers: [provideHttpClient(), provideHttpClientTesting()] }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    http = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    http.expectOne('http://localhost:8080/api/movies').flush(movies);
    fixture.detectChanges();
  });

  afterEach(() => http.verify());

  it('loads and renders the catalog', () => {
    expect(component.allMovies.length).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('The Matrix');
    expect(fixture.nativeElement.textContent).toContain('Science Fiction');
  });

  it('searches movies by title', () => {
    component.searchTerm = 'matrix';
    component.search();
    http.expectOne('http://localhost:8080/api/movies/search?title=matrix').flush([movies[0]]);
    expect(component.movies).toEqual([movies[0]]);
  });

  it('opens the movie detail from the selected movie', () => {
    component.select(movies[0]);
    http.expectOne('http://localhost:8080/api/movies/1').flush(movies[0]);
    expect(component.selectedMovie?.title).toBe('The Matrix');
  });

  it('adds and removes movies from My List', () => {
    component.toggleWatchlist(movies[0]);
    expect(component.isInWatchlist(movies[0])).toBeTrue();
    component.showSection('watchlist');
    expect(component.movies).toEqual([movies[0]]);
    component.toggleWatchlist(movies[0]);
    expect(component.isInWatchlist(movies[0])).toBeFalse();
  });

  it('calculates catalog statistics', () => {
    expect(component.averageRating).toBe('8.5');
    expect(component.topGenre).toBe('Science Fiction');
  });
});
