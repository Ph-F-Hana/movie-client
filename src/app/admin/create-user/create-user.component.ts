import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(firstName: string, lastName: string, email: string, password: string, avatar: string) {
    const payload = { firstName, lastName, email, password, avatar };
    (async () => {
      let response = await this._userService.create(payload, localStorage.getItem('adminToken')!);
      this._router.navigateByUrl('/cpanl/users');
    })();
  }

}
