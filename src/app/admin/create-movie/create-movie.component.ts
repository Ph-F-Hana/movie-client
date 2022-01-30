import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private _movieService: MovieService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(title: string, description: string, poster: string, rating: string, director: string) {
    const payload = { title, description, poster, rating: parseInt(rating), director };
    let movie = new Movie();
    movie = { ...payload };
    console.log({ payload });
    (async () => {
      let response = await this._movieService.create(movie, localStorage.getItem('adminToken')!);
      // localStorage.setItem('userToken', response.data.data.token);
      this._router.navigateByUrl('/cpanel/movies');
    })();
  }

}
