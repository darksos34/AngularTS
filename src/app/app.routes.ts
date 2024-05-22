import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// @ts-ignore
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    redirectTo: 'home',
    pathMatch: 'prefix'
  }
]


