import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {IQuestionComponent} from '@app/lazy/questions/iquestion-component';
import {AMCountry, FormAddressService} from '@app/app-forms/address-form/form-address.service';
import {combineLatest, concat, Observable, merge} from 'rxjs';
import {filter, map, startWith, tap} from 'rxjs/operators';
import {ARRAY} from '@app/utils/array/ARRAY';

export enum InputType {
  TEXT,
  NUMBER
}

export interface CountryProfile {
  type: string;
  postalCodeLabel: string;
  postalCodeInputType: InputType
  stateLabel: string;
  states: { [id: string]: string }
}

export interface AddressConfig {
  countries: string[];
}

export interface AMAddress {
  addressLine1: string;
  addressLine2: string;
  country: string;
  city: string;
  postalCode: string;
}

export interface VMSelect {
  id: string;
  label: string;
}

const POSTAL_CODE_DEFAULT = {label: '', mask: ''};

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  @Input() addressConfig: AddressConfig;
  @Output() valid: EventEmitter<AMAddress> = new EventEmitter<AMAddress>();


  addressGroup = this.fb.group({
    addressLine1: [null, Validators.required],
    addressLine2: null,
    country: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    yes: true,
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });


  countries: AMCountry [];
  states: VMSelect [];
  states$: Observable<VMSelect[]>;
  statesLabel: string;
  postalCode: { label: string, mask: string } = POSTAL_CODE_DEFAULT;
  cities: string[];

  cityOptions$: Observable<string[]>;
  countryControl = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
    private formService: FormAddressService
  ) {

  }

  onSubmit() {
    alert('Thanks!');
  }

  ngOnInit(): void {
    this.formService.loadAllData();
    this.formService.countries$
      .subscribe(v => this.countries = v ? ARRAY.sortBy(v, 'label') : null);
    this.addressGroup.controls['country'].valueChanges.pipe(
      tap(v => {
        const props = this.formService.getCountry(v);
        console.log(props);

        this.statesLabel = props.statesLabel;
        this.postalCode = props.postalCode || POSTAL_CODE_DEFAULT
        this.states = props.states ? ARRAY.toArray(props.states) : null;
        if (this.states) {
          this.cities = [];
        } else {
          this.formService.getCities(v, null).then(cities => {
            this.cities = cities;
          })
        }
      }),
    ).subscribe(v => {
      console.log(v)
    });

    this.addressGroup.controls['state'].valueChanges.subscribe(state => {
      const country: string = this.addressGroup.get('country').value;
      this.formService.getCities(country, state).then(cities => {
        this.cities = cities;
      })
    });

    this.cityOptions$ = this.addressGroup.controls['city'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value)),
        tap(v => console.log(v))
      );
  }

  private _filter(value: string): string[] {
    console.log(value, this.cities)
    if (!this.cities || !value) {
      return null
    }
    const filterValue = value.toLowerCase();
    return this.cities.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}

