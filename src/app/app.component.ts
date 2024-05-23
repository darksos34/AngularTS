import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  // Corrected here
  styleUrls: ['./app.component.css'] // Corrected here
})
export class AppComponent {

  title = 'client';

}
