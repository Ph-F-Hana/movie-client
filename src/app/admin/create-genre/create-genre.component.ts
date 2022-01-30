import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private _genreService: GenreService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(name: string) {
    const payload = { name };
    (async () => {
      let response = await this._genreService.create(payload, localStorage.getItem('adminToken')!);
      this._router.navigateByUrl('/cpanel/genres')
    })();
  }

}
