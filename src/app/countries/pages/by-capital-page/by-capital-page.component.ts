import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { LoadingSpinnnerComponent } from "../../../shared/components/loading-spinnner/loading-spinnner.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CountryTableComponent,
    LoadingSpinnnerComponent
],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesService: CountriesService ) {

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ): void {

    this.isLoading = true;

    this.countriesService.searchCapital( term )
    .subscribe( countries => {
    this.countries = countries;
    this.isLoading = false;
    });
  }
}
