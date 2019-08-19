import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, share, shareReplay} from 'rxjs/operators';
export interface VOAddressFormat {
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

  private addressesMeta$: BehaviorSubject<VOAddressFormat> = new BehaviorSubject<VOAddressFormat>(null)
  addressesFormat$: Observable<VOAddressFormat> = this.addressesMeta$.asObservable().pipe(filter(v => !!v))
  constructor(
    private http: HttpClient
  ) {

  }

  addresses$ (): Observable<VOAddressFormat> {
    return this.http.get('assets/mocks/address-data.json').pipe(
      share(),
      map((v: any) => v.payload.countries)
    )
  }
}
