import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', component: HomeComponent}
];

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
