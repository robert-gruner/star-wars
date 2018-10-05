import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatPaginator,
  MatSort,
} from '@angular/material';
import { merge } from 'rxjs';
import {
  map,
  startWith,
  switchMap,
} from 'rxjs/operators';
import {
  SwapiCharacters,
  SwapiService,
} from './swapi.service';

@Component({
  selector: 'app-people',
  styleUrls: ['./people.component.scss'],
  templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit {
  displayedColumns: string[] = ['name', 'birth_year', 'gender', 'homeworld', 'species', 'films', 'starships'];
  data: SwapiCharacters[] = [];
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.swapiService.getCharacters(this.paginator.pageIndex);
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.count;

          return data.results;
        }),
      ).subscribe(data => this.data = data);
  }
}
