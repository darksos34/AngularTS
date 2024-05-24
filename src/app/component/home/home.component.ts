import { Component, OnInit } from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [RouterModule, MatToolbar, MatIcon],
  styleUrls: ['./home.component.css',]
})
export class HomeComponent implements OnInit{
  ngOnInit() {
    // Initialize any necessary logic
  }

  menuOpen = false;
  showSidebar = true;
  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
  burgerMenuClick() {
    this.menuOpen = !this.menuOpen;
  }
}
