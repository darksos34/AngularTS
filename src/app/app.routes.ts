import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {UserHomeComponent} from "./component/test/user.component";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserHomeComponent,
    title: 'User Home'
  },
  {path: '**', redirectTo: 'home'}
]


