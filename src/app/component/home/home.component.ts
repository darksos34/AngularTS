import { Component, OnInit } from '@angular/core';

@Component({

  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent implements OnInit{
  ngOnInit() {
    // Initialize any necessary logic
  }
  showMenu = false; // Add this line
  menuOpen = false; // Add this line
  showSidebar = false;
  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
  burgerMenuClick() {
    this.menuOpen = !this.menuOpen; // Toggle the menuOpen state
    // You can now use this.menuOpen to show or hide your menu
  }


}


