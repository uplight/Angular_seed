import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IQuestionComponent} from '@app/lazy/questions/iquestion-component';
import {FormAddressService, VOAddressFormat} from '@app/app-forms/address-form/form-address.service';
import {Observable} from 'rxjs';

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

export interface VOAddress {
  addressLine1: string;
  addressLine2: string;
  country: string;
  city: string;
  postalCode: string;
}


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  @Input() addressConfig: AddressConfig;
  @Output() valid: EventEmitter<VOAddress> = new EventEmitter<VOAddress>();

  addressForm = this.fb.group({
    addressLine1: [null, Validators.required],
    addressLine2: null,
    country: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });


  countries: { label: string, id: string } [];
  format: VOAddressFormat;
  sates: { [id: string]: string };
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
    this.formService.addresses$().subscribe(addr => {
      console.log(addr);
      const cas = []
      for (const str in addr) {
        if (addr.hasOwnProperty(str)) {
          cas.push({
            id: str,
            label: addr[str].label
          })
        }
      }
      console.log(cas)
      this.countries = cas;
      this.format = addr;
    })

  }

}

