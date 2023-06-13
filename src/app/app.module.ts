import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerListComponent } from './beer-list/beer-list.component';
import { CreatBeerComponent } from './creat-beer/creat-beer.component';
import { FormsModule } from '@angular/forms';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    CreatBeerComponent,
    BeerCardComponent,
    BeerDetailComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
