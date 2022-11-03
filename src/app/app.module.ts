import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { BooksComponent } from './books/books.component';

import { BooksDetailComponent } from './books-detail/books-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    BooksComponent,
    BooksDetailComponent
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
