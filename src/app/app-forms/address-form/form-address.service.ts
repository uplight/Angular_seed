import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {filter, map, share, shareReplay, tap} from 'rxjs/operators';
import {UtilsAddress} from '@app/app-forms/address-form/utils-address';


export interface AMCountry {
  label: string;
  id: string;
}

export interface SMAddressFormat {
  postalCode: {
    label: string,
    mask: string
  },
  statesLabel: string
  states: { [code: string]: string }
};


@Injectable({
  providedIn: 'root'
})
export class FormAddressService {

  static returnCities(citiesAr: { city: string, state: string }[], state: string) {
    return citiesAr.filter(function (item) {
      return item.state === state;
    }).map(function (item) {
      return item.city
    })
  }

  allData: SMAddressFormat;
  cities: { [country: string]: { city: string, state: string }[] } = {};

  constructor(
    private http: HttpClient
  ) {

  }

  getCountry(id: string): SMAddressFormat {
    return this.allData[id];
  }

  loadAllData() {
    this.http.get('assets/mocks/address-data.json').pipe(
      share(),
      map((v: any) => v.payload.countries),
      tap(data => {

        this.allData = data;
        const countries: AMCountry[] = UtilsAddress.parseCountries(data)
        this.countries$.next(countries);
      })
    ).subscribe(data => {

    });

  }

  countries$: BehaviorSubject<AMCountry[]> = new BehaviorSubject(null);

  getCities(country: string, state: string): Promise<string[]> {

    if (this.cities[country]) {
      return Promise.resolve(FormAddressService.returnCities(this.cities[country], state));
    } else {
      const url = 'assets/mocks/cities_' + country + '.json';
      return this.http.get(url).toPromise().then((data: any) => {
        console.log(data)
        let out: { city: string, state: string }[] = [];
        switch (country) {
          case 'US':
            const states = Object.assign({}, this.getCountry('US').states);
            // tslint:disable-next-line:forin
            for (const str in states) {
              const name: string = states[str];
              if (!data[name] || !Array.isArray(data[name])) {

              } else {
                  data[name].forEach(function (item) {
                  out.push({
                    city: item,
                    state: str
                  })
                })
              }
            }
            break;
          case 'CA':
            out = data.map(function (item) {
              return {
                city: item[0],
                state: item[1]
              }
            });

            break;
          case 'IL':
            out = data.map(function (item) {
              return {
                city: item.eng_name,
                state: null
              }
            });
            break
        }
        this.cities[country] = out;
        return FormAddressService.returnCities(this.cities[country], state)
      })
    }
  }

}
