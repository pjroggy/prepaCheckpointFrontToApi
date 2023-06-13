import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer.model';

@Injectable({
  providedIn: 'root'
})
export class PunkApiService {

  beerList: Beer[] = [];

  constructor(private http: HttpClient) { }

getAllBeers(): Observable<Beer[]>{
  return this.http.get<Beer[]>("https://api.punkapi.com/v2/beers" );
}

getBeerById(beerId: number): Observable<Beer>{
  return this.http.get<Beer>(`https://api.punkapi.com/v2/beers/${beerId}`);
}

}