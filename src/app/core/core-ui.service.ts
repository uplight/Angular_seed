import {Component, ComponentFactory, ComponentFactoryResolver, Inject, Injectable, Type, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreUiService {

  menu: ViewContainerRef;
  toolbar: ViewContainerRef;
  settings: ViewContainerRef;
  private isDone;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  setContainerRef(toolbar: ViewContainerRef, menu: ViewContainerRef, settings: ViewContainerRef) {
    this.toolbar = toolbar;
    this.menu = menu;
    this.settings = settings;
  }

  addComponents(toolbarFactory: ComponentFactory<any>, menuFactory: ComponentFactory<any>, settingsFactory: ComponentFactory<any>) {
    if (this.isDone) { return; }
    this.isDone = true;

    const v1 = this.toolbar.createComponent(toolbarFactory);
    const v2 = this.menu.createComponent(menuFactory);
    const v3 = this.settings.createComponent(settingsFactory);

  }



}
