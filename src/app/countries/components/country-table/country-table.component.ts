import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from '../../pages/by-capital-page/by-capital-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [
    CommonModule,
    ByCapitalPageComponent,
    RouterModule,
  ],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}
