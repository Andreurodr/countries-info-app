import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  CountryInterface,
  CountryApiResponseInterface,
  CountryDetailInterface,
} from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  constructor(private httpClient: HttpClient) {}

  getCountriesApi(): Observable<CountryInterface[]> {
    return this.httpClient
      .get<CountryApiResponseInterface[]>('https://restcountries.com/v3.1/all')
      .pipe(
        map((res) => {
          const countryList: CountryInterface[] = res.map((element) => {
            const country: CountryInterface = {
              name: element.name.common,
              flagImage: element.flags.png,
              id: element.cca3,
            };
            return country;
          });

          return countryList;
        })
      );
  }

  getCountryDetailApi(id: string): Observable<CountryDetailInterface[]> {
    return this.httpClient
      .get<CountryApiResponseInterface[]>(
        'https://restcountries.com/v3.1/alpha/' + id
      )
      .pipe(
        map((res) => {
          const detailList: CountryDetailInterface[] = res.map((element) => {
            const detail: CountryDetailInterface = {
              name: element.name.common,
              flagImage: element.flags.png,
              capital: element.capital,
              region: element.region,
              subregion: element.subregion,
              population: element.population,
              area: element.area,
              languages: element.languages,
              id: element.cca3,
            };
            return detail;
          });
          return detailList;
        })
      );
  }
}
