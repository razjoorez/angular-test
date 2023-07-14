import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  europeUrl = "https://restcountries.com/v2/region/europe";
  asiaUrl = "https://restcountries.com/v2/region/asia";

  constructor(private http: HttpClient) { }

  getCountries(region: string):Observable<Country[]> {
    if(region === 'Asia') return this.getAsia();
    else return this.getEurope();
  }

  getEurope(): Observable<Country[]>{
    return this.http.get<Country[]>(this.europeUrl);
  }

 getAsia(): Observable<Country[]>{
    return this.http.get<Country[]>(this.asiaUrl);
 }

}
