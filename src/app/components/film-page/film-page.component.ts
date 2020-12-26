import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit {
  movie: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    this.route.queryParams.subscribe((filmParams: Params) => {
      this.movieService.getFilm(filmParams.filmId).subscribe((filmData) => {
        this.movie = filmData;
      });
    });
  }
}
