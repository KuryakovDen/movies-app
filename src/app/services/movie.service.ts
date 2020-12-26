import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getFilmsList(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1');
  }

  getFilm(filmId: number ): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=0b02882c0ef4ffa99d260490427e06a8`);
  }
}
