import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  route: string = 'users';

  constructor(private _apiService: ApiService) {
    this._apiService.route = this.route;
  }

  create(user: User, token: string) {
    return this._apiService.post('', user, token);
  }

  login(payload: {email: string, password: string}) {
    return this._apiService.post('login', payload);
  }

  get(url: string, token?: string) {
    return this._apiService.get(url, token);
  }

  update(id: string, user: Partial<User>, token: string) {
    console.log({ user });
    return this._apiService.put(`${id}`, user, token);
  }

  delete(id: string, token: string) {
    return this._apiService.delete(`${id}`, token);
  }
}
