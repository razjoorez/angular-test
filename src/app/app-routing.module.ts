import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'regions', loadChildren: () => import('./regions/regions.module').then(m => m.RegionsModule) }, { path: 'country-details', loadChildren: () => import('./country-details/country-details.module').then(m => m.CountryDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
