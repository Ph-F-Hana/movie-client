import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  route: string = 'movies';
  constructor(private _apiService: ApiService) {
    this._apiService.route = this.route;
  }

  create(movie: Movie, token: string) {
    return this._apiService.post('',movie, token);
  }

  get(url: string, token?: string) {
    return this._apiService.get(url, token);
  }

  update(id: string, movie: Movie, token: string) {
    return this._apiService.put(`${id}`, movie, token);
  }

  delete(id: string, token: string) {
    return this._apiService.delete(`${id}`, token);
  }
}
