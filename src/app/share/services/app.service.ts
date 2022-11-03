import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Flower } from 'src/app/core/models/flower';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFlowers(): Observable<Flower[]> {
    let url = `${this.apiUrl}/volumes?q=flowers`;
    return this.http.get<any>(url).pipe(map((data: any) => {
      let items = new Array<Flower>();
      items = data.items.map((item: any) => {
        console.log(item)
        let flower: Flower = {
          id: item.id,
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          description: item.volumeInfo.description,
          image: item.volumeInfo.imageLinks.thumbnail,
        };
        return flower;
      })

      return items;
    }))
  }

}
