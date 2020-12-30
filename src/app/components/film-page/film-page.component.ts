import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


export interface IMovie {
  poster_path: string;
  original_title: string;
  genres: string[];
  production_countries: string[];
  runtime: number;
  release_date: string;
  vote_count: number;
  genre_ids?: number;
  vote_average: number;
  overview: string;
}

export interface IRecommendedMovie {
  title: string;
  poster_path: string;
}

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit {
  movie: IMovie;
  recommendedMovies: any[];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    this.route.queryParams.subscribe((filmParams: Params) => {
      this.movieService.getFilm(filmParams.filmId).subscribe((filmData: IMovie) => {
        this.movie = filmData;
       console.log(this.movie.genres);
      });

      this.movieService.getRecommendedFilmsList(filmParams.filmId).subscribe((data: any) => {
        this.recommendedMovies = data.results.slice(0, 3);
        console.log(this.recommendedMovies);
      });
    });
  }
}
