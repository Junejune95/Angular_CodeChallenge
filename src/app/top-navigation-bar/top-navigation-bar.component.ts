import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.css']
})
export class TopNavigationBarComponent implements OnInit {
  navbarOpen:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
