import { Component } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';
import {
  CountryInterface,
  CountryDetailInterface,
} from 'src/app/models/country.model';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent {
  countryList: CountryInterface[] = [];
  data: CountryDetailInterface[] = [];
  detail: CountryDetailInterface[] = [];
  filteredResults: CountryInterface[] = [];
  filterName: string = '';
  subscription!: Subscription;
  // id: string | undefined;
  // display: Boolean = false;

  constructor(
    private apiRequestService: ApiRequestService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.getCountries();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getCountries() {
    this.subscription = this.apiRequestService
      .getCountriesApi()
      .subscribe((list: CountryInterface[]) => {
        this.countryList = list;
        console.log(this.countryList);
      });
  }

  public getDetail(id: string) {
    // this.display = true;
    this.apiRequestService.getCountryDetailApi(id).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  filterCountry() {
    this.filteredResults = this.countryList.filter((element) =>
      element.name.toLowerCase().includes(this.filterName.toLowerCase())
    );
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([50, 50]);
  }
}
