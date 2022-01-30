import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {
  abstract route: string;
  constructor() { }

  get(url: string, token?: string) {
    return axios.get(`${environment.apiURL}/${this.route}/${url}`, {
      headers: {
        Authorization: token?? ''
      }
    });
  }

  post(url: string, payload: Object, token?: string) {
    return axios.post(`${environment.apiURL}/${this.route}/${url}`, payload, {
      headers: {
        Authorization: token?? ''
      }
    });
  }

  put(url: string, payload: Object, token?: string) {
    return axios.put(`${environment.apiURL}/${this.route}/${url}`, payload, {
      headers: {
        Authorization: token?? ''
      }
    });
  }

  delete(url: string, token?: string) {
    return axios.delete(`${environment.apiURL}/${this.route}/${url}`, {
      headers: {
        Authorization: token?? ''
      }
    });
  }
}
