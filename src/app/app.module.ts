import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { FlowerBooksComponent } from './flower-books/flower-books.component';
import { HistoryBooksComponent } from './history-books/history-books.component';
import { HttpClientModule } from '@angular/common/http';
import { FlowerbooksDetailComponent } from './flowerbooks-detail/flowerbooks-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    FlowerBooksComponent,
    HistoryBooksComponent,
    FlowerbooksDetailComponent
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
