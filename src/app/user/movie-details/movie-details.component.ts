import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string = '';
  movie?: Movie;

  constructor(private _activatedRoute: ActivatedRoute, private _movieService: MovieService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.movieId = params.get('id')!;
      (async () => {
        let response = await this._movieService.get(`${this.movieId}`);
        console.log(response.data.data?.movie)
        this.movie = response.data.data.movie!;
      })();
    })
  }

}
