import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IQuestionComponent} from '@app/lazy/questions/iquestion-component';
import {AMCountry, FormAddressService} from '@app/app-forms/address-form/form-address.service';
import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
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
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });


  countries: AMCountry [];
  states: VMSelect [];
  states$: Observable<VMSelect[]>;
  statesLabel: string;

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
      .subscribe(v => this.countries = v ? ARRAY.sortBy(v, 'label') : null)
    this.addressGroup.controls['country'].valueChanges.pipe(
      tap(v => {
        const props = this.formService.getCountry(v);
        console.log(props);
        this.statesLabel = props.statesLabel;
        this.states = props.states ? ARRAY.toArray(props.states) : null;
      })
    ).subscribe(v => {
      console.log(v)

    })

    /* this.formService.addresses$().subscribe(addr => {
       console.log(addr);

       console.log(cas)
       this.countries = cas;
       this.format = addr;
     })*/

  }

}

