import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {IQuestionComponent} from '@app/lazy/questions/iquestion-component';

export enum InputType {
  TEXT,
  NUMBER
}

export interface CountryProfile {
  type: string;
  postalCodeLabel: string;
  postalCodeInputType: InputType
  stateLabel: string;
  states: {[id: string]: string}
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
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });




  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    alert('Thanks!');
  }
  ngOnInit(): void {
  }
}
