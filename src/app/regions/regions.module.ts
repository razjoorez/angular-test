import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from '../state/region.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegionsEffects } from '../state/regions.effects';


@NgModule({
  declarations: [
    RegionsComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    StoreModule.forFeature('regions', regionReducer),
    EffectsModule.forFeature([RegionsEffects])
  ]
})
export class RegionsModule { }
