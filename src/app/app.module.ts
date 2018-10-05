import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  Route,
  RouterModule,
} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people.component';
import { SwapiService } from './swapi.service';

const routes: Route[] = [{
  path: 'people',
  component: PeopleComponent,
}];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SwapiService,
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {
}
