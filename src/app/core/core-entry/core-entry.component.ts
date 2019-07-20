import {AfterViewChecked, Component, ComponentFactory, ComponentFactoryResolver, OnInit} from '@angular/core';
import {CoreUiService} from '@app/core/core-ui.service';
import {HeaderComponent} from '@app/core/header/header/header.component';
import {MatDialog} from '@angular/material';
import {NavMenuComponent} from '@app/core/menu/nav-menu/nav-menu.component';
import {SettingsPanelComponent} from '@app/core/settings/settings-panel/settings-panel.component';

@Component({
  selector: 'app-core-entry',
  templateUrl: './core-entry.component.html',
  styleUrls: ['./core-entry.component.css']
})
export class CoreEntryComponent implements OnInit, AfterViewChecked {

  constructor(
    private dialog: MatDialog,
    private coreUI: CoreUiService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    const toolbar: ComponentFactory<any> =  componentFactoryResolver.resolveComponentFactory(HeaderComponent);
    const menu: ComponentFactory<any> =  componentFactoryResolver.resolveComponentFactory(NavMenuComponent);
    const settings: ComponentFactory<any> =  componentFactoryResolver.resolveComponentFactory(SettingsPanelComponent);
    this.coreUI.addComponents(toolbar, menu, settings);
  }

  ngOnInit(): void {
// console.log(HeaderComponent);
  //   this.dialog.open(HeaderComponent, {width: '300px', height: '300px'});

/*
setTimeout(() => {
  this.coreUI.addMenu(HeaderComponent);
}, 2000)
*/


  }
  ngAfterViewChecked(): void {

  }
}
