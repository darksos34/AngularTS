import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NotificationService} from "./service/notification.service";
import {ConfigService} from "./service/config.service";
import {UserHomeComponent} from "./component/test/user.component";

let ErrorInterCeptor;

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled'}),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,

      useFactory: (appConfigService: ConfigService) => {
        return () => {
          return appConfigService.loadConfiguration();
        };
      },
      deps: [ConfigService],
      multi: true,

    },
    {provide: HTTP_INTERCEPTORS, useValue: ErrorInterCeptor, multi: true},
    NotificationService,
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
