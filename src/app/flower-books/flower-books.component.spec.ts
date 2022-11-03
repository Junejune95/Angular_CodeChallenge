import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerBooksComponent } from './flower-books.component';

describe('FlowerBooksComponent', () => {
  let component: FlowerBooksComponent;
  let fixture: ComponentFixture<FlowerBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
