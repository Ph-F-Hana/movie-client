import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  route: string = 'genres';
  constructor(private _apiService: ApiService) {
    this._apiService.route = this.route;
  }

  create(genre: Genre, token?: string) {
    return this._apiService.post('', genre, token);
  }

  get(url: string, token?: string) {
    return this._apiService.get(url, token);
  }

  update(id: string, genre: Partial<Genre>, token?: string) {
    return this._apiService.put(`${id}`, genre, token);
  }

  delete(id: string, token?: string) {
    return this._apiService.delete(`${id}`, token);
  }
}
