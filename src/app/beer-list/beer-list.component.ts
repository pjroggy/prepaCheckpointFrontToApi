import { Component, OnInit } from '@angular/core';
import { PunkApiService } from '../shared/punk-api.service';
import { Beer } from '../model/beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit{

  beerList: Beer[] = [];

  beer!: Beer;

  constructor (private punkApiService: PunkApiService){ }

    ngOnInit(): void{
      this.punkApiService.getAllBeers().subscribe((beers: Beer[]) => {
        this.beerList = beers;
      });
    }

}
