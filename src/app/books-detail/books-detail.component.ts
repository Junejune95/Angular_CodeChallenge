import { Component, OnInit} from '@angular/core';
import { Location } from "@angular/common";

import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  public selectedFlower:Book | undefined;

  constructor(private _loc:Location) { }

  ngOnInit(): void {
    let temp=localStorage.getItem('selectedFlower');
    this.selectedFlower=temp ? JSON.parse(temp) : undefined;
  }

  backprev(){
    this._loc.back();
  }

}
