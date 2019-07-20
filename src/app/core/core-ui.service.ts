import {Component, ComponentFactory, ComponentFactoryResolver, Inject, Injectable, Type, ViewContainerRef} from '@angular/core';
import {NavMenuComponent} from '@app/core/menu/nav-menu/nav-menu.component';
import {IS_MOBILE} from '@app/core/is-mobile';


@Injectable({
  providedIn: 'root'
})
export class CoreUiService {

  menu: ViewContainerRef;
  toolbar: ViewContainerRef;
  settings: ViewContainerRef;
  private isDone;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(IS_MOBILE) isMobile: string
  ) {

    console.log(isMobile);
  }

  setContainerRef(toolbar: ViewContainerRef, menu: ViewContainerRef, settings: ViewContainerRef) {
    this.toolbar = toolbar;
    this.menu = menu;
    this.settings = settings;
  }

  addComponents(toolbarFactory: ComponentFactory<any>,
                menuFactory: ComponentFactory<NavMenuComponent>,
                settingsFactory: ComponentFactory<any>) {
    if (this.isDone) { return; }
    this.isDone = true;
    const v2: any = this.menu.createComponent(menuFactory);

    const v1: any = this.toolbar.createComponent(toolbarFactory);
    v1._component.menuClick.subscribe(evt => {
      console.log(evt);
      switch (evt) {
        case 'menu':
          return v2._component.toggle();
        case 'settings':
          return
      }
    });



   //  const v3 = this.settings.createComponent(settingsFactory);
  }

  openMenu() {

  }



}
