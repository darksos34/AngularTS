import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatIcon, RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected here
})
export class AppComponent {

  title = 'client';

}
