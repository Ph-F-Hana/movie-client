import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  movie: Movie = new Movie();
  constructor(private _movieService: MovieService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe(async params => {
      let id: string = params.get('id')!;
      let response = await this._movieService.get(`${id}`);
      this.movie = response.data.data.movie;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(title: string, description: string, poster: string, rating: string, director: string) {
    const payload: Movie = { title, description, poster, rating: parseInt(rating), director };
    (async () => {
      this.movie.title = payload.title;
      this.movie.description = payload.description;
      this.movie.poster = payload.poster;
      this.movie.rating = payload.rating;
      this.movie.director = payload.director;
      let response = await this._movieService.update(this.movie._id!, payload, localStorage.getItem('adminToken')!);
      // localStorage.setItem('userToken', response.data.data.token);
      this._router.navigateByUrl('/cpanel/movies')
    })();
  }

}
