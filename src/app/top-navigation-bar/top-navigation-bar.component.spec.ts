import { ComponentFixture, fakeAsync, TestBed, tick, } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

import { TopNavigationBarComponent } from './top-navigation-bar.component';

describe('TopNavigationBarComponent', () => {
  let route: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({});
  let params: Subject<Params>;
  let component: TopNavigationBarComponent;
  let fixture: ComponentFixture<TopNavigationBarComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNavigationBarComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: params
          },
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopNavigationBarComponent);
    component = fixture.componentInstance;

    route = TestBed.inject(ActivatedRoute);


    fixture.detectChanges();
  });

  it('should create top-navigation-bar', () => {
    expect(component).toBeTruthy();
  });

  // it('should change on route param change', fakeAsync(() => {
  //   // this calls ngOnInit and we subscribe
  //   fixture.detectChanges();

  //   params.next({ 'type': 'flowers' });

  //   // tick to make sure the async observable resolves
  //   tick();

  //   expect(component._pageToShow).toBe('Terry');

  //   params.next({ 'area': 'history' });
  //   tick();

  //   expect(component._pageToShow).toBe('Billy');
  // }));

  // it('should be history', (done) => { // add done to let Jasmine know when you're done with the test
  //   paramsSubject.next({ type:'history'});
  //   route.params.subscribe(params => {
  //     console.log(params)
  //     expect(params['type']).toBe('history');
  //     done();
  //   });
  // });

  // it('should be flowers', (done) => { // add done to let Jasmine know when you're done with the test
  //   paramsSubject.next({ type:'flowers'});
    
  //   route.params.subscribe(params => {
  //     expect(params['type']).toBe('flowers');
  //     done();
  //   });
  // });






});
