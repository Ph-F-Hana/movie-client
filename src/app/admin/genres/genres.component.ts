import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre.model';
import { GenreService } from '../../services/genre.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private _genresService: GenreService, private _router: Router) {
    let token: string | null = localStorage.getItem('adminToken');
    if (!token) {
      token = '';
      this._router.navigateByUrl('/cpanel/login');
    }
    (async () => {
      let response = await this._genresService.get('', token);
      this.genres = response.data.data.genre;
    })();
  }

  ngOnInit(): void {
  }

  createGenre() {
    this._router.navigateByUrl('/cpanel/create-genre');
  }

  editGenre(genre: Genre) {
    this._router.navigate(['/cpanel/genres', genre._id]);
  }

  async deleteGenre(id: string) {
    await this._genresService.delete(id, localStorage.getItem('adminToken')!);
    let index = this.genres.findIndex(genre => genre._id === id);
    this.genres.splice(index, 1);
  }

}
