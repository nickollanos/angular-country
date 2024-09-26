import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { PaisTableComponent } from './components/pais-table/pais-table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    RouterModule,
    RouterOutlet,
    SharedModule,
    ByCapitalPageComponent,
    HttpClientModule,
    CountryTableComponent,
    ByCapitalPageComponent,
    PaisTableComponent,
  ]
})
export class CountriesModule { }
