import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerbooksDetailComponent } from './flowerbooks-detail.component';

describe('FlowerbooksDetailComponent', () => {
  let component: FlowerbooksDetailComponent;
  let fixture: ComponentFixture<FlowerbooksDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerbooksDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerbooksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
