import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CountryTableComponent
],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {

  }

  searchByCapital( term: string ): void {
    this.countriesService.searchCapital( term )
    .subscribe( countries => {
    this.countries = countries;
    });
  }
}
