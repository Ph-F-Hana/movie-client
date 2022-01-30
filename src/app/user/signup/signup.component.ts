import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) {
    if (!!localStorage.getItem('userToken'))
      this._router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

  onSubmit(firstName: string, lastName: string, email: string, password: string, avatar: string) {
    const payload = { firstName, lastName, email, password, avatar };
    (async () => {
      let response = await this._userService.create(payload, localStorage.getItem('userToken')!);
      this._router.navigateByUrl('/login')
    })();
  }

}
