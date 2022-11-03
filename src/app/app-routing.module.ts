import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowersComponent } from 'src/app/flowers/flowers.component';
import { HistoryBooksComponent } from 'src/app/history-books/history-books.component';

const routes: Routes = [
  {
    path: 'flowers',
    component: FlowersComponent
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
