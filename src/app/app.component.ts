import {AfterViewInit, Component, Inject, ViewChild, ViewContainerRef} from '@angular/core';

import {RouteConfigLoadEnd, Router} from '@angular/router';
import {MatSidenavContainer} from '@angular/material';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav', {static: true}) sidenavContainer: MatSidenavContainer;
  @ViewChild('settings', {static: true}) settingsContainer: MatSidenavContainer;
  isSideNav: boolean;
  isSettings: boolean;

  constructor() {

  }


  ngAfterViewInit() {
    console.log(this.sidenavContainer);



    // this.sidenavContainer.scrollable.elementScrolled().subscribe(() => /* react to scrolling */);
  }

  openSideNav() {
    this.isSideNav = true;
    this.sidenavContainer.open();
  }

  closeSidenav() {
    this.isSideNav = false;
    this.sidenavContainer.close();
  }

  openSettings() {
    this.isSettings = true;
    this.settingsContainer.open();
  }

  closeSettings() {
    this.isSettings = false;
    this.settingsContainer.close();
  }

  toggleSideNav() {
    if (this.isSettings) { this.closeSettings() }
    if (this.isSideNav) {
      this.closeSidenav();
    } else {
      this.openSideNav()
    }
  }

  toggleSettings() {
    if (this.isSideNav) { this.closeSidenav() }
    if (this.isSettings) {
      this.closeSettings();
    } else {
      this.openSettings()
    }
  }

  onCloseSettings() {
    this.isSettings = false;

  }

  onCloseSideNav() {
    this.isSideNav = false;
  }

  onMenuClick(evt: string) {

    switch (evt) {
      case 'menu':
        return this.toggleSideNav();
      case 'settings':
        return this.toggleSettings();
    }
  }
}
