import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/core/models/book';
import { AppService } from 'src/app/share/services/app.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  private subscription: Subscription | undefined;
  public books = new Array<Book>();
  public bookType: string = 'flowers';
  public isLoading: boolean = false;

  constructor(private _service: AppService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.bookType = this._activeRoute.snapshot.params['booktype'];
    this.getBooks();
  }


  getBooks() {
    this.subscription = this._service.getBooks(this.bookType)
      .subscribe((res: Book[]) => {
        this.books = res;
        this.isLoading = false;
      })
  }

  goToDetail(book: Book) {
    localStorage.setItem('selectedBook', JSON.stringify(book));
    this._router.navigate(['books', this.bookType, book.id]);
  }

  ngOnDestory(): void {
    this.subscription?.unsubscribe();
  }
}
