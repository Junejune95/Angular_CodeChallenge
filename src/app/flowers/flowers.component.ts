import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flower } from 'src/app/core/models/flower';
import { AppService } from 'src/app/share/services/app.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
  private subscription:Subscription | undefined;
  public flowers=new Array<Flower>();


  constructor(private _service:AppService) { }

  ngOnInit(): void {
    this.getFlowers();
  }


  getFlowers(){
    this.subscription=this._service.getFlowers()
    .subscribe((res:Flower[])=>{
      console.log(res);
      this.flowers=res;
    })
  }

  ngOnDestory():void{
    this.subscription?.unsubscribe();
  }
}
