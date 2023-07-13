import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountriesService } from '../shared/countries.service';
import * as regionsActions from '../state/regions.actions';
import { map, switchMap } from 'rxjs';
@Injectable()
export class RegionsEffects{
  constructor(private actions$: Actions,
    private countriesService: CountriesService){}

    loadAsia$ = createEffect(() => {
      return this.actions$
      .pipe(
          ofType(regionsActions.getAsia),switchMap(() => {
              return this.countriesService.getAsia().pipe(
                  map(countries => regionsActions.setCountries({countries}))
              )
          })
      )
  });

  loadEurope$ = createEffect(() => {
    return this.actions$
    .pipe(
        ofType(regionsActions.getEurope),switchMap(() => {
            return this.countriesService.getEurope().pipe(
                map(countries => regionsActions.setCountries({countries}))
            )
        })
    )
});
}
