import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksDetailComponent } from 'src/app/books-detail/books-detail.component';
import { BooksComponent } from 'src/app/books/books.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';




const routes: Routes = [
  {
    path: 'books/:booktype',
    component: BooksComponent,
  },

  {
    path:'books/:booktype/:id',
    component:BooksDetailComponent
  },

  {
    path: '',
    redirectTo: 'books/flowers',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
