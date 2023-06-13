import { Component, Input } from '@angular/core';
import { Beer } from '../model/beer.model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent {

  @Input()
  beerChild!: Beer; 

  constructor(){

  }
}
