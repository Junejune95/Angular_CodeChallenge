import { Component, OnInit} from '@angular/core';
import { Location } from "@angular/common";

import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  public selectedBook:Book | undefined;

  constructor(public _loc:Location) { }

  ngOnInit(): void {
    let temp=localStorage.getItem('selectedBook');
    this.selectedBook=temp ? JSON.parse(temp) : undefined;
  }

  backprev(){
    localStorage.removeItem('selectedBook');
    this._loc.back();
  }

}
