import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerBooksComponent } from 'src/app/flower-books/flower-books.component';
import { FlowerbooksDetailComponent } from 'src/app/flowerbooks-detail/flowerbooks-detail.component';

import { HistoryBooksComponent } from 'src/app/history-books/history-books.component';

const routes: Routes = [
  {
    path: 'flowerbooks',
    component: FlowerBooksComponent,
  },
  {
    path:'flowerbooks/:id',
    component:FlowerbooksDetailComponent
  },
  {
    path: 'historybooks',
    component: HistoryBooksComponent
  },
  {
    path: '',
    redirectTo: 'flowers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
