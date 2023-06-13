import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [

  { path: '', redirectTo: '/beers', pathMatch: 'full'},
  { path: 'beers', component: BeerListComponent},
  { path: 'beers/:id', component: BeerDetailComponent},
  { path: '**', component: ErrorPageComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
