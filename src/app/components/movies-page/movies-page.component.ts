import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {IMovie} from '../film-page/film-page.component';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies: IMovie[];
  filmPlaceholder = 'Films search';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getFilmsList().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
