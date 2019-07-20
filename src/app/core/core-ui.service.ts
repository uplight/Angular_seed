import {Component, ComponentFactoryResolver, Inject, Injectable, Type, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreUiService {

  menuViewContainer: ViewContainerRef;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  setMenuContainerRef(viewContainerRef: ViewContainerRef) {
    this.menuViewContainer = viewContainerRef;
  }

  addMenu(componentFactory: any) {
   //  this.componentFactoryResolver.resolveComponentFactory(component);
   //  console.log(this.componentFactoryResolver)

  //  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const viewContainerRef = this.menuViewContainer;
   //  console.log(component, this.menuViewContainer);
  //  viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

  }

}
