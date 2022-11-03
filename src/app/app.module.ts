import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { FlowersComponent } from './flowers/flowers.component';
import { HistoryBooksComponent } from './history-books/history-books.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    FlowersComponent,
    HistoryBooksComponent
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
