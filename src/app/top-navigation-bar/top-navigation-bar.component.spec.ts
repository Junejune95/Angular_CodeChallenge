import { ComponentFixture, fakeAsync, inject, TestBed, tick, } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { RouterLinkWithHref } from '@angular/router';
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

  it('should have a link to `books/flowers` or `books/history`', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      console.log(de.properties['href'])
      return de.properties['href'].includes('/books/flowers') || de.properties['href'].includes('/books/history');
    });
    expect(index).toBeGreaterThan(-1);
  });

});
