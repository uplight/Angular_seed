import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {filter, map, share, shareReplay, tap} from 'rxjs/operators';
import {UtilsAddress} from '@app/app-forms/address-form/utils-address';
export interface AMCountry {
  label: string;
  id: string;
}
export interface SOAddressFormat {
  postalCode: {
    label: string,
    mask: string
  },
  statesLabel: string
  states: { [code: string]: string}
};


@Injectable({
  providedIn: 'root'
})
export class FormAddressService {

  allData: SOAddressFormat
   constructor(
    private http: HttpClient
  ) {

  }

  getCountry(id: string): SOAddressFormat {
    return this.allData[id];
  }
  loadAllData() {this.http.get('assets/mocks/address-data.json').pipe(
      share(),
      map((v: any) => v.payload.countries),
      tap(data => {
        console.log(data);
        this.allData = data;
        const countries: AMCountry[] = UtilsAddress.parseCountries(data)
        this.countries$.next(countries);
      })
    ).subscribe(data => {

  });

  }
  countries$: BehaviorSubject<AMCountry[]> = new BehaviorSubject(null);

}
