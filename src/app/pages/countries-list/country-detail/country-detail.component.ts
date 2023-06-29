import { Component, Input } from '@angular/core';
import { CountryDetailInterface } from '../../../models/country.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent {
  @Input() data: CountryDetailInterface[] = [];
  obj: Object = {};

  ngOnInit(): void {}

  objectValues(value: any) {
    let newValue = Object.values(value);
    return newValue;
  }
}
