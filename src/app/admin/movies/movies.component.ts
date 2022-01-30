import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../models/movie.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  constructor(private _movieService: MovieService, private _router: Router) {
    let token: string | null = localStorage.getItem('adminToken');
    if (!token) {
      token = '';
      this._router.navigateByUrl('/cpanel/login')
    }
    (async () => {
      let response = await this._movieService.get('', token);
      console.log(response);
      this.movies = response.data.data.movies;
      console.log(this.movies);
    })();
  }
  ngOnInit(): void {

  }

  createMovie() {
    this._router.navigateByUrl('/cpanel/create-movie');
  }

  editMovie(movie: Movie) {
    this._router.navigate(['/cpanel/movies', movie._id]);
  }

  async deleteMovie(id: string) {
    await this._movieService.delete(id, localStorage.getItem('adminToken')!);
    let index = this.movies.findIndex(movie => movie._id === id);
    this.movies.splice(index, 1);
  }

}
