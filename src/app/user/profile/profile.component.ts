import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  constructor(private _userService: UserService, private _router: Router) {
    if (!localStorage.getItem('userToken'))
      this._router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    (async () => {
      let response = await this._userService.get('profile', localStorage.getItem('userToken')!);
      this.user = response.data.data.user;
    })();
  }

}
