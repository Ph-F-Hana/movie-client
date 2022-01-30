import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { GenresComponent } from './genres/genres.component';
import { LoginComponent } from './login/login.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateGenreComponent } from './create-genre/create-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'users/:id', component: UpdateUserComponent },
  { path: 'create-movie', component: CreateMovieComponent },
  { path: 'movies/:id', component: UpdateMovieComponent },
  { path: 'create-genre', component: CreateGenreComponent },
  { path: 'genres/:id', component: UpdateGenreComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [
    UsersComponent,
    MoviesComponent,
    GenresComponent,
    LoginComponent,
    AsidebarComponent,
    NavbarComponent,
    CreateGenreComponent,
    UpdateGenreComponent,
    CreateUserComponent,
    UpdateUserComponent,
    CreateMovieComponent,
    UpdateMovieComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
