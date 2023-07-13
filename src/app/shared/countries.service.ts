import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  europeUrl = "https://restcountries.eu/rest/v2/region/europe";
  asiaUrl = "https://restcountries.eu/rest/v2/region/asia";

  constructor(private http: HttpClient) { }

  getEurope(): Observable<Country[]>{
    return this.http.get<Country[]>(this.europeUrl);
  }

 getAsia(): Observable<Country[]>{
    return this.http.get<Country[]>(this.asiaUrl);
 }
 
}
