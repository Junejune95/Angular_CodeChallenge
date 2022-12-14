import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopNavigationBarComponent } from 'src/app/top-navigation-bar/top-navigation-bar.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TopNavigationBarComponent
      ],
    }).compileComponents();
  });

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display navbar', () => {
    const fixture=TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-top-navigation-bar')).toBeDefined();
  })

  
});
