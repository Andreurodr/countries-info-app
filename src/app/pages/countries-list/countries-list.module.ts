import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesListRoutingModule } from './countries-list-routing.module';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountriesListComponent } from './countries-list.component';


@NgModule({
  declarations: [
    CountryDetailComponent,
    CountriesListComponent
  ],
  imports: [
    CommonModule,
    CountriesListRoutingModule,
    FormsModule
  ]
})
export class CountriesListModule { }
