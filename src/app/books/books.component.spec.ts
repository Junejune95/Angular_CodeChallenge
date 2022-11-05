import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { AppService } from 'src/app/share/services/app.service';
import { ContentLoaderModule } from '@ngneat/content-loader';

import { BooksComponent } from './books.component';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/core/models/book';



describe('BooksComponent', () => {
  const appServiceSpy = jasmine.createSpyObj<AppService>(['getBooks']);
  let httpMock: HttpTestingController;
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let el: DebugElement;
  let router: Router;
  let activeRoute: ActivatedRoute;

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
          provide: ActivatedRoute,
          useValue:
          {
            snapshot: {
              params: {
                'booktype': 'flowers',
              }
            }
          }
        },
        {
          provide: AppService,
          useValue: appServiceSpy
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    activeRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  appServiceSpy.getBooks.and.callFake(function () {
    return of([
      {
        id: '1',
        title: 'test',
        subtitle: 'test',
        description: 'ttt',
        image: 'http://books.google.com/books/content?id=UYNMAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        authors: [
          'hello',
          'hello1'
        ]
      }
    ])
  })


  it('should create book components', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it('should have book type param in route', () => {
    activeRoute.snapshot.params['booktype'] = 'flowers';
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.bookType).toBe('flowers');
  });

  it('should return the books list when `getBook()` function call', () => {
    const dummyBooks = [
      {
        id: '1',
        title: 'test',
        subtitle: 'test',
        description: 'ttt',
        image: 'http://books.google.com/books/content?id=UYNMAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        authors: [
          'hello',
          'hello1'
        ]
      }
    ];

    appServiceSpy.getBooks('history').subscribe((res) => {
      expect(res).toEqual(dummyBooks);
      expect(res.length).toBe(1);
    });
  });

  it('should show loading when api data fetching', () => {
    component.isLoading = true;
    fixture.detectChanges();
    // should be rendered initially
    expect(el.query(By.css('#loadingCard')).nativeElement).toBeTruthy();
    expect(el.query(By.css('#bookCard'))).toBeNull();
  });

  it('should show books list after api data fetched', () => {
    component.isLoading = false;
    fixture.detectChanges();
    // should be rendered initially
    expect(el.query(By.css('#loadingCard'))).toBeNull();
    expect(el.query(By.css('#bookCard')).nativeElement).toBeTruthy();
  });


  it('should render book cover image', async () => {
    const img =
      fixture.debugElement.nativeElement.querySelectorAll('img');
    expect(img[0]).not.toBeNull();
    appServiceSpy.getBooks('history').subscribe((res) => {
      expect(res[0].image == img[0].src).toBe(true);;
    });
  });

  it('should call `goToDetail` function when image tag click', fakeAsync(() => {
    spyOn(component, 'goToDetail');

    let image = fixture.debugElement.nativeElement.querySelector('img');
    image.click();
    tick();
    expect(component.goToDetail).toHaveBeenCalled();

  }));

  it('should navigate to book detail', () => {
    const spy = spyOn(router, 'navigate');

    let selectedBook: Book = {
      id: '1',
      title: 'test',
      subtitle: 'test',
      description: 'ttt',
      image: 'http://books.google.com/books/content?id=UYNMAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      authors: [
        'hello',
        'hello1'
      ]
    };
    activeRoute.snapshot.params['booktype'] = 'flowers';

    component.goToDetail(selectedBook);

    const url = spy.calls.first().args[0];
    expect(url).toEqual(['books', component.bookType, selectedBook.id]);
  });
});
