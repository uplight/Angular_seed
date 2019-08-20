import {AMCountry} from '@app/app-forms/address-form/form-address.service';

export class UtilsAddress {
  static parseCountries(data): AMCountry[] {
    const cas = [];
    for (const str in data) {
      if (data.hasOwnProperty(str)) {
        cas.push({
          id: str,
          label: data[str].label
        })
      }
    }
    return cas;
  }
}
