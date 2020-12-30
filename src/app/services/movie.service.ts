import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { IMovie, IRecommendedMovie } from '../components/film-page/film-page.component';

const API_KEY = 'api_key=3fcc4c18d6df53c06d2776ee56df1918';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getFilmsList(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=1`);
  }

  getFilm(filmId: Params): Observable<IMovie> {
    return this.http.get<IMovie>(`https://api.themoviedb.org/3/movie/${filmId}?${API_KEY}`);
  }

  getRecommendedFilmsList(filmId: Params): Observable<IRecommendedMovie> {
    return this.http.get<IRecommendedMovie>(`https://api.themoviedb.org/3/movie/${filmId}/recommendations?${API_KEY}&language=en-US&page=1`);
  }
}
