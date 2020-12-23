import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';


const routes: Routes = [
  { path: '', component: MoviesPageComponent },
  { path: 'film/:id', component: FilmPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
