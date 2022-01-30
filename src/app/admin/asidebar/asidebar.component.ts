import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent implements OnInit {
  isAuth: boolean = false;

  constructor(private _router: Router) {
    this.isAuth = !!localStorage.getItem('adminToken');
    console.log(this.isAuth);
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('adminToken');
    this._router.navigateByUrl('/cpanel/login');
    this.isAuth = false;
  }

}
