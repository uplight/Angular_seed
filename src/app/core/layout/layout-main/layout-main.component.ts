import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenavContainer} from '@angular/material';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.css']
})
export class LayoutMainComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', {static: true}) sidenavContainer: MatSidenavContainer;
  @ViewChild('settings', {static: true}) settingsContainer: MatSidenavContainer;
  isSideNav: boolean;
  isSettings: boolean;

  constructor() {

  }

  ngOnInit() {
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
