import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  constructor(private _userService: UserService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe(async params => {
      let id: string = params.get('id')!;
      let response = await this._userService.get(`${id}`, localStorage.getItem('adminToken')!);
      this.user = response.data.data.user;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(firstName: string, lastName: string, password: string, avatar: string) {
    const payload = { firstName, lastName, password, avatar };
    (async () => {
      const update: Partial<User> = new User();
      update.firstName = payload.firstName;
      update.lastName = payload.lastName;
      update.password = payload.password;
      update.avatar = payload.avatar;
      let response = await this._userService.update(this.user._id!, payload, localStorage.getItem('adminToken')!);
      this._router.navigateByUrl('/cpanel/users')
    })();
  }

}
