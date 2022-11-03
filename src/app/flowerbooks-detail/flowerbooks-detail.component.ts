import { Component, OnInit} from '@angular/core';
import { Location } from "@angular/common";

import { FlowerBook } from 'src/app/core/models/flower';

@Component({
  selector: 'app-flowerbooks-detail',
  templateUrl: './flowerbooks-detail.component.html',
  styleUrls: ['./flowerbooks-detail.component.css']
})
export class FlowerbooksDetailComponent implements OnInit {
  public selectedFlower:FlowerBook | undefined;

  constructor(private _loc:Location) { }

  ngOnInit(): void {
    let temp=localStorage.getItem('selectedFlower');
    this.selectedFlower=temp ? JSON.parse(temp) : undefined;
    console.log(this.selectedFlower)
  }

  backprev(){
    this._loc.back();
  }

}
