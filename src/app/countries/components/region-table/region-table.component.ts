import { Component, Input } from '@angular/core';
import { ByRegionPageComponent } from '../../pages/by-region-page/by-region-page.component';
import { CommonModule } from '@angular/common';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'region-table',
  standalone: true,
  imports: [
    CommonModule,
    ByRegionPageComponent,
  ],
  templateUrl: './region-table.component.html',
  styleUrl: './region-table.component.css'
})
export class RegionTableComponent {

  @Input()
  public regiones: Country[] = [];

}
