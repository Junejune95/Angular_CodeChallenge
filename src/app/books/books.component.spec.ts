import { ComponentFixture, fakeAsync, TestBed, tick, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Injector } from '@angular/core';

import { BooksComponent } from './books.component';
import { AppService } from 'src/app/share/services/app.service';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { DebugElement } from '@angular/core';
import { environment } from 'src/environments/environment';

describe('BooksComponent', () => {
  const appServiceSpy = jasmine.createSpyObj<AppService>(['getBooks']);
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl;
  let injector: Injector;

  appServiceSpy.getBooks.and.callFake(function () {
    return of([
      {
        id: '1',
        title: 'test',
        subtitle: 'test',
        description: 'ttt',
        image: '',
        authors: [
          'hello',
          'hello1'
        ]
      }
    ])
  });

  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let el: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BooksComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ContentLoaderModule
      ],
      providers: [
        {
          provide: AppService,
          userValue: appServiceSpy
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;

  });

  // it('getBook() should http GET books list', () => {
  //   const books = [
  //     {
  //       id: '1',
  //       title: 'test',
  //       subtitle: 'test',
  //       description: 'ttt',
  //       image: '',
  //       authors: [
  //         'hello',
  //         'hello1'
  //       ]
  //     }
  //   ];

  //   appServiceSpy.getBooks('flowers').subscribe((res) => {
  //     expect(res).toEqual(books);
  //   });
  //   const req = httpMock.expectOne({ method: 'GET', url: `${apiUrl}/volumes?q=flowers` });

  //   // expect(req.request.params.get('booktype')).toEqual('flowers');
  //   // expect(req.request.method).toEqual("GET");
  //   req.flush(books);

  //   httpMock.verify();
  // });

  it('should create book components', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

});
