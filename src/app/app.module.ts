import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  Route,
  RouterModule,
} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatDialogModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people.component';
import { SwapiService } from './swapi.service';
import { ShowMoreComponent } from './show-more.component';
import { DataComponent } from './data.component';

const routes: Route[] = [{
  path: 'people',
  component: PeopleComponent,
}];

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    PeopleComponent,
    ShowMoreComponent,
  ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SwapiService,
  ],
  entryComponents: [DataComponent],
  bootstrap:    [AppComponent],
})
export class AppModule {
}
