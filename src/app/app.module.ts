import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import {HttpClientModule} from '@angular/common/http';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
