import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Genre } from '../../models/genre.model';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent implements OnInit {
  genre: Genre = new Genre();
  constructor(private _genreService: GenreService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe(async params => {
      let id: string = params.get('id')!;
      let response = await this._genreService.get(`${id}`, localStorage.getItem('adminToken')!);
      console.log({ id, response });
      this.genre = response.data.data.genre;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(name: string) {
    const payload = { name };
    (async () => {
      let response = await this._genreService.update(this.genre._id!, payload, localStorage.getItem('adminToken')!);
      this._router.navigateByUrl('/cpanel/genres')
    })();
  }

}
