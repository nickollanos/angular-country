import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { PaisTableComponent } from '../../components/pais-table/pais-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    PaisTableComponent,
  ],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public paises: Country[] = [];

  constructor( private countriesService: CountriesService ) {

  }

  searchByCountry( term: string ): void {
    this.countriesService.searchCountry( term )
    .subscribe( paises => {
    this.paises = paises;
    });
  }

}
