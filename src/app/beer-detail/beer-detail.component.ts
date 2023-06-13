import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Beer } from '../model/beer.model';
import { PunkApiService } from '../shared/punk-api.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit{

  // beerId: number = 0;
  myBeer: Beer = new Beer(0,"","","","");
  // beerList: Beer[] = [];

  constructor(private route: ActivatedRoute, private punkApiService: PunkApiService, private router: Router){
    

  }

  ngOnInit(): void {
      console.log(this.router.url)
      let idUrl = this.router.url.replace("/beers/", "");
      console.log(parseInt(idUrl))
      this.punkApiService.getBeerById(parseInt(idUrl)).subscribe((myReturn: any) =>

        {
          this.myBeer = myReturn[0];
          console.log(myReturn[0])
          console.log(this.myBeer);
          console.log(this.myBeer.name);
        });

      // this.route.paramMap.subscribe((params: ParamMap) => {
      //   if(params.get("id")){
      //     this.beerId = parseInt((params.get("id") as string))
      //     this.myBeer = this.beerList.find(beer => beer.id === this.beerId) as Beer;
      //   }
      // });
  }
}
