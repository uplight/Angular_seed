import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  appLayout: ViewContainerRef;
  constructor() { }

  setContainer(container: ViewContainerRef) {
  }
}
