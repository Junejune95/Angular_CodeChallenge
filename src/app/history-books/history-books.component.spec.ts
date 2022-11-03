import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBooksComponent } from './history-books.component';

describe('HistoryBooksComponent', () => {
  let component: HistoryBooksComponent;
  let fixture: ComponentFixture<HistoryBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
