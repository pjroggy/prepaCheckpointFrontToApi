import { Component } from '@angular/core';
import { PunkApiService } from '../shared/punk-api.service';

@Component({
  selector: 'app-creat-beer',
  templateUrl: './creat-beer.component.html',
  styleUrls: ['./creat-beer.component.scss']
})
export class CreatBeerComponent {

  newBeer: String = "";

  constructor(private createBeerService: PunkApiService){ }

  // sendBeerToService(){
  //   this.createBeerService.addBeer(this.newBeer);  
  // }

}
