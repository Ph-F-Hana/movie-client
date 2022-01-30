import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) {
    if (!!localStorage.getItem('adminToken')) this._router.navigateByUrl('/cpanel/movies')
  }

  ngOnInit(): void {
  }

  onSubmit(email: string, password: string) {
    const payload = { email, password };
    (async () => {
      let response = await this._userService.login(payload);
      localStorage.setItem('adminToken', response.data.data.token);
      this._router.navigateByUrl('/cpanel/movies')
    })();
  }

}
