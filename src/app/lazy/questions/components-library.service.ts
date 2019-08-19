import { Injectable } from '@angular/core';
import {QuestionComponent} from '@app/lazy/questions/question-component';
import {AddressFormComponent} from '@app/app-forms/address-form/address-form.component';


@Injectable({
  providedIn: 'root'
})
export class ComponentsLibraryService {

  constructor() { }
  getComponent(name: string, data) {
    switch (name) {
      case 'Address': return new QuestionComponent(AddressFormComponent, data);
    }
  }
}
