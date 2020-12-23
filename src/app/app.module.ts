import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import {HttpClientModule} from '@angular/common/http';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    FilmPageComponent,
    FavoritesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
