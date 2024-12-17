import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { RegionTableComponent } from '../../components/region-table/region-table.component';
import { Region } from '../../interfaces/region.type';

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
export class ByRegionPageComponent implements OnInit {

  public regiones: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor( private countriesService: CountriesService ) {

  }

  ngOnInit(): void {
    this.regiones = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ): void {

    this.selectedRegion = region;

    this.countriesService.searchRegion( region )
    .subscribe( regiones => {
    this.regiones = regiones;
    });
  }

}
