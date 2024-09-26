import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ByCountryPageComponent } from '../../pages/by-country-page/by-country-page.component';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'pais-table',
  standalone: true,
  imports: [
    CommonModule,
    ByCountryPageComponent,
  ],
  templateUrl: './pais-table.component.html',
  styleUrl: './pais-table.component.css'
})
export class PaisTableComponent {

  @Input()
  public paises: Country[] = [];

}
