import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {  FlowerBook } from 'src/app/core/models/flower';
import { AppService } from 'src/app/share/services/app.service';

@Component({
  selector: 'app-flower-books',
  templateUrl: './flower-books.component.html',
  styleUrls: ['./flower-books.component.css']
})
export class FlowerBooksComponent implements OnInit {
  private subscription:Subscription | undefined;
  public flowers=new Array<FlowerBook>();


  constructor(private _service:AppService,private _router:Router) { }

  ngOnInit(): void {
    this.getFlowers();
  }


  getFlowers(){
    this.subscription=this._service.getFlowers()
    .subscribe((res:FlowerBook[])=>{
      console.log(res);
      this.flowers=res;
    })
  }

  goToDetail(flower:FlowerBook){
    localStorage.setItem('selectedFlower',JSON.stringify(flower));
    this._router.navigate(['flowerbooks',flower.id]);
  }
  ngOnDestory():void{
    this.subscription?.unsubscribe();
  }
}
