import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit {
  movie: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getFilm(733317).subscribe((data) => {
      this.movie = data;
      console.log(this.movie);
    });
  }
}
