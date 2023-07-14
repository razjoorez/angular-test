import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { CountryDetailsComponent } from './country-details.component';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from '../state/region.reducer';


@NgModule({
  declarations: [
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
    StoreModule.forFeature('country',regionReducer)
  ]
})
export class CountryDetailsModule { }
