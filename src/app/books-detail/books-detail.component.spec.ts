import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SpyLocation } from '@angular/common/testing';

import { Book } from 'src/app/core/models/book';

import { BooksDetailComponent } from './books-detail.component';

describe('BooksDetailComponent', () => {
  let component: BooksDetailComponent;
  let fixture: ComponentFixture<BooksDetailComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [BooksDetailComponent],

    })
      .compileComponents();

    fixture = TestBed.createComponent(BooksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create book detail component', () => {
    expect(component).toBeTruthy();
  });



  it('should not be null `selectedBook` on detail', () => {
    let mockBook: Book = {
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
    let selectedBook = component.selectedBook;
    expect(selectedBook).not.toBeNull();
    expect(selectedBook).toEqual(mockBook);
  });


  it('should call `backprev` function when button click', fakeAsync(() => {
    spyOn(component, 'backprev');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    fixture.detectChanges();

    expect(component.backprev).toHaveBeenCalled();
  }));
});
