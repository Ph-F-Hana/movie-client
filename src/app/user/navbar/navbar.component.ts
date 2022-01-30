import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean = false;
  constructor(private _router: Router) {
    this.isAuth = !!localStorage.getItem('userToken');
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('adminToken');
    this._router.navigateByUrl('/login');
    this.isAuth = false;
  }

}
