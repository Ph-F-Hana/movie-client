import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private _movieService: MovieService) {
    (async () => {
      let response = await this._movieService.get('');
      this.movies = response.data.data.movies;
      console.log(this.movies);
    })();
  }

  ngOnInit(): void {
  }

}
