import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { RegionTableComponent } from '../../components/region-table/region-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    RegionTableComponent
  ],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public regiones: Country[] = [];

  constructor( private countriesService: CountriesService ) {

  }

  searchByRegion( term: string ): void {
    this.countriesService.searchRegion( term )
    .subscribe( regiones => {
    this.regiones = regiones;
    });
  }

}
