import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private _userService: UserService, private _router: Router) {
    let token: string | null = localStorage.getItem('adminToken');
    if (!token) {
      token = '';
      this._router.navigateByUrl('/cpanel/login');
    }
    (async () => {
      let response = await this._userService.get('', token);
      this.users = response.data.data.users;
    })();
  }

  ngOnInit(): void {
  }

  createUser() {
    this._router.navigateByUrl('/cpanel/create-user');
  }

  editUser(user: User) {
    this._router.navigate(['/cpanel/users', user._id]);
  }

  async deleteUser(id: string) {
    await this._userService.delete(id, localStorage.getItem('adminToken')!);
    let index = this.users.findIndex(user => user._id === id);
    this.users.splice(index, 1);
  }

}
