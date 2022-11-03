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
  public flowers = new Array<Book>();
  private param: string | undefined;
  private bookType: string = 'Flowers';
  public isLoading:boolean=false;

  constructor(private _service: AppService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.isLoading=true;
    this.bookType = this._activeRoute.snapshot.params['booktype'];
    this.getFlowers();
  }


  getFlowers() {
    this.subscription = this._service.getBooks(this.bookType)
      .subscribe((res: Book[]) => {
        this.flowers = res;
        this.isLoading=false;
      })
  }

  goToDetail(flower: Book) {
    localStorage.setItem('selectedFlower', JSON.stringify(flower));
    this._router.navigate(['books', this.bookType,flower.id]);
  }
  ngOnDestory(): void {
    this.subscription?.unsubscribe();
  }
}
