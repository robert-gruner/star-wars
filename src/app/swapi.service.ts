import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface SwapiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface SwapiCharacters {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created:  string;
  edited:  string;
  url:  string;
}

@Injectable()
export class SwapiService {
  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<SwapiResponse<SwapiCharacters>> {
    const href = 'https://swapi.co/api/people/';
    const requestUrl =
            `${href}?page=${page + 1}`;

    return this.http.get<SwapiResponse<SwapiCharacters>>(requestUrl);
  }
}
