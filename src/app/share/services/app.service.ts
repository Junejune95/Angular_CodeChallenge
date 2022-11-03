import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Book } from 'src/app/core/models/book';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBooks(param:string): Observable<Book[]> {
    let url = `${this.apiUrl}/volumes?q=${param}`;
    return this.http.get<any>(url).pipe(map((data: any) => {
      let items = new Array<Book>();
      items = data.items.map((item: any) => {
        console.log(item)
        let flower: Book = {
          id: item.id,
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          description: item.volumeInfo.description,
          image: item.volumeInfo.imageLinks.thumbnail,
          authors:item.volumeInfo.authors
        };
        return flower;
      })

      return items;
    }))
  }

  

}
